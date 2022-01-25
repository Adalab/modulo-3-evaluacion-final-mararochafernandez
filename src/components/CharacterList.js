import '../styles/CharacterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const renderCharacterList = () =>
    props.characters.map((character, index) => (
      <li key={index} className="character__item">
        <CharacterCard
          id={(character.id = index)}
          character={character}
          translate={props.translate}
        />
      </li>
    ));

  return props.characters.length > 0 ? (
    <ul className="character__list">{renderCharacterList()}</ul>
  ) : (
    <p className="message">No hay resultados de búsqueda.</p>
  );
};

export default CharacterList;
