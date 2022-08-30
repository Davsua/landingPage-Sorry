import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import disco from "../img/disco.jpg";
import edc from "../img/edc.jpg";
import portrait from "../img/portfolio.jpg";
import dressing from "../img/dressing.jpg";
import playing from "../img/playing.jpg";
import looking from "../img/looking.jpg";
import touching from "../img/touching.jpg";
import florida from "../img/florida.jpg";
import edc2 from "../img/edc2.jpg";
import red from "../img/red.jpg";

export const Memories = (props) => {
  const images = [
    {
      original: disco,
      thumbnail: disco,
    },
    {
      original: edc,
      thumbnail: edc,
    },
    {
      original: touching,
      thumbnail: touching,
    },
    {
      original: playing,
      thumbnail: playing,
    },
    {
      original: looking,
      thumbnail: looking,
    },
    {
      original: dressing,
      thumbnail: dressing,
    },
    {
      original: portrait,
      thumbnail: portrait,
    },
    {
      original: red,
      thumbnail: red,
    },
    {
      original: edc2,
      thumbnail: edc2,
    },
    {
      original: florida,
      thumbnail: florida,
    },
  ];

  return (
    <section id="memories">
      <ImageGallery
        items={images}
        defaultImage={portrait}
        showBullets={true}
        showIndex={true}
        showThumbnails={true}
        lazyLoad={true}
        showPlayButton={true}
      />
    </section>
  );
};
