import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import FloresAmarillas from "./FloresAmarillas";
import WordByWordText from "../utilities/WordByWordText";

const Home = () => {
  const [flowers, setFlowers] = useState(false);
  const mensajito =
    "Tal vez no sea algo muy grande, pero queria darte un pequeño detalle, y recordarte lo mucho que te amo. Tu eres esa persona que hace mis dias mas lindos y que dia tras dia haces que me enamore mas de ti. eres esa personita con la que quiero pasar dia tras dias hasta el fin de mi vida, hasta que seamos viejitos, y despues de esta vida tambien. Tu te mereces esto y mucho mucho mas pues eres una maravillosa persona, te admiro mucho y me haces feliz todos los dias. Gracias por estar a mi lado y ser esa maravillosa persona y por darme tanto amor.";
  const containerStyle = {
    position: "relative",
    height: 0,
    overflow: "hidden",
    paddingBottom: "56.25%", // 16:9 aspect ratio
  };

  const iframeStyle = {
    border: "none",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    visibility: "hidden", // Hides the video but keeps the audio playing
  };
  return (
    <Fragment>
      {!flowers && (
        <div className="centered-container">
          <div className="greetings">
            <span>H</span>
            <span>O</span>
            <span>L</span>
            <span>A</span>
          </div>
          <div className="greetings">
            <span>M</span>
            <span>I</span>
          </div>
          <div className="greetings">
            <span>A</span>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>O</span>
            <span>S</span>
            <span>I</span>
            <span>T</span>
            <span>A</span>
          </div>
          <div className="description">
            <span>Tengo un regalo muy especial para ti!!</span>
          </div>
          {!flowers && (
            <WordByWordText text={mensajito} delay={300} variant="h4" />
          )}
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => setFlowers(!flowers)}
          >
            Haz click aqui
          </Button>
        </div>
      )}
      {flowers && <FloresAmarillas />}
      <div style={containerStyle}>
        <iframe
          src="https://www.youtube.com/embed/S7gMzYqXIZc?controls=0&autoplay=1&mute=0"
          style={iframeStyle}
          allow="autoplay"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Home;
