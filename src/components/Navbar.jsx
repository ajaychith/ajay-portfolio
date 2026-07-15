import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logoBox">
        <h2>AJAY</h2>
        <span>Healthcare IT Lead & Cybersecurity Practitioner</span>
      </div>

      <div
        className="menuToggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "navLinks active" : "navLinks"}>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#experience">Experience</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

        <li>
          <a
            href="/Ajay Chithanoor.pdf"
            download
            className="resumeBtn"
          >
            Resume
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;