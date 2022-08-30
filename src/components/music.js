import List from "../img/list_music.jpeg";

export const Music = (props) => {
  return (
    <section id="music">
      <div className="container-music">
        <img src={List} alt="FOTO" className="pic-music" />
        <div className="text-center-music">
          <h1 className="title-music">How i remember you...</h1>
          <p className="text-music">
            I made this playlist and i want to share with you. this playlist
            have some of the songs that make me remember you in different
            moments, like when we are together, our first time hanging up, the
            day that i met your your birthday, my fucking error... but, well,
            even knowing this is very sad, i love listen this playlist, it
            remember me probably the best part of my life, so, if you want to
            listen it, i hope you like it. (tienes que escanearla desde spotify)
          </p>
        </div>
      </div>
    </section>
  );
};
