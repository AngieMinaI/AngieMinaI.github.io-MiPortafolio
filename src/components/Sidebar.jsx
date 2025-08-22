export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Angie Mina</h2>
      <h3>Ingeniera de Software en Perú</h3>
      <ul>
        {[
          "Inicio",
          "Acerca de mí",
          "Habilidades",
          "Educación",
          "Experiencia Laboral",
          "Proyectos",
        ].map((section) => (
          <li key={section}>
            <a href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
