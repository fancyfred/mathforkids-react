import React from 'react';



function Answer({isCorrect}) {
  console.log(isCorrect);
  const message = isCorrect ? 'Well done!' : 'Nope! Try again.';
      return (
        <div className={isCorrect ? 'correct': 'wrong'}>
            {message}
        </div>
      )
}

export default Answer;
