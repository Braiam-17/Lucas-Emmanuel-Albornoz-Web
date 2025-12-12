import { useState } from "react";
import type { NavItem } from "../types";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const scrollY = useScrollAnimation();

  const navItems: NavItem[] = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Info" },
    { id: "sobre-mi", label: "Sobre Mi" },
    { id: "contacto", label: "Contacto" },
    { id: "testimonios", label: "Reseñas" },
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="header__topbar">
        <div className="container">
          <div className="header__topbar-content">
            <div className="header__contact-info">
              <a href="tel:+542657678455" className="header__contact-item">
                <Phone size={16} />
                <span>+54 2657 678455</span>
              </a>
              <a
                href="mailto:rberdasquera.abogado@gmail.com"
                className="header__contact-item"
              >
                <Mail size={16} />
                <span>drLucasAlbornoz@gmail.com</span>
              </a>
            </div>
            <div className="header__social">
              {/* Agrega tus iconos de redes sociales aquí */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrollY > 50 ? "header--scrolled" : ""}`}>
        <nav className="header__nav container">
          <div className="header__logo">
            <div className="header__logo-icon">
              <img src={`${import.meta.env.BASE_URL}logorb.png`} alt="Logo" />
            </div>

            <div className="header__logo-text">
              <span className="header__logo-name">Albornoz Lucas Emmanuel</span>
              <span className="header__logo-title">Abogado</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="header__menu header__menu--desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`header__link ${
                    activeSection === item.id ? "header__link--active" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="header__cta"
            onClick={() =>
              window.open(
                "https://wa.me/542657678455?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20legal.",
                "_blank"
              )
            }
          >
            ASESORAMIENTO
          </button>

          {/* Mobile Menu Button */}
          <button
            className="header__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="header__menu header__menu--mobile">
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="header__link-mobile"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
