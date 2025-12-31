import React, { useState } from "react";

export default function Education() {
  const educationData = [
  {
    id: 1,
    title: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ - UTP",
    date: "Egreso: Dic 2025",
    description: "Egresada de la carrera de Ingeniería de Software, con formación sólida en desarrollo de aplicaciones web, bases de datos y gestión de proyectos tecnológicos. Durante mi carrera, he participado en proyectos prácticos de desarrollo de software y videojuegos, aplicando tecnologías como JavaScript, Python, Java, HTML, CSS y motores como Unity y Godot, fortaleciendo mis competencias en programación, diseño de sistemas y resolución de problemas."
  },
  {
    id: 2,
    title: "ENDLESS STUDIOS",
    date: "May 2024 – Jul 2024",
    description: "Participé del programa GameLab 2.0, donde aprendí sobre el diseño y desarrollo de videojuegos utilizando Godot Engine. Durante la formación, adquirí habilidades en programación y diseño, aplicando conceptos fundamentales de desarrollo de software orientado a videojuegos."
  },

  {
    id: 3,
    title: "INSTITUTO PERUANO DE NEGOCIOS - IPN",
    date: "Jul 2022 – Ago 2022",
    description: "Realicé un curso de Ofimática Elemental, completando los niveles I, II y III de Microsoft Word, Excel y PowerPoint, adquiriendo habilidades prácticas para elaborar documentos, planillas y presentaciones profesionales, y fortaleciendo mi desempeño académico y laboral."
  },
  {
    id: 4,
    title: "ASOCIACIÓN CULTURAL PERUANO BRITÁNICA - BRITÁNICO",
    date: "Feb 2019 – Feb 2020",
    description: "Completé las 12 fases del Nivel Básico del programa de Inglés, desarrollando competencias en comprensión, lectura y comunicación oral, fortaleciendo mi capacidad de interactuar en entornos profesionales y académicos."
  },
];
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="Educación" className="education">
      <h2>Educación</h2>
      {educationData.map((item) => (
        <div key={item.id} className="accordion-item">
          <div
            className={`accordion-title ${activeId === item.id ? "active" : ""}`}
            onClick={() => toggleAccordion(item.id)}
          >
            {item.title}
            <span>{activeId === item.id ? "—" : "+"}</span>
          </div>
          {activeId === item.id && (
            <div className="accordion-content">
              <p>
                 <span className="education-date">{item.date}</span><br/>
                 <span className="education-description">{item.description}</span>
               </p>         
            </div>
          )}
        </div>
      ))}
    </section>
  );
}