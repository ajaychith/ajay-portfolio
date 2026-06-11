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
        I am Ajay Chithanoor, a B.Tech Computer Science (Cybersecurity) graduate and currently serving as IT Department Head at Uma Diagnostic. 
        My expertise spans Cybersecurity Operations, Web Development, Infrastructure Management, Hosting Administration, 
        WordPress Development, and IT Support. I am passionate about building secure, scalable, and high-performance digital solutions 
        while ensuring operational excellence and security best practices.
      </p>

      <div className="stats">

        <div className="statCard">
          <h3>2024</h3>
          <p>Completed B.Tech in Computer Science Engineering with specialization in Cybersecurity, 
            building a strong foundation in secure systems, networking, and modern technologies.</p>
        </div>

        <div className="statCard">
          <h3>IT Department Head</h3>
          <p>Leading IT operations at Uma Diagnostic, overseeing infrastructure, 
            website management, hosting, cybersecurity practices, and technology-driven business solutions.</p>
        </div>

        <div className="statCard">
          <h3>Cybersecurity Operations</h3>
          <p>Experienced in SOC monitoring, vulnerability assessment, security hardening, 
            incident response, and implementing best practices to strengthen organizational security. </p>
        </div>

        <div className="statCard">
          <h3>AI-Powered Development</h3>
          <p>Leveraging modern AI-assisted development, WordPress, cybersecurity practices, and cloud technologies to build secure, 
            scalable, and high-performance digital solutions while accelerating innovation and productivity.</p>
        </div>

      </div>

    </motion.section>
  );
}

export default About;