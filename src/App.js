import { useState, useEffect } from "react";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Reasons } from "./components/reasons";
import { Memories } from "./components/memories";
import { Music } from "./components/music";
import { Blog } from "./components/blog";
import { Footer } from "./components/footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    console.log(landingPageData);
  }, [landingPageData]);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Reasons data={landingPageData.Reasons} />
      <Memories data={landingPageData.Memories} />
      <Music data={landingPageData.Music} />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
