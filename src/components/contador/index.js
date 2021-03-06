import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Contador = (props) => {
  const { startDate, type } = props;
  const startDateFormated = moment(startDate);
  const [count, setCount] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
    moments: 0,
  });

  const getClock = () => {
    let enddate = moment();

    setCount({
      moments: getDiff(startDateFormated, enddate, "seconds"),
      dias: getDiff(startDateFormated, enddate, "days"),
      horas: moment().hour(),
      minutos: moment().minute(),
      segundos: moment().second(),
    });
  };

  const getDiff = (start, end, format) => end.diff(start, format);

  const getType = (type) => {
    switch (type) {
      case "complete":
        return (
          <p>
            {count.dias +
              " Dias " +
              count.horas +
              " horas " +
              count.minutos +
              " minutos " +
              count.segundos +
              " segundos "}
          </p>
        );
      case "moments":
        return (
          <p className="">{count.moments.toLocaleString() + " momentos"}</p>
        );
    }
  };

  useEffect(() => {
    const timer = setInterval(() => getClock(), 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return <div>{getType(type)}</div>;
};

Contador.propTypes = {
  type: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
};

export default Contador;
