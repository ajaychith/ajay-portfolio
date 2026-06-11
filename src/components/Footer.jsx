import {
FaLinkedin,
FaGithub,
FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>Ajay Chithanoor</h3>

      <p>
        IT Department Head • Cybersecurity Practitioner • Full Stack Developer
      </p>

      <div className="footerLinks">
        <a href="#home">Top</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>


    <div className="footerSocials">

<a href="YOUR_LINKEDIN">
<FaLinkedin />
</a>

<a href="YOUR_GITHUB">
<FaGithub />
</a>

<a href="mailto:support@umadiagnostic.com">
<FaEnvelope />
</a>

</div>
    </footer>
  );
}

export default Footer;