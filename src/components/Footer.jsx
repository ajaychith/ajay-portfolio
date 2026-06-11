import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <h3>Ajay Chithanoor</h3>

        <p>
          IT Department Head • Cybersecurity Practitioner • Full Stack Developer
        </p>

        <div className="footerLinks">
          <a href="#home">Top</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footerSocials">
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:support@umadiagnostic.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="footerCopy">
          © {new Date().getFullYear()} Ajay Chithanoor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;