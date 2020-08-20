import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Components/Login"
import { getTokenFromResponse } from "./Components/spotify"



function App() {

  const [token, setToken] = useState(null);

  // Run code based on a given condition
    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash="";
        const _token = hash.access_token;

        if (_token) {
          setToken(_token)
        }
        
      
    }, []);



  return (
    <div className="app">

    {
      token ? (
      <h1>I am logged in</h1>
      ): (
    <Login />
      )
}
    

    </div>
  );
}

export default App;
