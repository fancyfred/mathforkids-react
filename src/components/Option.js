import React, { Component } from 'react';

function Option ({key, answer, value, mainCallback}) {
    console.log(answer, value);
    console.log('render option');
    return (
        <div 
            key={key}
            className="option"
            onClick={ () => mainCallback(value, answer)}>
                {value}
        </div>
    );
}
    
export default Option;