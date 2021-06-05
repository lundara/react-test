import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

const Navbar = () => {
    const history = useHistory();
    const items = [
        {
            label: 'Home',
            command: () => history.push('/')
        },
        {
            label: 'Counter',
            command: () => history.push('/counter')
        },
        {
            label: 'Users',
            command: () => history.push('/users')
        }
    ]
    return (
        <Menubar model={items} />
    )
}

export default Navbar
