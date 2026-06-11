import {
  FaWordpress,
  FaServer,
  FaDatabase,
  FaCode,
  FaLink,
  FaGlobe,
  FaHeadset
} from "react-icons/fa";

import { SiPhp } from "react-icons/si";

import { MdSecurity } from "react-icons/md";



import { motion } from "framer-motion";

function Skills() {
  const skills = [
  {
    icon: <MdSecurity />,
    name: "Cybersecurity Operations",
    level: 95
  },
  {
    icon: <MdSecurity />,
    name: "SOC Monitoring",
    level: 90
  },
  {
    icon: <MdSecurity />,
    name: "Vulnerability Assessment",
    level: 88
  },
  {
    icon: <FaWordpress />,
    name: "WordPress Development",
    level: 95
  },
  {
    icon: <FaGlobe />,
    name: "Web Application Security",
    level: 90
  },
  {
    icon: <FaCode />,
    name: "Website Building",
    level: 95
  },
  {
    icon: <FaCode />,
    name: "PHP & JavaScript",
    level: 85
  },
  {
    icon: <FaServer />,
    name: "Hosting & Server Management",
    level: 92
  },
  {
    icon: <FaHeadset />,
    name: "Technical Support",
    level: 95
  },
  {
    icon: <FaDatabase />,
    name: "Database Management",
    level: 85
  },
  {
    icon: <FaLink />,
    name: "API Integration",
    level: 82
  },
  {
    icon: <MdSecurity />,
    name: "Infrastructure Management",
    level: 90
  },
  {
    icon: <MdSecurity />,
    name: "Security Hardening",
    level: 92
  }
];
  return (
    <section id="skills" className="skills">
      <h2>Technical Expertise</h2>

      <div className="skillsWrapper">
        {skills.map((skill, index) => (
          <motion.div
            className="skillBarCard"
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skillTop">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progressTrack">
              <motion.div
                className="progressFill"
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.level}%`
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;