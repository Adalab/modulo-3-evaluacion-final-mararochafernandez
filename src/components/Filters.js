const Filters = (props) => {
  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    props.handleInput({
      key: 'name',
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
      </form>
    </section>
  );
};

export default Filters;
