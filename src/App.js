import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
    }
    getCharacters();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters}></Character>
    </div>
  );
}

export default App;
