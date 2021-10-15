
import { useEffect, useState } from 'react';

import axios from 'axios';
import Character from './components/character.component';

import logo from './logo.svg';
import './App.css';

// const charactersApiData =
//   require('./mock-data/characters-all.json');





function App() {
  const name = 'Alfred E. Newman';
  // const characters = charactersApiData.results;

  const [ characters, setCharacters ] = useState([]);

  const loadApiData = () => {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        setCharacters(response.data.results);
      });
  }

  useEffect(() => {
     loadApiData();
     return () => {

     }
  }, []);

  // axios function here:

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters</h1>
        <div className="characters list container">
          {
            characters.map(
              ( character, i ) => (
                <Character { ...character } />)
            )
          }
        </div>

        <Character age={22}/>

      </header>
      <div id="container">

      </div>
    </div>
  );
}

export default App;
;
