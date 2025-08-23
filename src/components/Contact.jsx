import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/angie-mina-ishuiza/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AngieMinaI"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=angieminaishuiza@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© 2025 Angie Mina Ishuiza. Todos los derechos reservados.</p>
    </footer>
  );
}
