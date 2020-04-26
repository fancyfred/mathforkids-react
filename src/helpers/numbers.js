/* getting the multichoices: */

// const numOptions = 5;

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const createArrayOfRandumNumbers = (size, min, max, reject=-100, noRepeat=true, desc=false) => {
    // console.log(size, min, max, reject, noRepeat, desc);
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

const createRandomChoices = (answer, numberOfOptions) => {
    let choices = createArrayOfRandumNumbers(numberOfOptions - 1, 0, answer * 2, answer);
    let randomIndex = createArrayOfRandumNumbers(1, 0, numberOfOptions);
    choices.splice(randomIndex, 0, answer);
    return choices;
}

const getOptions = (eqType, answer, numberOfOptions=3) => {
    let multiChoices = [];
    switch(eqType) {
        case 'addition':
            multiChoices = createRandomChoices(answer, numberOfOptions);
            break;
        case 'subtraction':
            multiChoices = createRandomChoices(answer, numberOfOptions);
            break;
        case 'multiplication':
            multiChoices = createRandomChoices(answer, numberOfOptions);
            break;
        default:
            break;
    }
    return multiChoices;
}

/* end.. multichoices */

const helpers = {
    getOptions:getOptions,
    getRandomNum:getRandomNum,
    createArrayOfRandumNumbers:createArrayOfRandumNumbers
}

export default helpers;

