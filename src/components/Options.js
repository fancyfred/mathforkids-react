import React from 'react';
import Option from './Option';

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

const presentOption = (value, i, answer, mainCallback) => {
    return <Option 
        key={i}
        value={value} 
        answer={answer} 
        mainCallback={mainCallback}
        />
}

function Options({type, answer, mainCallback}) {
    console.log('render options');

    return (
    <div className="options">
        {getOptions(type, answer).map(
            (v, i) => presentOption(v, i, answer, mainCallback))}
    </div>
  );
}

export default Options;
