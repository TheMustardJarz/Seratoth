import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';

function Register(props) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)

    const handleUser = e => {
        setUsername(document.getElementById("usernameField").value)
        document.getElementById("usernameField").value = ""
    
        setPassword(document.getElementById("passwordField").value)
        document.getElementById("passwordField").value = ""
    
        setEmail(document.getElementById("emailField").value)
        document.getElementById("emailField").value = ""
    }

    return (
        <div>
            <div>
            </div>
            <div>
                <button onClick={handleUser}>
                Login!
                </button>
            </div>
            <div>
                <input id='usernameField'>
                </input>
                <input id='passwordField' type='password'>
                </input>
                <input id='emailField' type='email'>
                </input>
            </div>
            <div>
                Current Username: {username}
            </div>
            <div>
                Current Unhashed Password: {password}
            </div>
            <div>
                Current Email: {email}
            </div>
        </div>
    )
}