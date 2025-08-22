import { FaUserShield, FaGlobe, FaChartBar, FaProjectDiagram} from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";

export default function About() {
  return (
    <section id= "Acerca de mí" className="about">
      <h2>Acerca de mí</h2>
      <p>
        Soy Angie Mina estudiante de 10° ciclo de la carrera de Ingeniería Software de la Universidad 
        Tecnológica del Perú, con más de dos años de experiencia en soporte operativo.
        Cuento con conocimientos en programación, gestión del ciclo de vida del software 
        y metodologías ágiles y tradicionales.
        <br /><br />
        En este portafolio encontrarás una muestra de los proyectos que he desarrollado
        a lo largo de mi formación universitaria, así como un acceso directo a mis recursos profesionales.
        <br /><br />
        Me destaco por mi capacidad de trabajo en equipo, la resolución de problemas y el compromiso 
        de aportar ideas que generen valor, buscando innovar en cada proyecto en el que participo.
        <br /><br />
        Actualmente estoy aprendiendo React, Power BI y Excel para fortalecer mis habilidades técnicas.
        <br /><br />
        Busco oportunidades para aplicar y ampliar mis conocimientos en empresas de tecnología e
        innovación, en áreas como:
      </p>
      <div className="cards-container">
        <div className="card blue">
          <FaProjectDiagram className="card-icon" />
          <h3>Gestión de proyectos</h3>
        </div>
        <div className="card yellow">
          <FaGlobe className="card-icon" />
          <h3>Desarrollo Web</h3>
        </div>
        <div className="card red">
          <FaUserShield className="card-icon" />
          <h3>Auditoría de sistemas</h3>
        </div>
        <div className="card purple">
          <BiCheckShield className="card-icon" />
          <h3>Aseguramiento de calidad de software</h3>
        </div>
        <div className="card green">
          <FaChartBar className="card-icon" />
          <h3>Ciencias de datos</h3>
        </div>
      </div>
    </section>
  );
}

