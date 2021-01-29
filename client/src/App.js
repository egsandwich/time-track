import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard'


function App() {
  const [apiResponse, setApiResponse] = useState("")

  useEffect(() => {
    fetch("http://localhost:9000/testBackend")
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => err);
  })
  return (
    <div className="App">
      <Dashboard />
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
