import React from 'react';
import './App.css';

let todo1 = "TO DO LIST 1"
let todo2 = "TO DO LIST 2"
let isBig = true;

const About = (props) => {
    console.log(props)
  return (
    <div className="App">
      <h1 style={{color:"red", textAlign:"center", paddingTop:"10vh"}}>{todo1}</h1>
        <ul style={{listStyleType:"none", textAlign:"center"}}>
          <li>Learn how to add style</li>
          <li>Catch Pikachu</li>
      </ul>

      <h1 style={{color:"navy", textAlign:"center", paddingTop:"10vh"}}>{todo2}</h1>
        <ul style={{listStyleType:"none", textAlign:"center"}}>
          <li>Don't forget: style is an object. Use ":", not "="</li>
          <li>Eat pizza</li>
      </ul>
          <h2 className={isBig ? 'big' : 'small'}>some Text</h2>

          <p>{props.inhalt}</p>
            <h4>{props.super}</h4>
    </div>
  );
}

export default About;