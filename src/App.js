
import Character from './components/character.component';

import logo from './logo.svg';
import './App.css';

const charactersApiData = require('./mock-data/characters-all.json');


function App() {
  const name = 'Alfred E. Newman';
  const characters = charactersApiData.results;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello There {name}</h1>
        {
          characters.map(
            character => (<Character name={character.name} age={22}/>)
          )
        }
        <Character age={22}/>

      </header>
      <div id="container">

      </div>
    </div>
  );
}

export default App;
;
