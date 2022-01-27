import '../styles/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import translate from '../services/translate';
import defaultImage from '../images/default-image.jpg';
import gryffindorImage from '../images/gryffindor.svg';
import slytherinImage from '../images/slytherin.svg';
import ravenclawImage from '../images/ravenclaw.svg';
import hufflepuffImage from '../images/hufflepuff.svg';

const CharacterDetail = (props) => {
  const renderImage = () => {
    if (props.character !== undefined) {
      return props.character.image === ''
        ? defaultImage
        : props.character.image;
    }
  };

  const renderShield = (house) => {
    let shield = '';
    if (house === 'Gryffindor') {
      shield = gryffindorImage;
    } else if (house === 'Slytherin') {
      shield = slytherinImage;
    } else if (house === 'Ravenclaw') {
      shield = ravenclawImage;
    } else if (house === 'Hufflepuff') {
      shield = hufflepuffImage;
    }
    return <img className="detail__shield" src={shield} alt={house} />;
  };

  const renderAlternateNames = () => {
    return props.character.alternate_names.map((name, index) => (
      <li key={index} className="detail__item">
        - {name}
      </li>
    ));
  };

  const renderMessage = () => {
    return <p className="detail__message">El personaje no existe.</p>;
  };

  const renderCharacterDetail = () => {
    return (
      <>
        <div className="detail__image-container">
          <img
            className="detail__image"
            src={renderImage()}
            alt={props.character.name}
          />
        </div>

        <h1 className="detail__title">{props.character.name}</h1>

        <h2 className="detail__subtitle">
          {renderShield(props.character.house)}
          {props.character.house}
        </h2>

        <section className="detail__content">
          <div className="detail__wrapper">
            <p className="detail__text">
              {props.character.species
                ? `Especie: ${translate(props.character.species)}`
                : null}
            </p>

            <p className="detail__text">
              {props.character.alive
                ? `Está vivo? ${props.character.alive ? 'Sí' : 'No'}`
                : null}
            </p>

            <p className="detail__text">
              {props.character.gender
                ? `Género: ${translate(props.character.gender)}`
                : null}
            </p>
          </div>

          <div className="detail__wrapper">
            <p className="detail__text">
              {props.character.alternate_names.length > 0
                ? 'Nombres alternativos:'
                : null}
            </p>

            <ul className="detail__list">
              {props.character.alternate_names.length > 0
                ? renderAlternateNames()
                : null}
            </ul>
          </div>
        </section>
      </>
    );
  };

  return (
    <section className="detail">
      <Link to="/" className="detail__button" title="Volver">
        <i className="detail__icon fas fa-long-arrow-alt-left"></i>Volver
      </Link>

      {props.character === undefined
        ? renderMessage()
        : renderCharacterDetail()}
    </section>
  );
};

export default CharacterDetail;
