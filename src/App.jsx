import Services from "./components/Services";
import { FaDownload } from "react-icons/fa";
import {
  FaShieldAlt,
  FaReact,
  FaWordpress,
  FaLinux,
  FaServer
} from "react-icons/fa";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <section id="home" className="hero">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4>WELCOME TO MY PORTFOLIO</h4>

          <h1>
            AJAY <span>CHITHANOOR</span>
          </h1>

          <h2>
  IT Department Head | Cybersecurity Practitioner
</h2>

<p>
  Building secure digital solutions through web development,
  infrastructure management and cybersecurity practices.
</p>

<div className="socials">

  <a
    href="https://linkedin.com/in/YOUR_LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/YOUR_GITHUB"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a href="mailto:support@umadiagnostic.com">
    <FaEnvelope />
  </a>

</div>

          <motion.a
  href="#projects"
  className="heroBtn"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  View Projects
</motion.a>
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="photoCard">
            <img src="/ajay.jpg" alt="Ajay" />
          </div>
        </motion.div>
      </section>


      <About />
      <Services />
      <Skills />

      <div className="resumeCard">
        <h3>Professional Resume</h3>

        <p>
          Explore my experience in cybersecurity,
          IT operations, infrastructure management
          and web development.
        </p>

        <a
  href="/Ajay Chithanoor.pdf"
  download
>
  <FaDownload />
  Download CV
</a>
      </div>

      <Experience />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;