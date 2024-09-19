import React, { Fragment } from "react";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <Fragment>
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
          href="/flores-amarillas"
          variant="contained"
          color="primary"
          className="button"
        >
          Haz click aqui
        </Button>
      </div>
    </Fragment>
  );
};

export default Home;
