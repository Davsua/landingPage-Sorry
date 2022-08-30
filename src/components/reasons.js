import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSadCry,
  faHandsHelping,
  faGrinHearts,
} from "@fortawesome/free-solid-svg-icons";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
//import { Zoom } from "react-reveal";

let sad = faRaspberryPi;
let cry = faSadCry;
let hands = faHandsHelping;
let heart = faGrinHearts;

let arrToIcons = [sad, hands, cry, heart];

export const Reasons = (props) => {
  return (
    <section id="reasons" className="text-center">
      <Zoom duration={1000}>
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h1>Reasons why..</h1>
          </div>
          <div className="row-reasons">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}`} className="block-icons">
                    {" "}
                    <FontAwesomeIcon
                      icon={arrToIcons[i]}
                      className="icons-reasons"
                    />
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </Zoom>
    </section>
  );
};
