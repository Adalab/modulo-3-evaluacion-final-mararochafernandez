const Filters = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleInput({
      key: event.currentTarget.id,
      value: event.currentTarget.value,
    });
  };

  return (
    <section className="filter">
      <form className="filter__form" onSubmit={handleForm}>
        <label className="filter__label" htmlFor="name">
          Nombre:
        </label>
        <input
          className="filter__input"
          name="name"
          id="name"
          value={props.name}
          onChange={handleChange}
        />

        <label className="filter__label" htmlFor="house">
          Casa:
        </label>
        <select
          className="filter__input"
          name="house"
          id="house"
          value={props.house}
          onChange={handleChange}
        >
          <option defaultValue value="gryffindor">
            Gryffindor
          </option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
