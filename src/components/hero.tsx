const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__background" />

      <div className="hero__overlay" />

      <div className="hero__content container">
        <p className="hero__tagline">Valor real, compromiso profesional</p>

        <h1 className="hero__title">
          Estudio Jurídico
          <br />
          <span className="hero__title-highlight">
            Asesoramiento y Representación Legal
          </span>
        </h1>

        <p className="hero__subtitle"></p>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            CONTÁCTAME
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() =>
              document
                .getElementById("servicios")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            VER SERVICIOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
