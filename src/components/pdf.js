import React, { Component } from "react";

class Pdf extends Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("Downpdf").click();
      window.close();
    }
  }

  render() {
    return (
      <div className="pdf-container">
        <object
          data={require("../pdf/letterJoselyn.pdf")}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          {" "}
          <a
            href={require("../pdf/letterJoselyn.pdf")}
            id="Downpdf"
            download="Letter4Joselyn"
          >
            Tu dispositivo no puede visualizar PDF, da click para descargar
          </a>
        </object>
      </div>
    );
  }
}

export default Pdf;
