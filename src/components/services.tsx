import { MessageCircle } from "lucide-react";
import type { Service } from "../types";
import contrato2 from "../assets/contrato2.jpg";
import derecho_comercial from "../assets/derecho comercial.webp";
import derechoFmaliar from "../assets/derechoFmailiar.jpg";
import estatuaLey from "../assets/estatuaLey.jpg";

const Services: React.FC = () => {
  const whatsappNumber = "5492664XXXXXX";

  const services: Service[] = [
    {
      title: "Derecho Laboral",
      description:
        "Reclamos por despido, trabajos no registrados, accidentes laborales, diferencias salariales y defensa del trabajador.",
      icon: "💼",
      whatsappMessage:
        "Hola! Me gustaría consultar sobre asesoramiento en Derecho Laboral.",
      backgroundImage: contrato2,
    },
    {
      title: "Derecho Civil",
      description:
        "Contratos, daños y perjuicios, incumplimientos, cobros, mediaciones y soluciones jurídicas para conflictos civiles.",
      icon: "⚖️",
      whatsappMessage: "Hola! Necesito asesoramiento en Derecho Civil.",
      backgroundImage: estatuaLey,
    },
    {
      title: "Derecho de Familia",
      description:
        "Divorcios, cuota alimentaria, régimen de visitas, tenencia, violencia familiar y adopciones.",
      icon: "👨‍👩‍👧",
      whatsappMessage:
        "Hola! Quiero consultar sobre un tema relacionado con Derecho de Familia.",
      backgroundImage: derechoFmaliar,
    },
    {
      title: "Derecho Comercial",
      description:
        "Asesoramiento a empresas y emprendedores, contratos comerciales, deudas, sociedades y conflictos empresariales.",
      icon: "📑",
      whatsappMessage:
        "Hola! Me interesa recibir asesoramiento en Derecho Comercial.",
      backgroundImage: derecho_comercial,
    },
  ];

  const handleWhatsAppClick = (message: string): void => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">
            NUESTROS <span className="services__title-bold">SERVICIOS</span>
          </h2>
          <p className="services__subtitle">
            Asesoramiento legal profesional en las áreas más importantes.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleWhatsAppClick(service.whatsappMessage)}
              className="service-card"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
              }}
            >
              <div className="service-card__overlay"></div>

              <div className="service-card__content">
                <div className="service-card__whatsapp-icon">
                  <MessageCircle size={28} />
                </div>

                <h3 className="service-card__title">{service.title}</h3>

                <p className="service-card__description">
                  {service.description}
                </p>

                <div className="service-card__cta">
                  <MessageCircle size={18} />
                  Consultar por WhatsApp
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
