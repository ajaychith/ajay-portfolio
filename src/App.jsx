import { memo } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion
} from "framer-motion";

import {
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaShieldAlt,
  FaServer,
  FaWordpress,
  FaLinux,
  FaReact
} from "react-icons/fa";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut"
    }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut"
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const socialLinks = [
  {
    label: "LinkedIn Profile",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/YOUR_LINKEDIN"
  },
  {
    label: "GitHub Profile",
    icon: <FaGithub />,
    href: "https://github.com/YOUR_GITHUB"
  },
  {
    label: "Send Email",
    icon: <FaEnvelope />,
    href: "mailto:support@umadiagnostic.com"
  }
];

const heroHighlights = [
  {
    icon: <FaShieldAlt />,
    text: "Cybersecurity"
  },
  {
    icon: <FaServer />,
    text: "IT Infrastructure"
  },
  {
    icon: <FaReact />,
    text: "Web Development"
  },
  {
    icon: <FaWordpress />,
    text: "WordPress"
  },
  {
    icon: <FaLinux />,
    text: "Linux Systems"
  }
];

function App() {
  const reduceMotion = useReducedMotion();

  const leftAnimation = reduceMotion
    ? { initial: false, animate: false }
    : {
        variants: fadeLeft,
        initial: "hidden",
        animate: "visible"
      };

  const rightAnimation = reduceMotion
    ? { initial: false, animate: false }
    : {
        variants: fadeRight,
        initial: "hidden",
        animate: "visible"
      };

  const fadeUpAnimation = reduceMotion
    ? { initial: false, animate: false }
    : {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 }
      };

  return (
    <LazyMotion features={domAnimation}>
      <div className="app">
        <Navbar />

        <main>
          <section id="home" className="hero" aria-label="Portfolio hero section">
            <m.div className="left" {...leftAnimation}>
              <div className="heroBadge">
                <span className="heroBadgeDot" />
                <span>Welcome to my portfolio</span>
              </div>

              <h1>
                AJAY <span>CHITHANOOR</span>
              </h1>

              <h2>IT Department Head | Cybersecurity Practitioner</h2>

              <p>
                Building secure digital solutions through web development,
                infrastructure management, Linux systems and cybersecurity
                practices.
              </p>

              <div className="heroHighlights" aria-label="Core skills">
                {heroHighlights.map((item) => (
                  <span className="heroHighlight" key={item.text}>
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>

              <div className="socials" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="heroActions">
                <m.a
                  href="#projects"
                  className="heroBtn"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  View Projects
                </m.a>

                <m.a
                  href="/Ajay Chithanoor.pdf"
                  download
                  className="heroBtn secondaryHeroBtn"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  <FaDownload />
                  Download CV
                </m.a>
              </div>
            </m.div>

            <m.div className="right" {...rightAnimation}>
              <div className="photoCard" aria-label="Ajay profile photo">
                <img
                  src="/Ajay.jpg"
                  alt="Ajay Chithanoor"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </m.div>
          </section>

          <About />
          <Services />
          <Skills />

          <m.section className="resumeSection" {...fadeUpAnimation}>
            <div className="resumeCard">
              <span className="resumeMiniTitle">Resume</span>

              <h3>Professional Resume</h3>

              <p>
                Explore my experience in cybersecurity, IT operations,
                infrastructure management, Linux administration, WordPress
                development and secure digital systems.
              </p>

              <a href="/Ajay Chithanoor.pdf" download>
                <FaDownload />
                Download CV
              </a>
            </div>
          </m.section>

          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

export default memo(App);