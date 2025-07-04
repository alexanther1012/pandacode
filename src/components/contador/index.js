import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Contador = ({ startDate, type }) => {
  const startMoment = moment(startDate);
  const [count, setCount] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = moment();
      const totalSeconds = now.diff(startMoment, "seconds");

      const temp = startMoment.clone();

      const years = now.diff(temp, "years");
      temp.add(years, "years");

      const months = now.diff(temp, "months");
      temp.add(months, "months");

      const days = now.diff(temp, "days");
      temp.add(days, "days");

      const hours = now.diff(temp, "hours");
      temp.add(hours, "hours");

      const minutes = now.diff(temp, "minutes");
      temp.add(minutes, "minutes");

      const seconds = now.diff(temp, "seconds");

      setCount({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalSeconds,
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [startMoment]);

  if (type === "moments") {
    return <span>{count.totalSeconds.toLocaleString()} momentos</span>;
  }

  if (type === "years") {
    return (
      <Fragment>
        {count.years > 0 && <span>{count.years} años </span>}
        {count.months > 0 && <span>{count.months} meses </span>}
        {count.days > 0 && <span>{count.days} días </span>}
        {count.hours > 0 && <span>{count.hours} horas </span>}
        {count.minutes > 0 && <span>{count.minutes} minutos </span>}
        {count.seconds > 0 && <span>{count.seconds} segundos</span>}
      </Fragment>
    );
  }

  if (type === "complete") {
    const totalDays = moment().diff(startMoment, "days");
    return (
      <Fragment>
        {totalDays > 0 && <span>{totalDays} días </span>}
        {count.hours > 0 && <span>{count.hours} horas </span>}
        {count.minutes > 0 && <span>{count.minutes} minutos </span>}
        {count.seconds > 0 && <span>{count.seconds} segundos</span>}
      </Fragment>
    );
  }

  return <span>Loading...</span>;
};

Contador.propTypes = {
  type: PropTypes.string.isRequired,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
};

export default Contador;
