import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';

function Register(props) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <div>
            <input>
                Username
            </input>
            <input type='password'>
                password
            </input>
            <input type='email'>
                email
            </input>
        </div>
    )
}