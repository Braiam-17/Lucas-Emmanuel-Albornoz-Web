import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
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
              <div className="contact__info-item">
                <MapPin size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">DIRECCIÓN</h3>
                  <p className="contact__info-text">
                    Lavalle N 97
                    <br />
                    Villa Mercedes, San Luis, Argentina
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <Phone size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">TELÉFONO</h3>
                  <p className="contact__info-text">+54 9 2657 67-8455</p>
                </div>
              </div>

              <div className="contact__info-item">
                <Mail size={24} className="contact__info-icon" />
                <div>
                  <h3 className="contact__info-title">EMAIL</h3>
                  <p className="contact__info-text">lucasAlbornoz@gmail.com</p>
                </div>
              </div>
            </div>

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
                  placeholder="Cuéntanos sobre tu proyecto..."
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
