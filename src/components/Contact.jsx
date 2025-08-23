import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const emailLink = isMobile
    ? "mailto:angieminaishuiza@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=angieminaishuiza@gmail.com";

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
          href={emailLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">
        © 2025 Angie Mina Ishuiza. Todos los derechos reservados.
      </p>
    </footer>
  );
}