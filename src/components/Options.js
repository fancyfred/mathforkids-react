import React, { setState } from 'react';

function Options({answer, mc, mainCallback, myCallback}) {
    console.log('render options');
    return (
        <div className="options">
            {mc.map(
                (value) => {
                    return(
                    <div 
                        className="option"
                        onClick={ () => {
                            mainCallback(value, answer);
                            myCallback(value + ' was clicked');
                        }}>
                        {value}
                    </div>
                    )
                }
            )}
        </div>
    )
}

export default Options;
