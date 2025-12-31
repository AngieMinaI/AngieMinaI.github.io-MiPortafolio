import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Asesora de Servicio de Mesa Técnica en Atento",
      period: "Set 2022 - Dic 2025",
      description: [
        "Brindé soporte técnico remoto en servicios de internet y telefonía HFC/FTTH.",
        "Optimicé configuraciones y realicé pruebas para garantizar la continuidad del servicio.",
        "Asesoré a técnicos y participé en la implementación de soluciones digitales.",
        "Reduje los tiempos de respuesta y mejoré la experiencia del cliente."
      ]
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
                {exp.title}{" "}
                <span className="period">{exp.period}</span>
              </h3>

              {exp.description.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
