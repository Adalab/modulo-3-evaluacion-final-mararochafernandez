import '../styles/CharacterDetail.scss';
import Gryffindor from '../images/gryffindor.svg';
import Slytherin from '../images/slytherin.svg';
import Ravenclaw from '../images/ravenclaw.svg';
import Hufflepuff from '../images/hufflepuff.svg';

const CharacterDetail = (props) => {
  const handleButton = () => {
    window.history.back();
  };

  const renderAlternateNames = () => {
    return props.character.alternate_names.map((name, index) => (
      <li key={index} className="detail__item">
        {name}
      </li>
    ));
  };

  const renderMessage = () => {
    return <p className="detail__message">El personaje no existe.</p>;
  };

  const renderShield = (house) => {
    let shield = '';
    if (house === 'Gryffindor') {
      shield = Gryffindor;
    } else if (house === 'Slytherin') {
      shield = Slytherin;
    } else if (house === 'Ravenclaw') {
      shield = Ravenclaw;
    } else if (house === 'Hufflepuff') {
      shield = Hufflepuff;
    }
    return <img className="detail__shield" src={shield} alt={house} />;
  };

  const renderCharacterDetail = () => {
    return (
      <>
        <h1 className="detail__title">{props.character.name}</h1>

        <h2 className="detail__subtitle">
          {renderShield(props.character.house)}
          {props.character.house}
        </h2>

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
          {props.character.gender
            ? `Género: ${props.translate(props.character.gender)}`
            : null}
        </p>

        <p className="detail__text">
          {props.character.alive
            ? `Está vivo? ${props.character.alive ? 'Sí' : 'No'}`
            : null}
        </p>

        <ul className="detail__list">
          {props.character.alternate_names &&
          props.character.alternate_names.length > 0
            ? renderAlternateNames()
            : null}
        </ul>
      </>
    );
  };

  return (
    <section className="detail">
      <button className="detail__button" onClick={handleButton}>
        <i className="detail__icon fas fa-long-arrow-alt-left"></i>Volver
      </button>

      {props.character === undefined
        ? renderMessage()
        : renderCharacterDetail()}
    </section>
  );
};

export default CharacterDetail;
