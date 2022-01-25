import '../styles/CharacterDetail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const renderAlternateNames = () => {
    return props.character.alternate_names.map((name, index) => (
      <li key={index} className="detail__item">
        {name}
      </li>
    ));
  };

  return props.character ? (
    <section className="detail">
      <Link className="detail__link" to="/">
        Volver
      </Link>

      <h1 className="detail__title">{props.character.name}</h1>

      <h2 className="detail__subtitle">{props.character.house}</h2>

      {props.character.image !== '' ? (
        <img
          className="detail__image"
          src={props.character.image}
          alt={props.character.name}
        />
      ) : null}

      <p className="detail__text">
        {props.character.species
          ? `Especie: ${props.translate(props.character.species)}`
          : null}
      </p>

      <p className="detail__text">
        {props.character.alive
          ? `Está vivo? ${props.character.alive ? 'Sí' : 'No'}`
          : null}
      </p>

      <p className="detail__text">
        {props.character.gender
          ? `Género: ${props.translate(props.character.gender)}`
          : null}
      </p>

      <ul className="detail__list">
        {props.character.alternate_names &&
        props.character.alternate_names.length > 0
          ? renderAlternateNames()
          : null}
      </ul>
    </section>
  ) : (
    <p className="message">El personaje no existe.</p>
  );
};

export default CharacterDetail;
