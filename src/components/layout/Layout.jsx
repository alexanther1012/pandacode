import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

const Layout = () => {
  return (
    <Fragment>
      <Toolbar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
