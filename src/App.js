import React, { useState } from 'react';
import './App.css';
import Equation from './components/Equation';
import Answer from './components/Answer';
import Header from './components/Header';
import helpers from './helpers/numbers';

const generateNewNumbers = (equationLength = 2) => {
  let equationNumbers = [];
  for(let i = 0; i < equationLength; i++) {
    equationNumbers.push(helpers.getRandomNum(0,10));
}
  return equationNumbers;
}

const getAnswer = (eqType, numbers) => {
  let answer = 0;
  switch(eqType) {
    case 'addition':
      answer = numbers.reduce((a,b) => a + b);
      break;
    case 'subtraction':
      answer = numbers.reduce((a,b) => a - b);
      break;
    case 'multiplication':
      answer = numbers.reduce((a,b) => a * b);
      break;
    case 'division':
        answer = numbers.reduce((a,b) => a / b);
      break;
    default:
      break;
  }
  return answer;
}


function App() {
  console.log('App is rendering');
  const [equationLength, setEquationLenth] = useState(3);
  const [numbers, setNumbers] = useState(generateNewNumbers(equationLength));
  const [equationType, setEquationType] = useState("addition");
  const [showAnswer, setShowAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answer, setAnswer] = useState(getAnswer(equationType, numbers));
  const [mc, setMc] = useState(helpers.getOptions(equationType, answer));

  const check = (value, answer) => {
    if (value === answer) {
        console.log('right');
        setShowAnswer(true);
        setIsCorrect(true);
    } else {
        console.log('wrong');
        setShowAnswer(true);
        setIsCorrect(false);
    }
  }

  const [payload, setPayload] = useState({
    equationType,
    numbers,
    mc,
    answer,
    mainCallback: check
  });


  const generateNewEquation = (eqType) => {
    // hide the answer feedback area
    setShowAnswer(false);
    if(eqType !== equationType) {
      // lock in the new equation type to the state
      setEquationType(eqType);
    }
    // why can't I use setState here. TODO: change all below to setState and see what happens
    // I seem to have to create a const and add it to payload
    const numbers2 = generateNewNumbers(equationLength);
    const answer2 = getAnswer(eqType, numbers2);
    const mc2 = helpers.getOptions(eqType, answer2)
    setPayload({
      equationType: eqType,
      numbers: numbers2,
      answer: answer2,
      mc: mc2,
      mainCallback: check
    });
  }

  const again = () => {
    generateNewEquation(equationType);
  }

  return (
    <div className="App">
      <Header doMath={generateNewEquation}/>
      <Equation payload={payload}/>
      <button className="ui massive blue button" 
        onClick={ () => again()}>
          Again
      </button>
      <Answer showAnswer={showAnswer} isCorrect={isCorrect}/>
    </div>
  );
}

export default App;
