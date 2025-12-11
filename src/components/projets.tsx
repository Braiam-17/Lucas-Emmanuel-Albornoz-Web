import type { Project } from "../types";
import CarouselCard from "./carouselCard";

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "POSESION VEINTEAÑAL",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado/23.jpg",
        "/post feed Ig Abogado/24.jpg",
        "/post feed Ig Abogado/25.jpg",
        "/post feed Ig Abogado/26.jpg",
      ],
    },
    {
      title: "CESION DE DERECHOS",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado (1)/31.jpg",
        "/post feed Ig Abogado (1)/32.jpg",
        "/post feed Ig Abogado (1)/33.jpg",
      ],
    },
    {
      title: "MITOS",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado (2)/34.jpg",
        "/post feed Ig Abogado (2)/35.jpg",
        "/post feed Ig Abogado (2)/36.jpg",
      ],
    },
    {
      title: "HOME OFFICE",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado (3)/43.jpg",
        "/post feed Ig Abogado (3)/44.jpg",
        "/post feed Ig Abogado (3)/45.jpg",
        "/post feed Ig Abogado (3)/46.jpg",
        "/post feed Ig Abogado (3)/47.jpg",
      ],
    },
    {
      title: "ACCIDENTES DE TRANSITO",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado (4)/49.jpg",
        "/post feed Ig Abogado (4)/50.jpg",
        "/post feed Ig Abogado (4)/51.jpg",
        "/post feed Ig Abogado (4)/52.jpg",
        "/post feed Ig Abogado (4)/53.jpg",
      ],
    },
    {
      title: "CUOTA ALIMENTARIA",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado (5)/64.jpg",
        "/post feed Ig Abogado (5)/65.jpg",
        "/post feed Ig Abogado (5)/66.jpg",
        "/post feed Ig Abogado (5)/67.jpg",
      ],
    },
    {
      title: "DESPIDOS",
      category: "",
      location: "¡Contactame!",
      images: [
        "/post feed Ig Abogado (6)/86.jpg",
        "/post feed Ig Abogado (6)/87.jpg",
        "/post feed Ig Abogado (6)/88.jpg",
        "/post feed Ig Abogado (6)/89.jpg",
      ],
    },
  ];

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__title">
            INFORMACIÓN <span className="projects__title-bold">DESTACADA</span>
          </h2>
          <p className="projects__subtitle">
            Una selección de nuestros tips más representativos
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <CarouselCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
