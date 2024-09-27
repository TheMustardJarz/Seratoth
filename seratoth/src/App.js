import React from 'react';
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './App.css';
import './Register.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App(props) {
	const root = ReactDOM.createRoot(document.getElementById('root'));

  	return (
		<div>
		<header>
			<Router>
				<Routes>
					<Route path="/register" element={root.render(Register())} />
				</Routes>
			</Router>
		</header>
		<body>
			<div>
				<p>Hello World!</p>
			</div>
		</body>
		</div>
  	);
}

export default App;
