const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              Lucas Emmanuel Albornóz{" "}
              <span className="footer__logo-bold">ABOGADO</span>
            </div>
            <p className="footer__tagline">Confianza y Experiencia</p>
          </div>

          <div className="footer__copyright">
            © 2025 Desarrollado por{" "}
            <a
              href="https://www.instagram.com/mavedigital_/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              MAVE DIGITAL
            </a>
            . Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
