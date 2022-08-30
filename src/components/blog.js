import { useState } from "react";
import { TextBlog } from "./textBlog";

export const Blog = () => {
  const [buttonBlog, setButtonBlog] = useState("off");

  return (
    <section id="blog">
      <div className="container-blog">
        <h1 className="title-blog">Letter</h1>
        <p className="description-blog">
          esto es algo, que aunque no creo que lo leas, pero espero que si, lo
          escribi con muchos sentimientos, durante muchos dias, en ella expreso
          muchas cosas que siento que debia decir para sentirme mas tranquilo y
          que depronto tu quieres saber, enserio espero lo puedas leer, abri mi
          alma y corazon ahi.
        </p>

        <div className="buttons">
          <button
            type="button"
            className="btn"
            onClick={() => setButtonBlog("on")}
          >
            {" "}
            Open{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setButtonBlog("off")}
          >
            {" "}
            Hide{" "}
          </button>
          <div>{buttonBlog === "on" ? <TextBlog /> : null}</div>
        </div>
      </div>
    </section>
  );
};
