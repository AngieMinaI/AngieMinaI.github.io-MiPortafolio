import React, { useState } from "react";


const projectsData = [
  {
    id: 1,
    title: "Simulador de préstamos personales",
    category: "Desktop",
    image: "Simulador.png",
    description: "Es simulador para préstamos personales de un banco con datos reales en el mercado. Esto permite promover la inclusión financiera. ",
    github: "https://github.com/AngieMinaI/Simulador-de-prestamos",
    docs: "https://docs.google.com/document/d/1qIaacyhU6HtraHpAawcDVAA8l_DjhjNL/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
  {
    id: 2,
    title: "Techno Isha",
    category: "Web",
    image: "Techno-Isha.png",
    description: "Ecommerce sobre productos de tecnología que ofrecen, ayuda a promover la venta de productos y servicios.",
    github: "https://github.com/AngieMinaI/Ecommerce-de-Techno-Isha",
    docs: "https://docs.google.com/document/d/1w3OKFVeMa8wPZLasoI78Pv19fcPiD13X/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
  {
    id: 3,
    title: "EducaTec",
    category: "Web",
    image: "Educatec.png",
    description: "Software EDUCATEC que ofrece cursos de manera remota.",
    github: "https://github.com/AngieMinaI/Plataforma-web-EDUCATEC",
    docs: "https://docs.google.com/document/d/184NyC3VXY_L2V47YQRf5r2TxhsnssWE7/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
    {
    id: 4,
    title: "Análisis de películas y TV de IMDB",
    category: "Análisis de Datos",
    image: "Analisis.png",
    description: "Sistema de inventario para productos tecnológicos.",
    github: "https://colab.research.google.com/drive/1BjU5O1YzJSi2xjJ1ucCnc2K3mR_udG-C?usp=sharing",
    docs: "https://docs.google.com/document/d/1VR2VOS15jiHHB6vS9j6_v668LY_biAe7/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
      {
    id: 5,
    title: "Oh My Pet",
    category: "Web",
    image: "Ohmypet.png",
    description: "Ecommerce es la empresa Oh My Pet, la cual facilita la venta en línea de productos para mascotas domésticas.",
    github: "https://github.com/AngieMinaI/Ecommerce-Oh-My-Pet",
    docs: "https://drive.google.com/drive/folders/1UlIgzeGJsvKaCX7uGQkfZOALcL4kBeq1?usp=sharing"
  },
    {
    id: 6,
    title: "Sistema de gestión de usuario (Consola)",
    category: "Desktop",
    image: "Sistemagestion.png",
    description: "Es un sistema de gestión de usuarios (DNI) para una biblioteca que incluye un módulo de transporte para los estudiantes. Esto facilita administración de la información así como rutas de transporte. Modo consola.",
    github: "https://github.com/AngieMinaI/Sistema-de-Gestion",
    docs: "https://docs.google.com/document/d/1xewm4k82fHXZoAjffUr4lk2eAbOyEndJ/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
    {
    id: 7,
    title: "Generador y validador de contraseñas",
    category: "Desktop",
    image: "Contrasena.png",
    description: "Es un sistema usando flex y bison por expresiones regulares y la partes de fronted con Python.",
    github: "https://github.com/AngieMinaI/Generador-Validador-de-contrasenas",
    docs: "https://docs.google.com/document/d/1LMDVi7l2vYcEdd8MDzuSTJBfxNVM6052/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
      {
    id: 8,
    title: "Aliens vs Spaceship",
    category: "Videojuegos",
    image: "Aliens.png",
    description: "Videojuegos en web, controlado por voz.",
    github: "https://github.com/AngieMinaI/AngieMinaI.github.io-AliensvsSpaceship",
    docs: "https://docs.google.com/presentation/d/1UTxtHVH2-pf0oGqVQFTW8AVit_IKdoAC/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
        {
    id: 9,
    title: "Dashboard de KPIs de Cineplanet",
    category: "Análisis de Datos",
    image: "Cineplanet.png",
    description: "Se realizado el ánalisis de ventas de Cineplanet y se visualizó PowerBI.",
    github: "https://github.com/AngieMinaI/Dashboard-KPI-Cineplanet",
    docs: "https://docs.google.com/document/d/1TjTXDPjicimQHZlp31XQZA8Q-rYJfWNe/edit?usp=sharing&ouid=110217138648959352331&rtpof=true&sd=true"
  },
       {
    id: 10,
    title: "Arcade de 2 jugadores",
    category: "Videojuegos",
    image: "Juego2.png",
    description: "Videojuego en Js para 1 o 2 jugadores.",
    github: "https://github.com/AngieMinaI/AngieMinaI.github.io-Juego_2Jugadores",
    docs: "https://angieminai.github.io/AngieMinaI.github.io-Juego_2Jugadores/"
  },
  {
    id: 11,
    title: "Eco de identidad",
    category: "Videojuegos",
    image: "Eco.png",
    description: "Juego de reconocimiento de voz.",
    github: "https://github.com/AngieMinaI/eco-identidad.git",
    docs: "https://docs.google.com/presentation/d/15BYKHxjRodzky28npdYf-oEUFA5osGJo/edit?usp=sharing&ouid=105862998656770649152&rtpof=true&sd=true"
  },
    {
    id: 12,
    title: "Sopa de Letras",
    category: "Videojuegos",
    image: "Sopa.png",
    description: "Juego de sopa de letras.",
    github: "https://github.com/AngieMinaI/AngieMinaI.github.io-JuegoSopadeLetras",
    docs: "https://drive.google.com/file/d/1xp0Rcw1P-R5sxwrJ0XXWJRAYhffAmJlT/view?usp=sharing"
  }

];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

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
          <div key={project.id} className="project-card" onClick={() => setModalData(project)}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalData.image} alt={modalData.title} className="modal-image" />
            <h3>{modalData.title}</h3>
            <p>{modalData.description}</p>
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
