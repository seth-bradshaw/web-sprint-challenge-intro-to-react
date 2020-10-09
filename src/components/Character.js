import React from "react";
import styled from 'styled-components';
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
    flex-wrap: wrap;
    font-size: 3rem;
    width:25%;
    img{
        width:100%;
        margin: auto;
        box-shadow: 10px 10px;
    }
    h2{
        text-shadow: 0px 0px 20px ${pr => pr.theme.primaryColor};
        font-size:1.5rem;
    }
    @media ${pr => pr.theme.breakPoints.desktop2}{
        width:30%;
        display: flex;
        justify-content: space-evenly;
    }
    @media ${pr => pr.theme.breakPoints.desktop}{
        width:50%;
        display: flex;
        justify-content: space-evenly;
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
    }
`

function Character(props) {
    
        
        const {characters} = props;
        const characterCard = characters.map(character => {
            return (
                <StyleCard className='charCard' key={character.id}>
                    <ul className='charInfo'>
                    <img src={character.image} alt='Character Image'></img>
                        <h2>{character.name}</h2>
                        <p>ID: {character.id}</p>
                        <p>SPECIES: {character.species}</p>
                        <p>GENDER: {character.gender}</p>
                        <p>STATUS: {character.status}</p>
                    </ul>
                </StyleCard>
            
            )
        })
        return <Container>{characterCard}</Container>;
        
    
}
export default Character