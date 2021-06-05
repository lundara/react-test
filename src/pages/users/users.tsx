import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

// LOAD STYLES
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './users.css';

// LOAD SERVICE
import UsersService from './users-service';

const UsersPage = () => {
    
    interface User {
        id: number;
        name: string;
        email: string;
        position: string;
        createdAt: Date;
        avatar: string;
    }

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const history = useHistory();
    const usersService = new UsersService();

    // ==============================
    // SET TEMPLATE FOR PAGINATION
    // ==============================
    const template: any = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options: any) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-p-3">Previous</span>
                    <Ripple />
                </button>
            )
        },
        'NextPageLink': (options: any) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-p-3">Next</span>
                    <Ripple />
                </button>
            )
        },
        'PageLinks': (options: any) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            )
        },
        'RowsPerPageDropdown': (options: any) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />;
        }
    };

    useEffect(() => {
        getUsers();
    }, [])

    // ==============================
    // PAGE CONFIG
    // ==============================
    function pageConfig(event: any) {
        setFirst(event.first);
        setRows(event.rows);
    }

    // ==============================
    // GET USERS DATA
    // ==============================
    function getUsers() {
        usersService.getUsers().then(result => {
            setUsers(result);
            setLoading(false)
        }).catch(error => {
            setLoading(false)
        })
    }

    return (
        <div className="container">
            <h1>Users Data</h1>
            <Button label="New" onClick={() => history.push('/users/add')} icon="pi pi-plus" />
            <DataTable
                className="p-datatable-gridlines datatable"
                value={users}
                paginator
                paginatorTemplate={template}
                first={first}
                rows={rows}
                loading={loading}
                onPage={(event) => pageConfig(event)}>
                <Column field="name" header="Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="position" header="Position"></Column>
            </DataTable>
        </div>
    )
}

export default UsersPage
