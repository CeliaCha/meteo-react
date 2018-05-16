import React from 'react'
import Day from './Day'
import Meteo from '../utils/Meteo'

class CityData extends React.Component {

    constructor() {
        super()
        this.state = {
            days: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
        }
        
    }
    renderDay(dayNumber) {
        return (
            <Day
                iconNumber = {Meteo.getFiveDays(this.props.datas.list, dayNumber)}
                whichDay = {dayNumber}
            />
        )
    }
    render() {
        return (
            <div>
            <h3>En ce moment à {this.props.datas.city.name} : {this.props.datas.list[0].weather[0].description}</h3>
            <div className="board-row">
                {this.renderDay(0)}
                {this.renderDay(1)}
                {this.renderDay(2)}
                {this.renderDay(3)}
                {this.renderDay(4)}
            </div>
            </div>
        );
    }
}

export default CityData;
