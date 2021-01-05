import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "../../img/panda.png";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-xl navbar-togglable fixed-top navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" /> {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
