import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Character from './components/Character'

const App = () => {
const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
        .then(response => {
            setCharacters(response.data.results)
        })
        .catch(error => {
            console.log(error, "error") 
        })
}, [characters]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((characters, id) => (
        <Character key={id} character={characters} />
      ))}
    </div>
  );
}

export default App;
