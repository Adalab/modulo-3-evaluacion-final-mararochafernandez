import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const renderCharacterList = () =>
    props.characters.map((character, index) => (
      <li key={index} className="character__item">
        <CharacterCard id={index} character={character} />
      </li>
    ));

  return <ul className="character__list">{renderCharacterList()}</ul>;
};

export default CharacterList;
