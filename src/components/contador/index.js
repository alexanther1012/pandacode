import React, { Component } from 'react';

const newDate = new Date();

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            fechaInicio1: new Date(2017, 2, 4),
            fechaInicio2: new Date(2017, 7, 4),
            initial: "",
            calculos1: {
                dias: 0,
                horas: 0,
                minutos: 0,
                segundos: 0
            },
            calculos2: {
                dias: 0,
                horas: 0,
                minutos: 0,
                segundos: 0
            }
        }
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.getClock(),
            1000
        );
        
        this.setState({
            initial: this.getDateTime(newDate)
        })
    }

    componentWillMount(){
        clearInterval(this.timer);
    }

    getClock(){
        let enddate = this.getDateTime(new Date(
            newDate.getFullYear(),
            newDate.getMonth() + 1,
            newDate.getDate(),
            newDate.getHours(),
            newDate.getMinutes()
        ));

        this.setState({
            calculos1: {
                dias: this.getDays(this.state.fechaInicio1, enddate),
                horas: newDate.getHours(),
                minutos: newDate.getMinutes(),
                segundos: newDate.getSeconds()
            },
            calculos2: {
                dias: this.getDays(this.state.fechaInicio2, enddate),
                horas: newDate.getHours(),
                minutos: newDate.getMinutes(),
                segundos: newDate.getSeconds()
            }
        })
    }

    getDays(date1, date2){
        let startdate = Date.parse(date1);
        let enddate = Date.parse(date2);

        let timediff = Math.floor(enddate - startdate);

        return Math.floor(timediff / (1000 * 60 * 60 * 24))
    }

    getDateTime(date){
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let minute = date.getMinutes();
        let hour = date.getHours();

        return day + "/" + month + "/" + year + " " + hour + ":" + minute;
    }

    render(){
        return(
            <div>
                {
                    this.props.tipo === 1 ? 
                    <p>
                        {this.state.calculos1.dias + " Dias " + this.state.calculos1.horas + " horas " + this.state.calculos1.minutos + " minutos " + this.state.calculos1.segundos + " segundos "}
                    </p> : 
                    <p>
                        {this.state.calculos2.dias + " Dias " + this.state.calculos2.horas + " horas " + this.state.calculos2.minutos + " minutos " + this.state.calculos2.segundos + " segundos "}
                    </p>
                }
            </div>
        )
    }
}

export default Contador;