import '../styles/CharacterCard.scss';
import { Link } from 'react-router-dom';
import defaultImage from '../images/default-image.jpg';

const CharacterCard = (props) => {
  const image =
    props.character.image === '' ? defaultImage : props.character.image;

  return (
    <Link
      to={`/character/${props.character.id}`}
      className="character__link"
      title={props.character.name}
    >
      <div className="character__image-container">
        <img
          className="character__image"
          src={image}
          alt={props.character.name}
        />
      </div>
      <p className="character__title">{props.character.name}</p>
      <p className="character__text">
        {props.translate(props.character.species)}
      </p>
    </Link>
  );
};

export default CharacterCard;
