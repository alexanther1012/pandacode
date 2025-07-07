import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import WordByWordText from "../utilities/WordByWordText";
import SoundCloudPlayer from "../SoundCloudPlayer";
import Collage from "../../img/collage.jpg";

const Aniversario5 = () => {
  const [visible, setVisible] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);
  const mensajito =
    "Se que tal vez pensaste que se me olvido o que lo tome como un dia cualquiera, pero no no fue asi, porque hoy es un dia muy especial en nuestras vidas hoy hace 8 años y contando  y tal vez unos dias, bueno, tal vez meses, tu sabes nuestra historia mi vida, desde entonces me haz hecho muy muy feliz, haz hecho que este niño loco, unas veces serio, otras veces creo que soy desesperante, otras veces idiatico, pero sabes algo, te amo mucho mucho mucho como no te lo imaginas tanto como las estrellas que estan en el cielo aunque sea de dia y no se vean, pero me haces mucho muy feliz, eres la persona que quiero en mi vida y despues de esta te buscaria tambien en miles de vidas mas. Eres esa personita por la que me esmero a ser mejor persona y por quien quiero hacer cosas imposibles posibles. Te doy gracias por todo y quiero que sigamos cosechando mas momentos juntos, eres mi todo mi vida y espero poder cumplir contigo todos nuestros sueños y llegar a ser viejitos y fantasmitas tambien n.n te amo mucho....";
  const containerStyle = {
    display: "flex",
    position: "relative",
    height: 0,
    bottom: 0,
    overflow: "hidden",
    paddingBottom: "56.25%", // 16:9 aspect ratio
  };

  const handleAllowAutoplay = () => {
    setAutoplayAllowed(true);
  };

  const handleSetVisible = () => {
    setVisible(true);
  };

  return (
    <Fragment>
      <div className="centered-container">
        <Grid justifyContent="center">
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
        <Grid justifyContent="center">
          <Grid size={2} />
          <Grid size={8}>
            <div className="description">
              <span>Sabes que hoy es un dia muy especial!!</span>
            </div>
          </Grid>
          <Grid size={2} />
        </Grid>
        <Grid justifyContent="center">
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
                <WordByWordText text={mensajito} delay={300} variant="h4" />
              </Grid>
              <Grid size={2} />
            </Fragment>
          )}
        </Grid>
        <Grid justifyContent="center">
          {visible && (
            <img style={{ width: "100%" }} src={Collage} alt="collage" />
          )}
        </Grid>
      </div>
      <br />
      <div style={containerStyle}>
        {autoplayAllowed && (
          <SoundCloudPlayer
            src={
              "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/438438189&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            }
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
