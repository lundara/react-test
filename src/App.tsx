import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
