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
  const [house, setHouse] = useState('gryffindor');

  // api

  useEffect(() => {
    getDataFromApi(house).then((dataFromApi) => {
      setCharacters(dataFromApi);
    });
  }, [house]);

  // event handlers

  const handleInput = (data) => {
    if (data.key === 'name') {
      setName(data.value);
    } else if (data.key === 'house') {
      setHouse(data.value);
    }
  };

  // render helpers
  const filteredCharacters = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return (
    // HTML ✨

    <div className="page">
      <Filters name={name} house={house} handleInput={handleInput} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
