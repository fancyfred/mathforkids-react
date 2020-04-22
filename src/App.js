import React, { useState } from 'react';
import './App.css';
import Equation from './components/Equation';
import Answer from './components/Answer';
import Header from './components/Header';


const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateNewNumbers = () => {
  const a = getRandomNum(0,10);
  const b = getRandomNum(0,10);
  return [a,b];
}

function App() {
  const [numbers, setNumbers] = useState(generateNewNumbers());
  const [equationType, setEquationType] = useState("addition");
  const [isShow, setIsShow] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isNew, setIsNew] = useState(true);

  const check = (value, answer) => {
      console.log(value, answer);
      if (value === answer) {
          console.log('right');
          setIsNew(false);
          setIsShow(true);
          setIsCorrect(true);
      } else {
          console.log('wrong');
          setIsNew(false);
          setIsShow(true);
          setIsCorrect(false);
      }
    }



  const generateNewEquation = (eqType) => {
    setEquationType(eqType);
    setIsShow(false);
    setIsCorrect(null); 
    setIsNew(true);
    setNumbers(generateNewNumbers());
  }

  const again = () => {
    generateNewEquation(equationType);
  }

  return (
    <div className="App">
      <Header doMath={generateNewEquation}/>
      <Equation 
        type={equationType} 
        numbers={numbers} 
        mainCallback={check}
        isNew={isNew}
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
