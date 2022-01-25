import { Link } from 'react-router-dom';
import defaultImage from '../images/default-image.jpg';

const CharacterCard = (props) => {
  const translateSpecies = () => {
    if (props.character.species === 'human') {
      return 'humano';
    }
  };
  console.log(props.character.image);

  const image =
    props.character.image === '' ? defaultImage : props.character.image;

  return (
    <Link
      to={`/character/:${props.id}`}
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
      <p className="character__text">{translateSpecies()}</p>
    </Link>
  );
};

export default CharacterCard;
