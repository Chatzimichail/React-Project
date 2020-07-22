import React from 'react';
import styled from 'styled-components'

const person = (props) =>{

const style = {
    '@media (min-width: 500px)':{
        width: '450px'
    }
};

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    '@media (min-width: 500px)':{
        width: '450px'
    }
`

return (

    <StyleDiv>
        <p onClick = {props.click}>I am {props.name} with age {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </StyleDiv>
    
)
};

export default person;