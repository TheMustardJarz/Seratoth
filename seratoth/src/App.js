import React from 'react';
import { useState } from 'react'
import './App.css';

function App(props) {
  const [username, setUsername] = useState(null)
  const [password, setpassword] = useState(null)
  const [email, setEmail] = useState(null)

  const handleUser = e => {
    setUsername(userField.value)
    userField.value = ""
    setpassword(passField.value)
    passField.value = ""
    setEmail(emailField.value)
    emailField.value = ""
  }

  var userField = document.getElementById("usernameField")
  var passField = document.getElementById("passwordField")
  var emailField = document.getElementById("emailField")

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
  );
}

export default App;
