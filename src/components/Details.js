import React from "react";
import styled from 'styled-components';


const StyledDetails = styled.div`
*{
    font-size: ${pr => pr.theme.fontSize};
}
text-align: center;
display:flex;
justify-content:center;
ul{
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    margin:auto;
}
p{
    color: ${pr => pr.theme.primaryColor};

}
`

function Details (props) {
    const { close, details, currentCharId} = props;
    
    return (
        <>
        {
            details &&
            <StyledDetails>
                <ul>
                    <p>ID: {details.id}</p>
                    <p>SPECIES: {details.species}</p>
                    <p>GENDER: {details.gender}</p>
                    <p>STATUS: {details.status}</p>
                </ul>
            </StyledDetails>
        }
        </>
    )
}
export default Details