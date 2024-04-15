import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import HeaderBar from './HeaderBar'

function App(props) {
  const [value, setVal] = useState(null)

  useEffect(() => {
    function fetchData() {
      fetch('http://localhost:3000/')
      .then(response => {return response.json()})
      .then(jsonOutput => {setVal(jsonOutput)})
      .catch((error => console.log("**Fetch exception:" + error)))
    }
    fetchData()
  })

  return (
    <div>
      <button onClick={() => setVal(prevValue => prevValue + 1)}>
        {value}
      </button>
      <button>
        Login!
      </button>
    </div>
  );
}

export default App;
