import { useState, useRef } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

// LOAD STYLES
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './users.css';
import UsersService from './users-service';


const UsersPage = () => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const toast: any = useRef(null);
	const userService = new UsersService;

	// ==============================
	// ADD USER
	// ==============================
	function insertUser(event: any) {
		event.preventDefault();
		setLoading(true);

		var body = {
			name: event.target.name.value,
			email: event.target.email.value,
			position: event.target.position.value
		}
		userService.addUser(body).then(result => {
			var toastData = {
				type: 'success',
				title: 'Success',
				message: 'Add user successfully'
			}
			toastLoad(toastData);
			event.target.reset();
			setLoading(false)
		}).catch(error => {
			var toastData = {
				type: 'error',
				title: 'Error',
				message: 'Add user failed'
			}
			toastLoad(toastData);
			setLoading(false)
		})
	}

	// ==============================
	// LOAD TOAST
	// ==============================
	function toastLoad(toastData: any) {
		toast.current.show({ severity: toastData.type, summary: toastData.title, detail: toastData.message, life: 3000 });
	}

	return (
		<div className="container">
			<Toast ref={toast} />

			<h1>Add User</h1>
			<Button label="Back" onClick={() => history.goBack()} icon="pi pi-arrow-left" />
			<form onSubmit={(event) => insertUser(event)} className="form-input">
				<div className="form-group">
					<span className="p-float-label">
						<InputText type="text" id="name" name="name" disabled={loading} className="input-text" required />
						<label htmlFor="name">Name</label>
					</span>
				</div>
				<div className="form-group">
					<span className="p-float-label">
						<InputText type="email" id="email" name="email" disabled={loading} className="input-text" required />
						<label htmlFor="email">Email</label>
					</span>
				</div>
				<div className="form-group">
					<span className="p-float-label">
						<InputText type="text" id="position" name="position" disabled={loading} className="input-text" required />
						<label htmlFor="position">Position</label>
					</span>
				</div>
				<div className="form-group">
					<Button type="submit" label="Save" className="btn-save" loading={loading} />
				</div>
			</form>
		</div>
	)
}

export default UsersPage
