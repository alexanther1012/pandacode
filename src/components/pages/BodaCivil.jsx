import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

import Contador from "../contador";
const BodaCivil = () => {
  const videoUrl = `https://www.youtube.com/embed/38Wjg6WTmwU?si=br-saSlyaWMO-Oga}`;
  const [type, setType] = useState("complete");

  const toggleType = () => {
    setType((prev) => (prev === "complete" ? "years" : "complete"));
  };

  return (
    <Fragment>
      <Grid container spacing={3} justifyContent="center">
        <Grid size={2} />
        <Grid size={8}>
          <div style={videoContainerStyles}>
            <iframe
              width="1280"
              height="720"
              title="Nuestra boda"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={iframeStyles}
            ></iframe>
          </div>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="h1" gutterBottom>
            <Contador type={type} startDate={"2021-07-24T16:30:00"} />
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <div className="button-switch-count">
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={toggleType}
            >
              Quieres saber cuanto es en{" "}
              <span>{type === "years" ? "dias" : "años"}</span>
            </Button>
          </div>
        </Grid>
        <Grid size={2} />
      </Grid>
    </Fragment>
  );
};

const videoContainerStyles = {
  display: "flex",
  justifyContent: "center",
  margin: "2rem 0",
};

const iframeStyles = {
  width: "100%",
  maxWidth: "56.25rem", // 16:9 aspect ratio
  height: "31.5rem",
};

export default BodaCivil;
