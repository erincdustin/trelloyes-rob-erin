import React from 'react';
import STORE from './store';
import List from './List'

function App(props) {
  // console.log(STORE.lists);

  const allList = STORE.lists.map(function(list) {
    // console.log(list);

    const mappedCards = list.cardIds.map(cardId => STORE.allCards[cardId]);
    // console.log()

    return (
      <List key={list.id} header={list.header} cards={mappedCards} />
    )}
  );

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {allList}
      </div>
    </main>
  );
}

export default App;
