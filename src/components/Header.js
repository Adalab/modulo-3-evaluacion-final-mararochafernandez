import '../styles/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
    </header>
  );
};

export default Header;
