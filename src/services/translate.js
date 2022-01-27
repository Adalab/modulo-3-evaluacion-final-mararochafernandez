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

export default translate;
