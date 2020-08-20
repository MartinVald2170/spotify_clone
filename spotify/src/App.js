import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Components/Login"
import { getTokenFromResponse } from "./Components/spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player"
import { useDataLayerValue } from "./Components/DataLayer"


const spotify = new SpotifyWebApi();



function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash="";
        const _token = hash.access_token;

        if (_token) {

          dispatch({
            type: "SET_TOKEN",
            token: _token,
          })

          spotify.setAccessToken(_token);

          spotify.getMe().then((user) => {
            dispatch({
              type: "SET_USER", 
              user: user,
            });
          });
        }
        
      
    }, []);

    



  return (
    <div className="app">

    {
      token ? (
      <Player />
      ): (
    <Login />
      )
}
    

    </div>
  );
}

export default App;
