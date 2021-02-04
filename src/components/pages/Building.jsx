import React, { Fragment } from "react";
import logo from "../../img/panda.png";
// import mundo from "../../img/mundo.png";
// import tresmilloness from "../../img/3millones.jpg";
// import todotodo from "../../img/todotodo.jpg";

import Contador from "../contador";

const Building = () => {
  const fields = [];

  for (let i = 0; i <= 25; i++) {
    fields.push(<p>mucho mucho mucho mucho mucho mucho mucho</p>);
  }
  return (
    <Fragment>
      <div className="App-header">
        {/* <h1 className="display-4 mb-2">En construccion...</h1> */}
        <img src={logo} className="App-logo App-logo-large" alt="logo" />
      </div>
      <div className="App-intro">
        <h1>Momentos desde que te conoc&iacute;</h1>
        <h1>
          <Contador type={"moments"} startDate={"2017-02-04"} />
        </h1>
        <br />
        <h1>Momentos desde que todos supieron de nosotros</h1>
        <h1>
          <Contador type={"moments"} startDate={"2017-07-04"} />
        </h1>
      </div>
    </Fragment>
  );
};

export default Building;
