import React from 'react';
import classes from './Cockpit.css';;

const cockpit = (props) => {

    return(
        <div className ={classes.Cockpit}>
            <h1> Heloo Dimitris</h1>
            <button onClick= {props.onClick}>Switch name</button> 
        </div>
    );
}

export default cockpit;
