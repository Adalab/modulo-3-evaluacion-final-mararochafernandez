import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import getDataFromApi from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';
import ls from '../services/localstorage';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState(ls.get('filter', {}).name || '');
  const [house, setHouse] = useState(
    ls.get('filter', {}).house || 'gryffindor'
  );
  const [gender, setGender] = useState(ls.get('filter', {}).gender || 'all');
  const [photo, setPhoto] = useState(ls.get('filter', {}).photo || false);

  // api

  useEffect(() => {
    getDataFromApi(house).then((dataFromApi) => {
      setCharacters(dataFromApi);
    });
  }, [house]);

  // local storage

  useEffect(() => {
    ls.set('filter', {
      name: name,
      house: house,
      gender: gender,
      photo: photo,
    });
  }, [name, house, gender, photo]);

  // event handlers

  const handleInput = (data) => {
    if (data.key === 'name') {
      setName(data.value);
    } else if (data.key === 'house') {
      setHouse(data.value);
    } else if (data.key === 'gender') {
      setGender(data.value);
    } else if (data.key === 'photo') {
      setPhoto(data.checked);
    }
  };

  const handleReset = () => {
    setName('');
    setHouse('gryffindor');
    setGender('all');
    setPhoto(false);
  };

  // render helpers

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )
    .filter((character) =>
      gender === 'all' ? true : character.gender === gender
    )
    .filter((character) => (photo ? character.image !== '' : true))
    .sort((a, b) => a.name.localeCompare(b.name));

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

  const routeData = useRouteMatch('/character/:house/:id');

  const getRouteCharacter = () => {
    if (routeData !== null) {
      const routeHouse = routeData.params.house;
      if (routeHouse !== house) {
        setHouse(routeHouse);
      } else {
        const routeId = parseInt(routeData.params.id);
        return characters.find((character) => character.id === routeId);
      }
    }
  };

  return (
    // HTML ✨

    <div className="page">
      <Header title="Harry Potter" />

      <main className="main">
        <Switch>
          <Route path="/character/:house/:id">
            <CharacterDetail
              character={getRouteCharacter()}
              translate={translate}
            />
          </Route>

          <Route path="/">
            <Filters
              name={name}
              house={house}
              gender={gender}
              photo={photo}
              handleInput={handleInput}
              handleReset={handleReset}
            />

            <CharacterList
              characters={filteredCharacters}
              translate={translate}
            />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
