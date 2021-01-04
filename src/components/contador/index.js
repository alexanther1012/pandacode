import React, { Component } from 'react';
import moment from 'moment';

const newDate = new Date();

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            fechaInicio1: moment('2017-02-04'),
            fechaInicio2: moment('2017-07-04'),
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
            initial: this.getDateTime(moment())
        })
    }

    componentWillMount(){
        clearInterval(this.timer);
    }

    getClock(){
        let enddate = moment();

        this.setState({
            calculos1: {
                dias: this.getDays(this.state.fechaInicio1, enddate),
                horas: moment().hour(),
                minutos: moment().minute(),
                segundos: moment().second()
            },
            calculos2: {
                dias: this.getDays(this.state.fechaInicio2, enddate),
                horas: moment().hour(),
                minutos: moment().minute(),
                segundos: moment().second()
            }
        })
    }

    getDays = (startdate, enddate) => enddate.diff(startdate,"days");

    getDateTime = (date) => moment(date).date() + "/" +  moment(date).month() + "/" +  moment(date).year() + " " +  moment(date).hour() + ":" +  moment(date).minute();

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