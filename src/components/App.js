import '../styles/App.scss';
//import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
//import ls from '../services/localstorage';
//import { v4 as uuid } from 'uuid';
//import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
//import PropTypes from 'prop-types';

//console.log(uuid());

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  // api

  //const [data, setData] = useState([]);

  /*
  useEffect(() => {
    callToApi().then((dataFromApi) => {
      setData(dataFromApi);
    });
  }, []);
  */

  // local storage

  //const [name, setName] = useState(ls.get('name', ''));
  //const [email, setEmail] = useState(ls.get('email', ''));

  //useState(ls.get('data', {}).name || '');
  //useState(ls.get('data', {}).email || '');

  /*
  useEffect(() => {
    ls.set('name', name);
    ls.set('email', email);
  }, [name, email]);
  */

  /*
  useEffect(() => {
    ls.set('data', {
      name: name,
      email: email,
    });
  }, [data]);
  */

  return (
    // HTML ✨

    <div className="app">{getTitle('Happy coding!')}</div>
  );
}

// default props

/*
NombreDelComponente.defaultProps = {
  nombreDeLaProp1: 'valorPorDefectoDeLaProp1',
  nombreDeLaProp2: 'valorPorDefectoDeLaProp2',
};
*/

// prop types

/*
NombreDeMiComponente.propTypes = {
  nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
  nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired
}
*/

export default App;
