import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
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

  const translate = (text) => {
    if (text === 'female') {
      return 'mujer';
    } else if (text === 'male') {
      return 'hombre';
    } else if (text === 'human') {
      return 'humano';
    } else if (text === 'half-giant') {
      return 'medio gigante';
    } else if (text === 'werewolf') {
      return 'hombre lobo';
    } else if (text === 'ghost') {
      return 'fantasma';
    }
  };

  // router

  const routeData = useRouteMatch('/character/:id');

  const getRouteCharacter = () => {
    if (routeData !== null) {
      const routeId = parseInt(routeData.params.id);
      const routeCharacter = filteredCharacters.find(
        (character) => character.id === routeId
      );
      return routeCharacter || null;
    }
  };

  return (
    // HTML ✨

    <div className="page">
      <Switch>
        <Route path="/character/:id">
          <CharacterDetail
            character={getRouteCharacter()}
            translate={translate}
          />
        </Route>

        <Route path="/">
          <Filters name={name} house={house} handleInput={handleInput} />

          <CharacterList
            characters={filteredCharacters}
            translate={translate}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
