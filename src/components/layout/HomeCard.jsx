import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const HomeCard = ({ title, description, to, comingSoon }) => {
  const navigate = useNavigate();

  return (
    <Card className={`home-card${comingSoon ? " home-card--coming-soon" : ""}`}>
      <CardActionArea
        className="home-card__action"
        onClick={() => !comingSoon && navigate(to)}
        disabled={comingSoon}
      >
        {comingSoon ? (
          <Skeleton
            variant="rectangular"
            className="home-card__skeleton"
            animation="wave"
          />
        ) : (
          <div className="home-card__banner" />
        )}
        <CardContent className="home-card__content">
          <Typography variant="h5" className="home-card__title">
            {title}
          </Typography>
          <Typography variant="body2" className="home-card__description">
            {comingSoon ? "Próximamente..." : description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  to: PropTypes.string,
  comingSoon: PropTypes.bool,
};

HomeCard.defaultProps = {
  description: "",
  to: "/",
  comingSoon: false,
};

export default HomeCard;
