import React, { useState, useEffect } from 'react';
import './App.css';
import Equation from './components/Equation';
import Answer from './components/Answer';

function App() {


  const [numbers, setNumbers] = useState([1,2]);
  const [equationType, setEquationType] = useState("addition");
  const [isShow, setIsShow] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const check = (value, answer) => {
    console.log(value, answer);
    if (value === answer) {
        console.log('right');
        setIsShow(true);
        setIsCorrect(true);
    } else {
        console.log('wrong');
        setIsShow(true);
        setIsCorrect(false);
    }
  }

  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const generateNewNumbers = () => {
    const a = getRandomNum(0,10);
    const b = getRandomNum(0,10);
    setNumbers([a,b]);
  }

  const generateNewEquation = (eqType) => {
    setEquationType(eqType);
    setIsShow(false);
    setIsCorrect(null); 
    generateNewNumbers();
  }

  const again = () => {
    generateNewEquation(equationType);
  }
  const doMultiplication = () => { generateNewEquation("multiplication"); };
  const doSubtraction = () => { generateNewEquation("subtraction"); };
  const doAddition = () => { generateNewEquation("addition"); };
  return (
    <div className="App">
      <div className="header-buttons">
        <button className="ui big green button" onClick={ () => doAddition()}>
          Addition
        </button>
        <button className="ui big green button" onClick={ () => doMultiplication()}>
          Multiplication
        </button>
        <button className="ui big green button" onClick={ () => doSubtraction()}>
          Subtraction
        </button>
      </div>
      <Equation 
        type={equationType} 
        numbers={numbers} 
        mainCallback={check}
        />
      <button className="ui massive blue button" 
        onClick={ () => again()}>
          Again
      </button>
        <div className={isShow ? 'answer': 'answer hide'}>
          <Answer isShow={isShow} isCorrect={isCorrect}/>
        </div>
    </div>
  );
}

export default App;
