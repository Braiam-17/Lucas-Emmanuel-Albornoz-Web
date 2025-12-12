import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import type { FormErrors, FormData } from "../types";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const sanitizeInput = (value: string): string => {
    return value.replace(/[<>]/g, "");
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es requerido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="contact__title">
            <span className="contact__title-bold">CONTACTO</span>
          </h2>
          <p className="contact__subtitle">
            ¿Necesitás asesoramiento legal? Estoy para ayudarte.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-items">
              {/* Dirección con mapa */}
              <div className="contact__info-item">
                <MapPin size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">DIRECCIÓN</h3>
                  <p className="contact__info-text">
                    Lavalle N 97
                    <br />
                    Villa Mercedes, San Luis, Argentina
                  </p>

                  {/* Mini mapa de Google Maps */}
                  <div className="contact__map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.8!2d-65.4597!3d-33.6755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2ddc6b0e0e0e1%3A0x1234567890!2sLavalle%2097%2C%20Villa%20Mercedes%2C%20San%20Luis!5e0!3m2!1ses!2sar!4v1234567890"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación del estudio jurídico"
                    />
                  </div>
                </div>
              </div>

              {/* Horarios de atención */}
              <div className="contact__info-item">
                <Clock size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">HORARIOS DE ATENCIÓN</h3>
                  <div className="contact__schedule">
                    <div className="contact__schedule-row">
                      <span className="contact__schedule-day">Lunes:</span>
                      <span className="contact__schedule-time">
                        08:00 - 13:00 / 19:00 - 21:00
                      </span>
                    </div>
                    <div className="contact__schedule-row">
                      <span className="contact__schedule-day">Martes:</span>
                      <span className="contact__schedule-time">
                        08:00 - 13:00
                      </span>
                    </div>
                    <div className="contact__schedule-row">
                      <span className="contact__schedule-day">Miércoles:</span>
                      <span className="contact__schedule-time">
                        08:00 - 13:00
                      </span>
                    </div>
                    <div className="contact__schedule-row">
                      <span className="contact__schedule-day">Jueves:</span>
                      <span className="contact__schedule-time">
                        08:00 - 13:00 / 19:00 - 21:00
                      </span>
                    </div>
                    <div className="contact__schedule-row">
                      <span className="contact__schedule-day">Viernes:</span>
                      <span className="contact__schedule-time">
                        08:00 - 13:00
                      </span>
                    </div>
                    <div className="contact__schedule-row contact__schedule-row--closed">
                      <span className="contact__schedule-day">
                        Sábado y Domingo:
                      </span>
                      <span className="contact__schedule-time">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teléfono */}
              <div className="contact__info-item">
                <Phone size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">TELÉFONO</h3>
                  <p className="contact__info-text">+54 9 2657 67-8455</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact__info-item">
                <Mail size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">EMAIL</h3>
                  <p className="contact__info-text">lucasAlbornoz@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="contact__social">
              <h3 className="contact__social-title">REDES SOCIALES</h3>
              <div className="contact__social-icons">
                <a
                  href="https://www.instagram.com/abogadodr.albornoz_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/lucas.albornoz.739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-icon"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/tu_perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact__form-wrapper">
            {submitted && (
              <div className="contact__success">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}

            <div className="contact__form">
              <div className="contact__form-group">
                <label className="contact__label">NOMBRE *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`contact__input ${
                    errors.nombre ? "contact__input--error" : ""
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="contact__error">{errors.nombre}</p>
                )}
              </div>

              <div className="contact__form-group">
                <label className="contact__label">EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`contact__input ${
                    errors.email ? "contact__input--error" : ""
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="contact__error">{errors.email}</p>
                )}
              </div>

              <div className="contact__form-group">
                <label className="contact__label">TELÉFONO</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="+54 9 266 XXX-XXXX"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__label">MENSAJE *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className={`contact__textarea ${
                    errors.mensaje ? "contact__input--error" : ""
                  }`}
                  placeholder="Cuéntanos sobre tu consulta..."
                />
                {errors.mensaje && (
                  <p className="contact__error">{errors.mensaje}</p>
                )}
              </div>

              <button onClick={handleSubmit} className="contact__button">
                ENVIAR MENSAJE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
