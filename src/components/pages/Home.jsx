import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import FloresAmarillas from "./FloresAmarillas";

const Home = () => {
  const [flowers, setFlowers] = useState(false);
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
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/24394400&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/shelseashels"
          title="shelseashels"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          shelseashels
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/shelseashels/floricienta-flores-amarillas"
          title="Floricienta - flores amarillas"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Floricienta - flores amarillas
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
