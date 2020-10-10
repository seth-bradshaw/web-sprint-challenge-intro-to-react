import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Details from './Details'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
`
const StyleCard = styled.div`
    *{
        font-size: ${pr => pr.theme.fontSize};
    }
    color: ${pr => pr.theme.primaryColor};
    background-color: ${pr => pr.theme.secondaryColor};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 3rem;
    width: 25%;
    justify-content: center;
    button{
        background-color: ${pr => pr.theme.primaryColor};
        color: ${pr => pr.theme.secondaryColor};
        border-radius: 15px;
        padding: 2.5%;
        border: none;
    }
    img{
        width:100%;
        margin: auto;
        box-shadow: 10px 10px;
        &:hover{
            transform: Scale(1.15);
        }
    }
    h2{
        text-shadow: 0px 0px 20px ${pr => pr.theme.primaryColor};
        font-size:1.5rem;
    }
    @media ${pr => pr.theme.breakPoints.desktop2}{
        width:30%;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        
    }
    @media ${pr => pr.theme.breakPoints.desktop}{
        width:50%;
        display:flex;
        text-align: center;
        ul{
            display:flex;
            flex-direction:column
        }
    }
    @media ${pr => pr.theme.breakPoints.tablet}{
        width:50%;
        display: flex;
        justify-content: space-between;
        font-size: 2.5rem;
        img{
            width:80%;
        }
        h2{
            font-size:1.5rem;
        }
        text-align: center;
        ul{
            display:flex;
            flex-direction:column
        }
    }
    @media ${pr => pr.theme.breakPoints.mobile}{
        width:100%;
        display: flex;
        justify-content: center;
        font-size: 2.5rem;
        img{
            width:100%;
        }
        h2{
            font-size:1.5rem;
        }
        text-align: center;
        ul{
            display:flex;
            justify-content:center;
        }
    }
`

function Character(props) {
        const {character, open, close, currentCharId} = props;

        const [details, setDetails] = useState(null)
        useEffect(() => {
            currentCharId === character.id &&
            axios.get(`https://rickandmortyapi.com/api/character/${currentCharId}`)
                .then(res => {
                    setDetails(res.data)
                    
                })
                .catch(err => {
                    console.log(err)
                })
        },[currentCharId])
        
            return (
                <StyleCard className='charCard' key={character.id}>
                    <ul className='charInfo'>
                        <img src={character.image} alt='Character Image'></img>
                        <h2>{character.name}</h2>
                        {
                            currentCharId === null ?
                            <button onClick={() => open(character.id)} >DETAILS</button> 
                            : <button onClick={(e) => console.log(e)} onClick={close}>CLOSE</button>
                        }
                        
                        
                    </ul>
                    {
                        currentCharId === character.id &&
                        <Details details={details} currentCharId={character.id} ></Details>
                    }
                </StyleCard>
            )
}
export default Character