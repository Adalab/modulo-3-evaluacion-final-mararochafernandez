import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
//import ls from '../services/localstorage';
//import PropTypes from 'prop-types';

//console.log();

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // api

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((dataFromApi) => {
      setCharacters(dataFromApi);
    });
  }, []);

  console.log(characters);

  return (
    // HTML ✨

    <div className="page">
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
