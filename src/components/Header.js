import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/" className="header__link" title="Harry Potter">
        <h1 className="header__title">{props.title}</h1>
      </Link>
    </header>
  );
};

export default Header;
