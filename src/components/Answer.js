import React from 'react';

function Answer({showAnswer, isCorrect}) {
  const message = isCorrect ? 'Well done!' : 'Nope! Try again.';
      return (
        showAnswer ? 
        <div className="answer">
          <div className={isCorrect ? 'correct': 'wrong'}>
            {message}
          </div>
          <div className={isCorrect ? '' : 'hide'}>
              <img src="images/materok.jpg"/>
            </div>
          <div className={isCorrect ? 'hide' : ''}>

            <img src="images/mater.jpg"/>
            
          </div>
          
        </div>
        :
        <div></div>
      )
}

export default Answer;
