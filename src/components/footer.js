import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container-footer">
        <h1 className="title-footer">If you want...</h1>
        <p className="description-footer">
          I'll be waiting for your answer, literally all life, you know where i
          am, obviusly, but i give you down here all the sites where im waiting
          for you.. also, i know its weird, but i said ill do whatever i have to
          do, if you "want" or at least no te molesta, i can only to talk with
          you (i just need you say yes)
        </p>
        <a
          href="https://www.instagram.com/david.suarezc/"
          className="btn-footer"
          target="blank"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com/davidsuarez998"
          className="btn-footer"
          target="blank"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://web.facebook.com/david.s.carvajal.7"
          className="btn-footer"
          target="blank"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B573192305297&text&type=phone_number&app_absent=0"
          className="btn-footer"
          target="blank"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
};
