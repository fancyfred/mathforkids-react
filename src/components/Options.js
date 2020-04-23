import React, { setState } from 'react';

function Option({answer, value, i, mainCallback}) {
    return(
        <div 
            className="option"
            key={i}
            onClick={ () => {
                mainCallback(value, answer)                        
            }}>
            {value}
        </div>
    )
}

function Options({answer, mc, mainCallback}) {
    console.log('options is rendering');
    console.log("answer is:" + answer);

    return (
        <div className="options">
            {mc.map(
                (value, i) => <Option answer={answer} value={value} key={i} mainCallback={mainCallback}/>
            )}
        </div>
    )
}

export default Options;
