import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card"

function List(props) {

  const allCards = props.cards.map(function(card, index) {
    return (
      <Card key={index} title={card.title} content={card.content} />
    )}
  );

  return (
    <section className="List">
      <header className="List-header"> 
        {props.header}
      </header>
      <div className="List-cards">
        {allCards}
      </div>
    </section>
  );

}



export default List;