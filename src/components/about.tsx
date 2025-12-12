import React, { useState } from "react";

const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    `${import.meta.env.BASE_URL}Lucas perfil/lucas5.jpg`,
    `${import.meta.env.BASE_URL}Lucas perfil/lucas2.jpg`,
    `${import.meta.env.BASE_URL}Lucas perfil/lucas4.jpg`,
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
              Soy Albornoz Lucas Emmanuel, abogado, con amplia trayectoria
              profesional en derecho civil, comercial, laboral y familia.
              Experiencia, compromiso y seriedad ante sus conflictos de derecho.
              Matriculado el 29 de julio de 2009, he dedicado mi tiempo y
              esfuerzo a capacitarme para resolver de manera ágil y eficiente
              conflictos de derecho, realizando un trato personalizado a cada
              cliente, en donde su caso recibe la atención y dedicación que
              merece.
            </p>

            <p className="about__text">
              De este modo combino experiencia jurídica con un trato cercano y
              humano, entendiendo que detras de un conflicto hay personas con
              necesidades reales. En mi trayectoria profesional he tomado
              participación activa en las instituciones que representan a los
              abogados en nuestra ciudad, ocupando en dos periodos cargos dentro
              de la Comisión Directiva del Colegio de Abogados de Villa
              Mercedes:
            </p>

            <div className="about__values">
              <div className="about__value-item">
                <h3 className="about__value-title">
                  Vocal Comisión Directiva Colegio de Abogados y Procuradores de
                  Villa Mercedes{" "}
                </h3>
                <p className="about__value-text">(2017-2019)</p>
              </div>
              <div className="about__value-item">
                <h3 className="about__value-title">
                  Secretario Comisión Directiva Colegio de Abogados y
                  Procuradores de Villa Mercedes{" "}
                </h3>
                <p className="about__value-text">(2019-2021)</p>
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
                  alt={`Albornoz Lucas Emmanuel ${currentImage + 1}`}
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

        {/* Credenciales FUERA del grid */}
        <div className="about__credentials">
          <div className="about__credential">
            <span className="about__credential-icon">📜</span>
            <span className="about__credential-text">
              Matrícula profesional Provincial 1312 CAVM
            </span>
          </div>
          <div className="about__credential">
            <span className="about__credential-icon">📜</span>
            <span className="about__credential-text">
              Matrícula profesional Federal Tomo 126, Folio 446
            </span>
          </div>
          <div className="about__credential">
            <span className="about__credential-icon">🎓</span>
            <span className="about__credential-text">
              Procurador, Universidad Nacional de Lomas de Zamora, obtenido el
              14 de julio de 2007
            </span>
          </div>
          <div className="about__credential">
            <span className="about__credential-icon">🎓</span>
            <span className="about__credential-text">
              Abogado, Universidad Nacional de Lomas de Zamora, obtenido el 04
              de Abril de 2009.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
