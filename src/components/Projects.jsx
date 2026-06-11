import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {

  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
      {
  title: "Uma Diagnostic",
  category: "Web",
  image: "/project1.jpg",

  desc: "Managed production healthcare website and infrastructure.",

  achievements: [
    "Managed website hosting and uptime",
    "Implemented SEO optimization",
    "Performed website security hardening",
    "Managed email and DNS records",
    "Handled backups and maintenance"
  ],

  tech: ["WordPress", "PHP", "Hosting"],

  demo: "https://umadiagnostic.com",
  github: "#"

  
},

      {
      title: "Venkart",
      category: "React",
      image: "/project2.jpg",
      desc: "Online fruits and vegetables ecommerce platform.",
      tech: ["React", "Node", "MySQL"]
    },
    {
      title: "Security Audit",
      category: "Cybersecurity",
      image: "/project3.jpg",
      desc: "Vulnerability assessment and monitoring.",
      tech: ["Cybersecurity", "SOC", "SIEM"]
    },
    {
      title: "Automation",
      category: "Backend",
      image: "/project4.jpg",
      desc: "Workflow automation and backend integrations.",
      tech: ["PHP", "API", "WordPress"]
    }
  ];
 
  const filteredProjects =
  filter === "All"
    ? projects
    : projects.filter(
        (project) => project.category === filter
      );

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

       <div className="filters">

<button
  className={filter === "All" ? "activeFilter" : ""}
  onClick={() => setFilter("All")}
>
  All
</button>

<button
  className={filter === "Web" ? "activeFilter" : ""}
  onClick={() => setFilter("Web")}
>
  Web
</button>

<button
  className={filter === "React" ? "activeFilter" : ""}
  onClick={() => setFilter("React")}
>
  React
</button>

<button
  className={filter === "Cybersecurity" ? "activeFilter" : ""}
  onClick={() => setFilter("Cybersecurity")}
>
  Cybersecurity
</button>

<button
  className={filter === "Backend" ? "activeFilter" : ""}
  onClick={() => setFilter("Backend")}
>
  Backend
</button>

</div>

      <div className="projectGrid">
         {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="projectCard"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <ul className="achievementList">
  {project.achievements?.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

            <div className="techTags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

           <div className="projectButtons">

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="outlineBtn"
  >
    GitHub
  </a>

</div>
          </motion.div>
        ))}
      </div>

  
    </section>
  );
}

export default Projects;