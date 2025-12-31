import { FaGamepad, FaProjectDiagram} from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi"
import { SiGoogleanalytics } from "react-icons/si";

export default function About() {
  return (
    <section id= "Acerca de mí" className="about">
      <h2>Acerca de mí</h2>
      <p>
        Soy Angie Mina egresada de la carrera de Ingeniería Software de la Universidad 
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
        Actualmente estoy aprendiendo Game Design, Power BI y Excel para fortalecer mis habilidades técnicas.
        <br /><br />
        Busco oportunidades para aplicar y ampliar mis conocimientos en empresas de tecnología e
        innovación, en áreas como:
      </p>
      <div className="cards-container">
        <div className="card blue">
          <GiMaterialsScience className="card-icon" />
          <h3>Ciencia de Datos</h3>
        </div>
        <div className="card green">
          <SiGoogleanalytics className="card-icon" />
          <h3>Análisis de Datos</h3>
        </div>
        <div className="card purple">
          <FaGamepad  className="card-icon" />
          <h3>Desarrollo de Videojuegos</h3>
        </div>  
        <div className="card orange">
          <FaProjectDiagram className="card-icon" />
          <h3>Gestión de Proyectos</h3>
        </div>     
      </div>
    </section>
  );
}

