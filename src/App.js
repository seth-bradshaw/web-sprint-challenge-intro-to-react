import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;

`

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentCharId, setCurrentCharId] = useState(null)

  const openDetails = id => {
    setCurrentCharId(id)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
        <StyledDiv>
        {
        characters.map(char => {
        
        return <Character key={char.id} character={char} open={openDetails} close={closeDetails} currentCharId={currentCharId}></Character>
        })
      }
      </StyledDiv>
    </div>
  );
}

export default App;
