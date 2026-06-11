import { FaShieldAlt, FaCode, FaServer } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      desc: "Conducting security monitoring, vulnerability assessments, risk mitigation, and infrastructure hardening to strengthen organizational security and resilience."
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Building modern web solutions using AI-assisted development, WordPress, React, PHP, and cloud technologies with a focus on performance and security."
    },
    {
      icon: <FaServer />,
      title: "Infrastructure Management",
      desc: "Overseeing hosting, server management, backup strategies, email systems, and IT operations to ensure reliability and business continuity."
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