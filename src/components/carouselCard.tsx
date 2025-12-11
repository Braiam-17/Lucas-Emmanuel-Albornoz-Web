import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Info, X } from "lucide-react";
import type { Project } from "../types";

const CarouselCard: React.FC<{ project: Project }> = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const nextImage = useCallback(() => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, project.images.length]);

  const prevImage = useCallback(() => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, project.images.length]);

  // Auto-play mejorado
  useEffect(() => {
    if (isPaused || isHovered || showModal) return;

    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [current, isPaused, isHovered, showModal, nextImage]);

  // Touch mobile mejorado
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Solo navegar si el swipe horizontal es mayor que el vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) prevImage();
      if (diffX < -50) nextImage();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused(!isPaused);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // No hacer nada si se clickeó un botón
    if ((e.target as HTMLElement).closest("button")) return;
    setShowDetails(!showDetails);
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // Solo mostrar controles si hay más de una imagen
  const hasMultipleImages = project.images.length > 1;

  return (
    <>
      <div
        className={`project-card ${showDetails ? "expanded" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div
          className="project-card__carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`project-card__image-wrapper ${direction}`}>
            <img
              key={current}
              src={project.images[current]}
              alt={`${project.title} - Imagen ${current + 1}`}
              className="project-card__img"
              loading="lazy"
            />
          </div>

          {hasMultipleImages && (
            <>
              {/* Controles de navegación */}
              <button
                className={`carousel-btn left ${isHovered ? "visible" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>

              <button
                className={`carousel-btn right ${isHovered ? "visible" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>

              {/* Control de pausa */}
              <button
                className={`carousel-btn pause ${isHovered ? "visible" : ""}`}
                onClick={togglePause}
                aria-label={isPaused ? "Reanudar" : "Pausar"}
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>

              {/* Contador de imágenes */}
              <div className={`carousel-counter ${isHovered ? "visible" : ""}`}>
                {current + 1} / {project.images.length}
              </div>

              {/* Indicadores de progreso mejorados */}
              <div className="carousel-indicators">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    className={`indicator ${i === current ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(i);
                    }}
                    aria-label={`Ir a imagen ${i + 1}`}
                  >
                    <div className="indicator-progress">
                      {i === current && !isPaused && !isHovered && (
                        <div className="indicator-bar" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Botón de información */}
          <button
            className={`info-btn ${isHovered ? "visible" : ""}`}
            onClick={handleInfoClick}
            aria-label="Ver detalles completos"
          >
            <Info size={20} />
          </button>
        </div>

        <div className="project-card__overlay">
          <div
            className={`project-card__content ${showDetails ? "expanded" : ""}`}
          >
            {project.category && showDetails && (
              <span className="project-card__category">{project.category}</span>
            )}
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__location">{project.location}</p>
          </div>
        </div>
      </div>

      {/* Modal para vista completa */}
      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={handleModalClose}
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
            <img
              src={project.images[current]}
              alt={project.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{project.title}</h2>
              <p>{project.location}</p>
              {project.category && (
                <span className="category-badge">{project.category}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselCard;
