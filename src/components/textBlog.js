import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TextBlog = () => {
  return (
    <>
      <p>
        Espero que estés muy bien, de verdad anhelo eso. Es muy probable que no
        leas lo que esta aquí escrito pero de todas formas quiero escribirlo,
        desahogarme y contarte todas las cosas que he querido contarte durante
        este tiempo, se que no será suficiente un solo archivo pero algo es algo
        y lo escribo abriendo mi mente mi alma y mi corazón.... CONTINUE PDF
      </p>
      <br></br>
      <a href="./pdf" target="blank" className="button btn freeHand-btn">
        <FontAwesomeIcon icon={faSearch} />
        See all in PDF
      </a>
    </>
  );
};
