import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../img/panda.png";

const logoStyles = {
  display: "flex",
  alignItems: "center",
};

const logoImgStyles = {
  height: "3rem", // Adjust size as needed
  width: "auto",
  padding: "0.5rem",
};

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Link to="/" style={logoStyles}>
          <Avatar src={logo} alt="Panda Code Logo" style={logoImgStyles} />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Panda Code
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/boda-civil">
          Nuestra boda civil
        </Button>
        <Button color="inherit" component={Link} to="/te-amo-3-millones">
          Te amo 3 millones
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
