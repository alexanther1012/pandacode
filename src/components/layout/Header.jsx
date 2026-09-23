import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../img/panda.png";

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Link to="/" className="header-logo">
          <Avatar
            src={logo}
            alt="Panda Code Logo"
            className="header-logo__img"
          />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Panda Code
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/flores-amarillas">
          Flores
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

export default Header;
