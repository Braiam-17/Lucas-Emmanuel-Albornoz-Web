import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Paz Ruiz",
      date: "Hace 2 meses",
      rating: 5,
      comment: "Excelente profesional! Muy buen trato y calidez humana",
    },
    {
      id: 2,
      name: "Ivana Azcarate",
      date: "Hace 1 mes",
      rating: 5,
      comment: "Excelente profesional 👏…",
    },
    {
      id: 3,
      name: "Jesy Vidal",
      date: "Hace 3 semanas",
      rating: 5,
      comment:
        "Aspectos positivos: Capacidad de respuesta, Calidad, Profesionalismo y Valor",
    },
    {
      id: 4,
      name: "Guillermo Ramirez",
      date: "Hace 7 meses",
      rating: 5,
      comment:
        "Aspectos positivos, Capacidad de respuesta, Calidad y Profesionalismo",
    },
    {
      id: 5,
      name: "Virginia Maceroni",
      date: "Hace 2 meses",
      rating: 5,
      comment: "Aspectos positivos: Profesionalismo",
    },
    {
      id: 6,
      name: "Alejandra Albornoz",
      date: "Hace 1 año",
      rating: 5,
      comment: "Aspectos positivos: Profesionalismo",
    },
    {
      id: 7,
      name: "Sergio Mercau",
      date: "Hace 2 años",
      rating: 5,
      comment: "",
    },
    {
      id: 8,
      name: "Soledad Nievas",
      date: "Hace 2 años",
      rating: 5,
      comment: "",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`testimonials__star ${
          index < rating ? "testimonials__star--filled" : ""
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">
            LO QUE DICEN{" "}
            <span className="testimonials__title-bold">MIS CLIENTES</span>
          </h2>
          <p className="testimonials__subtitle">
            Opiniones reales de clientes satisfechos
          </p>
        </div>

        <div className="testimonials__carousel">
          <button
            onClick={prevSlide}
            className="testimonials__nav testimonials__nav--prev"
            aria-label="Reseña anterior"
          >
            ‹
          </button>

          <div className="testimonials__track">
            <div
              className="testimonials__slides"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials__slide">
                  <div className="testimonials__card">
                    <div className="testimonials__quote-icon">"</div>

                    <div className="testimonials__rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="testimonials__comment">
                      {testimonial.comment}
                    </p>

                    <div className="testimonials__author">
                      <div className="testimonials__avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="testimonials__author-info">
                        <h4 className="testimonials__author-name">
                          {testimonial.name}
                        </h4>
                        <p className="testimonials__date">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="testimonials__google">
                      <span className="testimonials__google-icon">G</span>
                      <span className="testimonials__google-text">
                        Reseña de Google
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="testimonials__nav testimonials__nav--next"
            aria-label="Reseña siguiente"
          >
            ›
          </button>
        </div>

        <div className="testimonials__indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`testimonials__indicator ${
                index === currentIndex ? "testimonials__indicator--active" : ""
              }`}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials__cta">
          <p className="testimonials__cta-text">
            ¿Ya trabajaste conmigo? Dejá tu reseña
          </p>
          <a
            href="https://www.google.com/maps/place/Estudio+Jur%C3%ADdico+Dr.+ALBORNOZ+LUCAS/@-33.6912719,-65.4692115,17z/data=!4m8!3m7!1s0x95d16ba195f1e8a7:0xcec49af98844f1ee!8m2!3d-33.6912719!4d-65.4666366!9m1!1b1!16s%2Fg%2F11lqm9wx2b?hl=es-AR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials__cta-button"
          >
            Dejar una reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
