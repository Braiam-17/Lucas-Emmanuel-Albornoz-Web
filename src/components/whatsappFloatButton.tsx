const WhatsAppFloatingButton = () => {
  const phoneNumber = "5492657678455";
  const message = "¡Hola Lucas! Me gustaría obtener más información.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon" fill="currentColor">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.963 7.812 1.963 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.213-2.050l-0.512-0.3-5.3 1.363 1.4-5.2-0.337-0.537c-1.463-2.325-2.238-5.012-2.238-7.775 0-7.938 6.462-14.4 14.4-14.4s14.4 6.462 14.4 14.4-6.462 14.4-14.4 14.4zM23.1 19.3c-0.4-0.2-2.363-1.175-2.738-1.3-0.363-0.138-0.625-0.2-0.888 0.2s-1.025 1.3-1.25 1.563c-0.225 0.263-0.45 0.3-0.85 0.1s-1.65-0.613-3.15-1.95c-1.163-1.038-1.95-2.325-2.175-2.725s-0.025-0.613 0.175-0.813c0.188-0.188 0.413-0.488 0.625-0.738 0.213-0.25 0.288-0.425 0.425-0.713 0.138-0.275 0.075-0.525-0.025-0.738s-0.888-2.15-1.213-2.95c-0.325-0.775-0.65-0.675-0.888-0.688-0.225-0.012-0.488-0.012-0.75-0.012s-0.688 0.1-1.05 0.5-1.375 1.35-1.375 3.3 1.413 3.825 1.613 4.1c0.2 0.262 2.8 4.3 6.788 6.025 0.95 0.413 1.688 0.65 2.263 0.838 0.95 0.3 1.813 0.263 2.5 0.163 0.763-0.113 2.363-0.975 2.7-1.913s0.338-1.75 0.238-1.913c-0.1-0.175-0.363-0.275-0.763-0.475z" />
        </svg>
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 9999;
          text-decoration: none;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-float:active {
          transform: scale(0.95);
        }

        .whatsapp-icon {
          width: 32px;
          height: 32px;
          color: white;
        }

        /* Animación de pulso */
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1);
          }
          100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
        }

        .whatsapp-float {
          animation: pulse 2s infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .whatsapp-float {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }
        }

        /* Tooltip opcional */
        .whatsapp-float::before {
          content: "¿Necesitas ayuda?";
          position: absolute;
          right: 70px;
          background-color: #ffffff;
          color: #333;
          padding: 8px 12px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .whatsapp-float:hover::before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .whatsapp-float::before {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloatingButton;
