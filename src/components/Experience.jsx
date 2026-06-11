import { motion } from "framer-motion";

function Experience() {
  const timeline = [
    {
      year: "2020",
      title: "Started B.Tech",
      desc: "Computer Science & Engineering"
    },
    {
      year: "2024",
      title: "Graduated",
      desc: "CSE Cybersecurity"
    },
    {
      year: "2024",
      title: "Joined Uma Diagnostic",
      desc: "Technology & Web Operations"
    },
    {
      year: "Present",
      title: "IT Department Head",
      desc: "Infrastructure, Security & Development"
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Career Journey</h2>

      <div className="timelineWrapper">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="timelineItem"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="timelineDot"></div>

            <div className="timelineContent">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;