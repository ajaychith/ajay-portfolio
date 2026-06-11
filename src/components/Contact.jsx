import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Let's Connect</h2>

      <p>
        Interested in collaborating, hiring or discussing
        cybersecurity and development projects?
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contactForm"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;