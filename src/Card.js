import React from 'react';
import ReactDOM from 'react-dom';

/* props will ultimately be an instance of List component */
function Card(props) {

  return (
    <div className="Card"> 
      <h3>{props.title}</h3>
      <p>{props.content}</p>
     </div> 

  );


}

export default Card;