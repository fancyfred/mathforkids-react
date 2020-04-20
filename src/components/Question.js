import React from 'react';

function Question(props) {
  return (
    <div className="question">
      <h1>Question</h1>
        <p>Do you like {props.car}s ?</p>
    </div>
  );
}

export default Question;
