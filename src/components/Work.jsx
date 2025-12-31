import React, { useState, useEffect } from "react";

const projectsData = [
  {
    id: 1,
    title: "Simulador de préstamos personales",
    category: "Desktop",
    image: "Simulador.png",
    description:
      "Software para el cálculo y simulación de préstamos personales, diseñado para optimizar la flexibilidad en la gestión crediticia de la financiera Caja Huancayo.",
    github: "https://github.com/AngieMinaI/Simulador-de-prestamos",
    docs: "https://docs.google.com/document/d/1qIaacyhU6HtraHpAawcDVAA8l_DjhjNL/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Java"]
  },
  {
    id: 2,
    title: "Techno Isha",
    category: "Web",
    image: "Techno-Isha.png",
    description:
      "Ecommerce de gestión de soporte técnico y ventas de hardware, que permite optimizar la atención a clientes, el control de inventario y la calidad de los servicios que ofrece Techno Isha.",
    github: "https://github.com/AngieMinaI/Ecommerce-de-Techno-Isha",
    docs: "https://docs.google.com/document/d/1w3OKFVeMa8wPZLasoI78Pv19fcPiD13X/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Javascript","HTML", "CSS", "PHP", "SQL"]
  },
  {
    id: 3,
    title: "EducaTec",
    category: "Web",
    image: "Educatec.png",
    description: "Plataforma Web llamada EducaTec, orientada a la gestión virtual de cursos de programación y tecnología. Además, permite controlar notas y pagos de los alumnos de manera sencilla y accesible.",
    github: "https://github.com/AngieMinaI/Plataforma-web-EDUCATEC",
    docs: "https://docs.google.com/document/d/184NyC3VXY_L2V47YQRf5r2TxhsnssWE7/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Javascript", "Java", "HTML", "CSS","SQL", "Bootstrap"]
  },
  {
    id: 4,
    title: "Análisis de películas y TV de IMDB",
    category: "Análisis de Datos",
    image: "Analisis.png",
    description: "Análisis exploratorio de datos y modelado matemático aplicado a películas y series de TV. Este análisis fue realizado en Google Colab y el dataset empleado fue IMDB Dataset of Top 1000 Movies and TV Shows de Kaggle.",
    github:
      "https://colab.research.google.com/drive/1BjU5O1YzJSi2xjJ1ucCnc2K3mR_udG-C?usp=sharing",
    docs: "https://docs.google.com/document/d/1VR2VOS15jiHHB6vS9j6_v668LY_biAe7/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Google Colab"]
  },
  {
    id: 5,
    title: "Oh My Pet",
    category: "Web",
    image: "Ohmypet.png",
    description:
      "E-commerce Oh My Pet, tienda virtual dedicada a la venta de productos para animales domésticos. Ofrece variedad de artículos online, precios accesibles y un dashboard para el control de ventas mensuales.",
    github: "https://github.com/AngieMinaI/Ecommerce-Oh-My-Pet",
    docs: "https://drive.google.com/drive/folders/1UlIgzeGJsvKaCX7uGQkfZOALcL4kBeq1?usp=sharing",
    tags: ["Javascript", "HTML", "CSS", "PHP", "SQL","Bootstrap", "SCRUM", "CMMI"]
  },
  {
    id: 6,
    title: "Sistema de gestión de usuario",
    category: "Desktop",
    image: "Sistemagestion.png",
    description:
      "Software de gestión en consola para bibliotecas que centraliza el registro y administración de usuarios. Incluye un módulo de transporte para optimizar la coordinación de servicios y mejorar la atención a los estudiantes.",
    github: "https://github.com/AngieMinaI/Sistema-de-Gestion",
    docs: "https://docs.google.com/document/d/1xewm4k82fHXZoAjffUr4lk2eAbOyEndJ/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Java", "CLI"]
  },
  {
    id: 7,
    title: "Generador y validador de contraseñas",
    category: "Desktop",
    image: "Contrasena.png",
    description:
      "Generador de contraseñas seguras, que permite al usuario personalizar longitud y tipos de caracteres. El software incluye validación para garantizar que las contraseñas cumplan con criterios de seguridad.",
    github:
      "https://github.com/AngieMinaI/Generador-Validador-de-contrasenas",
    docs: "https://docs.google.com/document/d/1LMDVi7l2vYcEdd8MDzuSTJBfxNVM6052/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Python", "Flex", "Bison", "Tkinter", "RegExp"]
  },
  {
    id: 8,
    title: "Aliens vs Spaceship",
    category: "Videojuegos",
    image: "Aliens.png",
    description: "Videojuego de acción controlado por voz, donde el jugador maneja una nave espacial contra oleadas de alienígenas. El reto es sobrevivir, acumular puntos y evitar perder las 3 vidas disponibles.",
    github:
      "https://github.com/AngieMinaI/AngieMinaI.github.io-AliensvsSpaceship",
    docs: "https://docs.google.com/presentation/d/1UTxtHVH2-pf0oGqVQFTW8AVit_IKdoAC/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["JavaScript", "HTML", "CSS", "Phaser", "SpeechRecognition"]
  },
  {
    id: 9,
    title: "Dashboard de Cineplanet",
    category: "Análisis de Datos",
    image: "Cineplanet.png",
    description:
      "Dashboard en Power BI de Cineplanet utilizando datos en Excel del área de ventas, con el fin de analizar el rendimiento comercial y detectar oportunidades de expansión. La solución brinda métricas clave que apoyan la toma de decisiones estratégicas.",
    github: "https://github.com/AngieMinaI/Dashboard-KPI-Cineplanet",
    docs: "https://docs.google.com/document/d/1TjTXDPjicimQHZlp31XQZA8Q-rYJfWNe/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true",
    tags: ["Power BI", "Excel"]
  },
  {
    id: 10,
    title: "Eco de identidad",
    category: "Web",
    image: "Eco.png",
    description: "Aplicación web que graba la voz del usuario, analiza su género mediante frecuencia vocal y reproduce el mensaje con voz sintética del género identificado. El sistema integra un avatar dinámico.",
    github: "https://github.com/AngieMinaI/eco-identidad.git",
    docs: "https://docs.google.com/presentation/d/15BYKHxjRodzky28npdYf-oEUFA5osGJo/edit?usp=sharing&ouid=105862998656770649152&rtpof=true&sd=true",
    tags: ["JavaScript", "HTML","CSS", "Python", "Flask", "SpeechRecognition", "Numpy", "Parselmouth"]
  },
  {
    id: 11,
    title: "Sopa de Letras",
    category: "Videojuegos",
    image: "Sopa.png",
    description: "Videojuego tipo sopa de letras digital interactiva con 3 niveles de dificultad progresiva, diseñado para estimular la memoria visual y verbal. Cada nivel incrementa la complejidad, retando la concentración y la agilidad mental del jugador.",
    github:
      "https://github.com/AngieMinaI/AngieMinaI.github.io-JuegoSopadeLetras",
    docs:
      "https://drive.google.com/file/d/1xp0Rcw1P-R5sxwrJ0XXWJRAYhffAmJlT/view?usp=sharing",
    tags: ["JavaScript", "HTML", "CSS"]
  },
    {
    id: 12,
    title: "Ancient Wari",
    category: "Videojuegos",
    image: "Wari.png",
    description: "Videojuego educativo, relacionado a la cultura Wari. Contiene 3 niveles, cada uno con diferente background, sonidos y enemigos. El personaje principal (condor) deberá eliminar mediante disparos a cada enemigo sin perder cada uno de sus vidas.",
    github:
      "https://github.com/AngieMinaI/Videojuego-Ancient-Wari",
    docs:
      "https://drive.google.com/file/d/1Rnxe8MUGowK9fXoyeFHKzI2fZjYaxrC6/view?usp=sharing",
    tags: ["C++"]
  },
      {
    id: 13,
    title: "Dispara o pierde",
    category: "Videojuegos",
    image: "Construct.png",
    description: "Videojuego de reflejos donde solo tienes una oportunidad: si disparas en el momento correcto, ganas; si fallas, pierdes. Contiene 2 niveles y diferentes enemigos, puedes saltar, avanzar y retroceder. Videojuego basado en eventos.",
    github:
      "https://github.com/AngieMinaI/AngieMinaI.github.io-Construct",
    docs:
      "https://angieminai.github.io/AngieMinaI.github.io-Construct/",
    tags: ["Construct", "HTML"]
  },
    {
    id: 14,
    title: "Futbol",
    category: "Videojuegos",
    image: "JuegoFut.png",
    description: "Videojuego competitivo de dos jugadores, donde cada uno controla un guante en pantalla para bloquear la pelota e impedir que entre en su portería. Los guantes se mueven mediante botones táctiles en la pantalla, y el objetivo es evitar goles mientras intentas anotar al oponente. El primer jugador en alcanzar 5 goles será el ganador.",
    github:
      "https://github.com/AngieMinaI/AngieMinaI.github.io-Juego_Futbol_JS",
    docs:
      "https://angieminai.github.io/AngieMinaI.github.io-Juego_Futbol_JS/",
    tags: ["Javascript", "HTML", "Phaser"]
  }
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  // Cierra con tecla ESC
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setModalData(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const categories = ["All", "Desktop", "Web", "Videojuegos", "Análisis de Datos"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="Proyectos" className="work-section">
      <h2 className="title">Proyectos</h2>

      {/* Categorías */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Proyectos */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setModalData(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? setModalData(project) : null)}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <h3 className="project-title">{project.title}</h3>

            {/* Etiquetas */}
            <div className="project-tags">
              {project.tags?.map((t, i) => (
                <span className="tag-chip" key={i}>
                  {t}
                </span>
              ))}
            </div>

            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          > 
            <button
              className="modal-close"
              aria-label="Cerrar"
              onClick={() => setModalData(null)}
            >
              ×
            </button>

            <img
              src={modalData.image}
              alt={modalData.title}
              className="modal-image"
            />

            <h3 className="modal-title">{modalData.title}</h3>

            <div className="modal-tags">
              {modalData.tags?.map((t, i) => (
                <span className="tag-chip" key={i}>
                  {t}
                </span>
              ))}
            </div>

            <p className="modal-desc">{modalData.description}</p>

            <div className="modal-buttons">
              <a href={modalData.github} target="_blank" rel="noreferrer" className="btn">
                Ver código
              </a>
              <a href={modalData.docs} target="_blank" rel="noreferrer" className="btn">
                Ver documentación
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
