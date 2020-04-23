import React from 'react';
import Options from './Options';

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

function Equation({payload}) {
  console.log('equation is rendering', payload);
  // console.log(type, numbers, answer, mc);
  return (
    <div className="equation">
        <div className="question">{getEquation(payload.equationType, payload.numbers)}</div>
        <Options
          answer={payload.answer}
          mc={payload.mc}
          mainCallback={payload.mainCallback}
          />
    </div>
  );
}

export default Equation;
