import { FaShieldAlt, FaCode, FaServer } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      desc: "Security monitoring, vulnerability assessments and infrastructure hardening."
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "I leverage modern AI-assisted development, WordPress, cybersecurity practices, and cloud technologies to build and maintain secure, scalable digital solutions. My work includes website development using wordpress, React and PHP, hosting management, backend administration, security monitoring, vulnerability assessment, and IT operations."
    },
    {
      icon: <FaServer />,
      title: "Infrastructure",
      desc: "Hosting, backups, email systems and server management."
    }
  ];

  return (
    <section className="services">
      <h2>What I Do</h2>

      <div className="servicesGrid">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="serviceIcon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;