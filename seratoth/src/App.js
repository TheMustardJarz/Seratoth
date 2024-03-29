import React from 'react';
import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [value, setVal] = useState(null)

  useEffect(() => {
    function fetchData() {
      fetch('http://localhost:5000/')
      .then(response => {return response.json()})
      .then(jsonOutput => {setVal(jsonOutput)})
      .catch((error => console.log("**Fetch exception:" + error)))
    }

    fetchData()
  })

  return (
    <div>
      <button onClick={() => setVal({value} + 1)}>
        {value}
      </button>
    </div>
  );
}

export default App;
