import '../styles/Filters.scss';

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
          type="text"
          name="name"
          id="name"
          value={props.name}
          onChange={handleChange}
        />

        <label className="filter__label" htmlFor="house">
          Casa:
        </label>
        <select
          className="filter__select"
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

        <label className="filter__label" htmlFor="gender">
          Género:
        </label>
        <select
          className="filter__select"
          name="gender"
          id="gender"
          value={props.gender}
          onChange={handleChange}
        >
          <option defaultValue value="all">
            Todos
          </option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>

        {/*
        <button className="detail__button" onClick={handleButton}>
          <i className="detail__icon fas fa-long-arrow-alt-left"></i>Volver
        </button>
        */}
      </form>
    </section>
  );
};

export default Filters;
