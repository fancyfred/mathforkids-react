import React, { useState } from 'react';
import Options from './Options';

/* getting the multichoices: */

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const createArrayOfRandumNumbers = (size, min, max, reject=-100, noRepeat=true, desc=false) => {
    console.log(size, min, max, reject, noRepeat, desc);
    let counter = 0;
    let numbers = [];
    while (counter < size) {
        counter++;
        let x = getRandomNum(min, max);
        // x is not the number to be rejected
        if(x !== reject) {
            // if we don't allow repeated values
            if(numbers.length > 0 && noRepeat) {
                if(numbers.indexOf(x) === -1) {
                    numbers.push(x);
                } else {
                    counter--;
                }
            } else {
                numbers.push(x);
            }
        } else {
            counter--;
        }
    }
    if(desc) {
        console.log(numbers);
        return numbers.sort((a,b)=>b-a);
    }
    return numbers;
}

const createRandomChoices = (answer) => {
    const numOptions = 3;
    let choices = createArrayOfRandumNumbers(numOptions - 1, 0, 20, answer);
    let randomIndex = createArrayOfRandumNumbers(1, 0, numOptions);
    choices.splice(randomIndex, 0, answer);
    return choices;
}

const getOptions = (eqType, answer) => {
    let multiChoices = [];
    switch(eqType) {
        case 'addition':
            multiChoices = createRandomChoices(answer);
            break;
        case 'subtraction':
            multiChoices = createRandomChoices(answer);
            break;
        case 'multiplication':
            multiChoices = createRandomChoices(answer);
            break;
        default:
            break;
    }
    return multiChoices;
}

/* end.. multichoices */

const getEquation = (eqType, numbers) => {
    console.log(eqType, numbers);
  let equation = "What's ";
  const symbols = {
    multiplication : 'x',
    addition: '+',
    subtraction: '-',
    division: '/'
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
    case 'division':
        answer = numbers.reduce((a,b) => a / b);
      break;
    default:
      break;
  }
  return answer;
}

function Equation({type, numbers, mainCallback, isNew}) {

  const [ answer, setAnswer ] = useState(getAnswer(type, numbers));
  const [ mc, setMc ] = useState(getOptions(type, answer));

  const myCallback = (c) => {
      // this will cause infinite loop:
      // setAnswer(getAnswer(type, numbers));
      // setAnswer(getAnswer(type, numbers));
      // setMc(getOptions(type, answer));
      console.log(c);
  }
  return (
    <div className="equation">
        <div className="question">{getEquation(type, numbers)}</div>
        <Options
          answer={answer}
          mc={mc}
          mainCallback={mainCallback}
          myCallback={myCallback}
          />
    </div>
  );
}

export default Equation;
