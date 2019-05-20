import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card"

function List(props) {

  const people = peopleData.map(person => <Person key={person.id} name={person.name} /> );



  const allCards = props.cards.map(function(card, id) {
    return ( KEY????
            <div className="card-title">{card.title}</div>
            <div className="card-content">{card.content}</div>);

  })

  return (
    <section className="List">
      <header> 
        {props.header}
      </header>
      <div className="List-cards">
      const allCards = props.cards.map(function(card, id) {
        return ( KEY????
            <div className="card-title">{card.title}</div>
            <div className="card-content">{card.content}</div>);

  })
      j
      
      </div>
    </section>
  );

}



export default List;