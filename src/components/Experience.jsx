import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Asesora de Soporte Operativo Especializado en Atento",
      period: "Set 2022 - Actualidad",
      description:
        "Brindo soporte técnico remoto en servicios de internet y telefonía HFC/FTTH, optimizando configuraciones y pruebas para garantizar la continuidad del servicio. Asesoro a técnicos y participo en la implementación de soluciones digitales que reducen los tiempos de respuesta y mejoran la experiencia del cliente."
    }
  ];

  return (
    <section id="Experiencia Laboral" className="experience">
      <h2>Experiencia Laboral</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-icon">
              <i className="icon">✏️</i>
            </div>
            <div className="timeline-content">
              <h3>
                {exp.title}<span>
                  </span>{" "}
                <span className="period">{exp.period}</span>
              </h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
