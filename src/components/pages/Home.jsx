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
    </Fragment>
  );
};

export default Home;
