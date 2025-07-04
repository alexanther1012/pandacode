import React, { useState } from "react";
import PropTypes from "prop-types";

const SoundCloudPlayer = ({ src, display }) => {
  const [iframeSrc] = useState(
    src ||
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/24394400&color=%231e1e1c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  );

  const iframeStyles = {
    width: "100%",
    height: "166px",
    border: "none",
    scrolling: "no",
  };

  const containerStyles = {
    fontSize: "10px",
    color: "#cccccc",
    lineBreak: "anywhere",
    wordBreak: "normal",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontFamily:
      "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
    fontWeight: "100",
    display: display || "block",
  };

  const linkStyles = {
    color: "#cccccc",
    textDecoration: "none",
  };

  return (
    <React.Fragment>
      <iframe
        title="SoundCloud Player"
        style={iframeStyles}
        allow="autoplay"
        src={iframeSrc}
      ></iframe>
      <div style={containerStyles}>
        <a
          href="https://soundcloud.com/shelseashels"
          title="shelseashels"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          shelseashels
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/shelseashels/floricienta-flores-amarillas"
          title="Floricienta - flores amarillas"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          Floricienta - flores amarillas
        </a>
      </div>
    </React.Fragment>
  );
};

SoundCloudPlayer.propTypes = {
  src: PropTypes.string,
  display: PropTypes.string,
};

export default SoundCloudPlayer;
