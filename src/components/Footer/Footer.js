import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="data">
        <div>
          <h4>+54 9 5678-4567 - contacto@pets.cl</h4>
        </div>
        <div>
          <h6>Copyright © 2023 / Pets / Todos los derechos reservados</h6>
        </div>
      </div>

      <div className="socialnet">
        <a href="https://www.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"30px", padding:"15px"}}/>{" "}</a>

        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} style={{fontSize:"30px", padding:"15px"}}/>{" "}</a>

        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} style={{fontSize:"30px", padding:"15px"}}/>{" "}</a>
      </div>
    </div>

  );
};

export default Footer;
