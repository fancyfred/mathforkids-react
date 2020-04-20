import React, { useEffect } from 'react';
import Options from './Options';

const getEquation = (eqType, numbers) => {
    console.log(eqType, numbers);
  let equation = "What's ";
  const symbols = {
    multiplication : 'x',
    addition: '+',
    subtraction: '-'
  }
  for(let n in numbers) {
    if(n < numbers.length - 1) {
      equation += numbers[n] + ' ' + symbols[eqType] + ' ';
    } else {
      equation += numbers[n] + ' ?';
    }
  }
  return equation;
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
    default:
      break;
  }
  return answer;
}

function Equation({type, numbers, mainCallback, update}) {

  return (
    <div className="equation">
        <div className="question">{getEquation(type, numbers)}</div>
        <Options 
          type={type} 
          answer={getAnswer(type, numbers)} 
          mainCallback={mainCallback}
        />
    </div>
  );
}

export default Equation;
