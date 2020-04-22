import React from 'react';

function Header({doMath}) {
    const sections = [
        "Addition",
        "Multiplication",
        "Subtraction",
    ]
    return (
        <div className="header-buttons">
        {
            sections.map((s, i) =>  {
                return (
                <button key={i}
                    className="ui big green button" 
                    onClick={ () => doMath(s.toLowerCase())}>
                    {s}
                </button>)
            })
        }
        </div>
        )
}

export default Header;