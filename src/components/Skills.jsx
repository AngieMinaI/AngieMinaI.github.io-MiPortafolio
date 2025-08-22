import {FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaUnity, FaGithub, FaFigma, FaTrello, FaPhp, FaGitAlt, FaGoogleDrive, FaJava} from "react-icons/fa";
import {SiGodotengine, SiPostman, SiSublimetext, SiJira, SiGoogledocs, SiGooglesheets, SiGooglemeet} from "react-icons/si";
import {BiLogoVisualStudio, BiBarChartAlt} from "react-icons/bi";
import {GiPrayingMantis} from "react-icons/gi";
import {PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill, PiMicrosoftPowerpointLogoFill, PiMicrosoftTeamsLogoFill, PiMicrosoftOutlookLogoFill} from "react-icons/pi";

export default function Skills() {
  return (
    <section id= "Habilidades" className="skills">
      <h2>Habilidades</h2>

      <div className="skills-container">

        {/* Lenguajes */}
        <div className="skills-box">
          <h3>Lenguajes y Tecnologías</h3>
          <div className="skills-items">
            <span><FaJs /> JavaScript</span>
            <span><FaHtml5 /> HTML</span>
            <span><FaCss3Alt /> CSS</span>
            <span><FaPython /> Python</span>
            <span><FaDatabase /> SQL Server</span>
            <span><FaPhp />PHP</span>
            <span><FaJava />Java</span>
            <span><FaUnity /> Unity</span>
            <span><SiGodotengine /> Godot</span> 
          </div>
        </div>


        {/* Herramientas y Plataformas */}
        <div className="skills-box">
          <h3>Herramientas y Plataformas</h3>
          <div className="skills-items">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><BiLogoVisualStudio /> Visual Studio Code</span>
            <span><SiSublimetext  /> SublimeText</span>
            <span><FaFigma /> Figma</span>
            <span><SiPostman /> Postman</span>
            <span><BiBarChartAlt /> PowerBI</span>
            <span><GiPrayingMantis/>MantisHub</span>          
          </div>
        </div>

        {/* Gestión y Productividad */}
        <div className="skills-box">
          <h3>Gestión y Productividad</h3>
          <div className="skills-items">
            <span><SiJira /> Jira</span>
            <span><FaTrello /> Trello</span>
            <span><PiMicrosoftExcelLogoFill/> Excel</span>
            <span><PiMicrosoftWordLogoFill/> Word</span>
            <span><PiMicrosoftPowerpointLogoFill  /> PowerPoint</span>
            <span><PiMicrosoftTeamsLogoFill/> Teams</span>
            <span><PiMicrosoftOutlookLogoFill/> Outlook</span>     
            <span><FaGoogleDrive/> Drive</span>   
            <span><SiGoogledocs/> Docs</span>   
            <span><SiGooglesheets/> Sheet</span>   
            <span><SiGooglemeet/> Meet</span>  
          </div>
        </div>
      </div>
    </section>
  );
}
