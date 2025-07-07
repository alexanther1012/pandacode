import React, { useState } from "react";
import PropTypes from "prop-types";

const SoundCloudPlayer = ({ src, display, title, author, profile, href }) => {
  const [iframeSrc] = useState(src);

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
          href={profile}
          title={author}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          {author}
        </a>{" "}
        ·{" "}
        <a
          href={href}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyles}
        >
          {title}
        </a>
      </div>
    </React.Fragment>
  );
};

SoundCloudPlayer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profile: PropTypes.string,
  href: PropTypes.string,
  display: PropTypes.string,
};

export default SoundCloudPlayer;
