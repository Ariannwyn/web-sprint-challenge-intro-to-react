// Write your Character component here
import React from 'react';
import Lightsaber from './Lightsaber'
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background: #32323a;
    width: 500px;
    border-radius: 8px;
    margin: 4%;
    margin-left: 25%;
    transition: transform 1000ms ease-in-out;
 
    &:hover {
      transform: translate(200px) 
    }
    
`
const Paragraph = styled.p`
    color: white;
    font-size: 1.2rem;
`

const Character = props => {
  
    return (
        <StyledWrapper className="character-card">
            <Paragraph>{props.character.name}</Paragraph>
            <Paragraph>Hair color: {props.character.hair_color}</Paragraph>
            <Paragraph>Birth year: {props.character.birth_year}</Paragraph>
            <Lightsaber />
        </StyledWrapper>
    )

};

export default Character;