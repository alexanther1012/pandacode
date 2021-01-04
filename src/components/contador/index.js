import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Contador = (props) => {
    const fechaInicio1  = moment('2017-02-04');
    const fechaInicio2 = moment('2017-07-04');
    const [calculos1, setCalculos1] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });
    const [calculos2, setCalculos2] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    const getClock = () => {
        let enddate = moment();

        setCalculos1({
            dias: getDays(fechaInicio1, enddate),
            horas: moment().hour(),
            minutos: moment().minute(),
            segundos: moment().second()
        });

        setCalculos2({
            dias: getDays(fechaInicio2, enddate),
            horas: moment().hour(),
            minutos: moment().minute(),
            segundos: moment().second()
        })
    }

    const getDays = (startdate, enddate) => enddate.diff(startdate,"days");

    useEffect(() => {
        const timer = setInterval(
            () => getClock(),
            1000
        );

        return () => {
            clearInterval(timer)
        }
    });
    return(
        <div>
            {
                props.tipo === 1 ? 
                <p>
                    {calculos1.dias + " Dias " + calculos1.horas + " horas " + calculos1.minutos + " minutos " + calculos1.segundos + " segundos "}
                </p> : 
                <p>
                    {calculos2.dias + " Dias " + calculos2.horas + " horas " + calculos2.minutos + " minutos " + calculos2.segundos + " segundos "}
                </p>
            }
        </div>
    )
}

export default Contador;