import React from "react";

const BodaCivil = () => {
  const videoUrl = `https://www.youtube.com/embed/38Wjg6WTmwU?si=br-saSlyaWMO-Oga}`;

  return (
    <div style={videoContainerStyles}>
      <iframe
        width="560"
        height="315"
        title="Nuestra boda"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={iframeStyles}
      ></iframe>
    </div>
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
