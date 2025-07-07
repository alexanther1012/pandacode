import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import WordByWordText from "../utilities/WordByWordText";
import SoundCloudPlayer from "../SoundCloudPlayer";
import Flores from "./Flores";

const FloresAmarillas = () => {
  const [flowers, setFlowers] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);
  const mensajito =
    "Tal vez no sea algo muy grande, pero queria darte un pequeño detalle, y recordarte lo mucho que te amo. Tu eres esa persona que hace mis dias mas lindos y que dia tras dia haces que me enamore mas de ti. eres esa personita con la que quiero pasar dia tras dias hasta el fin de mi vida, hasta que seamos viejitos, y despues de esta vida tambien. Tu te mereces esto y mucho mucho mas pues eres una maravillosa persona, te admiro mucho y me haces feliz todos los dias. Gracias por estar a mi lado y ser esa maravillosa persona y por darme tanto amor.";
  const containerStyle = {
    position: "relative",
    height: 0,
    overflow: "hidden",
    paddingBottom: "56.25%", // 16:9 aspect ratio
  };

  const handleAllowAutoplay = () => {
    setAutoplayAllowed(true);
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
            onClick={() => {
              setFlowers(!flowers);
              handleAllowAutoplay();
            }}
          >
            Haz click aqui
          </Button>
        </div>
      )}
      {flowers && <Flores />}
      <div style={containerStyle}>
        {autoplayAllowed && (
          <SoundCloudPlayer
            src={
              "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/24394400&color=%231e1e1c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            }
            title={"Floricienta - flores amarillas"}
            author={"shelseashels"}
            profile={"https://soundcloud.com/shelseashels"}
            href={
              "https://soundcloud.com/shelseashels/floricienta-flores-amarillas"
            }
          />
        )}
      </div>
    </Fragment>
  );
};
export default FloresAmarillas;
