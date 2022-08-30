import Zoom from "react-reveal/Zoom";
import ParticlesBg from "particles-bg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faEnvelope,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#reasons">
              Why?
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#memories">
              Memories
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#music">
              music
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#blog">
              blog
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Zoom bottom>
            <h1 className="responsive-headline">
              {props.data ? props.data.name : "Loading"}
            </h1>
          </Zoom>
          <Zoom bottom duration={1200}>
            <h3>{props.data ? props.data.text : "Loading"}.</h3>
          </Zoom>
          <hr />
          <Zoom bottom duration={2000}>
            <ul className="gifts">
              <a
                href={props.data ? props.data.songsList : "Loading"}
                className="button btn songsList-btn"
              >
                <FontAwesomeIcon icon={faMusic} />
                Songs
              </a>
              <a
                href="./pdf"
                target="blank"
                className="button btn freeHand-btn"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Letter
              </a>
            </ul>
          </Zoom>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#reasons">
          <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon>
        </a>
      </p>
    </header>
  );
};

export default Header;
