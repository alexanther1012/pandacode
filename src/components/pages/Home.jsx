import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import FloresAmarillas from "./FloresAmarillas";

const Home = () => {
  const [flowers, setFlowers] = useState(false);
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
