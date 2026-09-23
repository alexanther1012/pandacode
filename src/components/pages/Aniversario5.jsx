import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import WordByWordText from "../utilities/WordByWordText";
import SoundCloudPlayer from "../SoundCloudPlayer";
import Collage from "../../img/collage.jpg";
import { ANNIVERSARY_MESSAGE, SOUNDCLOUD_SRC } from "../../constants/messages";

const Aniversario5 = () => {
  const [visible, setVisible] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);

  const handleAllowAutoplay = () => {
    setAutoplayAllowed(true);
  };

  const handleSetVisible = () => {
    setVisible(true);
  };

  return (
    <Fragment>
      <div className="centered-container">
        <Grid container justifyContent="center">
          <Grid size={2} />
          <Grid size={8}>
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
          </Grid>
          <Grid size={2} />
        </Grid>
        <Grid container justifyContent="center">
          <Grid size={2} />
          <Grid size={8}>
            <div className="description">
              <span>Sabes que hoy es un dia muy especial!!</span>
            </div>
          </Grid>
          <Grid size={2} />
        </Grid>
        <Grid container justifyContent="center">
          <Grid size={2} />
          <Grid size={8}>
            <Button
              variant="contained"
              color="primary"
              className="button"
              onClick={() => {
                handleAllowAutoplay();
                handleSetVisible();
              }}
            >
              Click si quieres saber porque?
            </Button>
          </Grid>
          <Grid size={2} />
          {visible && (
            <Fragment>
              <Grid size={2} />
              <Grid size={8}>
                <WordByWordText
                  text={ANNIVERSARY_MESSAGE}
                  delay={300}
                  variant="h4"
                />
              </Grid>
              <Grid size={2} />
            </Fragment>
          )}
        </Grid>
        <Grid container justifyContent="center">
          {visible && (
            <img
              className="collage-img"
              src={Collage}
              alt="Photo collage of our memories together"
            />
          )}
        </Grid>
      </div>
      <br />
      <div className="soundcloud-container">
        {autoplayAllowed && (
          <SoundCloudPlayer
            src={SOUNDCLOUD_SRC}
            title={"Sebastian Yatra - No Hay Nadie Mas"}
            author={"DJ JeDrian"}
            profile={"https://soundcloud.com/jeschito44"}
            href={
              "https://soundcloud.com/jeschito44/sebastian-yatra-no-hay-nadie-mas"
            }
          />
        )}
      </div>
    </Fragment>
  );
};

export default Aniversario5;
