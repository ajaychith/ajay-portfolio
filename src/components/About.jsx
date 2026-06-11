import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
id="about"
className="about"
initial={{ opacity:0 }}
whileInView={{opacity:1,y:0}}
viewport={{ once: true }}
transition={{ duration:1 }}
>

      <h2>About Me</h2>

      <p className="aboutText">
        I am Ajay Chithanoor, a B.Tech CSE (Cybersecurity)
        graduate currently serving as IT Department Head at
        Uma Diagnostic.

        My work spans Web Development, Cybersecurity,
        Infrastructure Management, Hosting Administration,
        WordPress Development and IT Operations.
      </p>

      <div className="stats">

        <div className="statCard">
          <h3>2024</h3>
          <p>B.Tech Graduate</p>
        </div>

        <div className="statCard">
          <h3>IT Head</h3>
          <p>Uma Diagnostic</p>
        </div>

        <div className="statCard">
          <h3>SOC</h3>
          <p>Security Operations </p>
        </div>

        <div className="statCard">
          <h3>Full Stack</h3>
          <p>I leverage modern AI-assisted development, WordPress, cybersecurity practices, and cloud technologies to build and maintain secure, scalable digital solutions.</p>
        </div>

      </div>

    </motion.section>
  );
}

export default About;