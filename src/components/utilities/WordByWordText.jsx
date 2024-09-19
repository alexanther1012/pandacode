import React, { useState, useEffect, Fragment } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";

const WordByWordText = ({ text, delay, variant }) => {
  const [displayedText, setDisplayedText] = useState("");
  const words = text.split(" ");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (index < words.length) {
          const newText = prevText + (prevText ? " " : "") + words[index];
          index++;
          return newText;
        } else {
          clearInterval(interval);
          return prevText; // Stop updating after all words have been displayed
        }
      });
    }, delay);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [text, delay]);

  return (
    <Fragment>
      <Grid size={2} />
      <Grid size={8}>
        <Typography variant={variant} gutterBottom>
          {displayedText}
        </Typography>
      </Grid>
      <Grid size={2} />
    </Fragment>
  );
};

// Define prop types for validation
WordByWordText.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

// Set default props
WordByWordText.defaultProps = {
  delay: 300,
};

export default WordByWordText;
