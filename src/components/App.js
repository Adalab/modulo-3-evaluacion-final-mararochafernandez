import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
//import ls from '../services/localstorage';
//import PropTypes from 'prop-types';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  // api

  useEffect(() => {
    getDataFromApi().then((dataFromApi) => {
      setCharacters(dataFromApi);
    });
  }, []);

  // event handlers

  const handleInput = (data) => {
    if (data.key === 'name') {
      setName(data.value);
    }
  };

  // render helpers
  const filteredCharacters = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return (
    // HTML ✨

    <div className="page">
      <Filters name={name} handleInput={handleInput} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
