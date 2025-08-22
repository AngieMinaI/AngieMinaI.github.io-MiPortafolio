export default function Home() {
  return (
    <section id="Inicio" className="home">
      <div className="home-content">
        <h1>Bienvenido a mi portafolio!<br/>Soy Angie Mina Ishuiza</h1>
        <p>Ingeniera de Software </p>
        <a href={`${import.meta.env.BASE_URL}CV-Angie-Mina-Ishuiza.pdf`} download className="cv-btn">
            Descargar CV <span className="icon">⬇</span>
        </a>
      </div>
    </section>
  );
}
