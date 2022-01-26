import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <p className="footer__copy">&copy; 2022 Mara Rocha</p>
          <ul className="footer__menu">
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://www.instagram.com/maranhaknits"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>

            <li className="footer__item">
              <a
                className="footer__link"
                href="https://www.linkedin.com/in/mararochafernandez"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li className="footer__item">
              <a
                className="footer__link"
                href="https://github.com/mararochafernandez"
                title="GitHub"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>

            <li className="footer__item">
              <a
                className="footer__link"
                href="https://twitter.com/maranhaknits"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
