import React, { useState } from "react";

const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    `${import.meta.env.BASE_URL}Lucas perfil/lucas5.jpg`,
    `${import.meta.env.BASE_URL}Lucas perfil/lucas2.jpg`,
    `${import.meta.env.BASE_URL}Lucas perfil/lucas5.jpg`,
    `${import.meta.env.BASE_URL}Lucas perfil/lucas1.jpg`,
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <h2 className="about__title">
              SOBRE <span className="about__title-bold">MÍ</span>
            </h2>

            <p className="about__text">
              Soy Lucas Emmanuel Albornóz, abogado especializado en derecho
              civil, comercial y familia, comprometido con la defensa de los
              derechos de mis clientes y la búsqueda de soluciones jurídicas
              efectivas.
            </p>

            <p className="about__text">
              Mi práctica profesional se caracteriza por un enfoque
              personalizado, donde cada caso recibe la atención y dedicación que
              merece. Combino experiencia jurídica con un trato cercano y
              humano, entendiendo que detrás de cada expediente hay personas con
              necesidades reales.
            </p>

            <div className="about__values">
              <div className="about__value-item">
                <h3 className="about__value-title">Ética Profesional</h3>
                <p className="about__value-text">
                  Transparencia y honestidad en cada gestión
                </p>
              </div>
              <div className="about__value-item">
                <h3 className="about__value-title">Compromiso</h3>
                <p className="about__value-text">
                  Dedicación total a la defensa de tus intereses
                </p>
              </div>
              <div className="about__value-item">
                <h3 className="about__value-title">Experiencia</h3>
                <p className="about__value-text">
                  Amplio conocimiento en diversas áreas del derecho
                </p>
              </div>
            </div>

            <div className="about__credentials">
              <div className="about__credential">
                <span className="about__credential-icon">🎓</span>
                <span className="about__credential-text">
                  Matrícula Profesional Activa
                </span>
              </div>
              <div className="about__credential">
                <span className="about__credential-icon">📜</span>
                <span className="about__credential-text">
                  Titulo en Derecho
                </span>
              </div>
            </div>
          </div>

          <div className="about__image-wrapper">
            <div className="about__gallery-container">
              <button
                onClick={prevImage}
                className="about__nav-button"
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <div className="about__image-container">
                <img
                  src={images[currentImage]}
                  alt={`Lucas Emmanuel Albornóz ${currentImage + 1}`}
                  className="about__image"
                />
              </div>

              <button
                onClick={nextImage}
                className="about__nav-button"
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </div>

            <div className="about__indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`about__indicator ${
                    index === currentImage ? "about__indicator--active" : ""
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>

            <div className="about__thumbnails">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`about__thumbnail ${
                    index === currentImage ? "about__thumbnail--active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
