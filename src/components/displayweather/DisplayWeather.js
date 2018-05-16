import React from 'react'
import Day from './day/Day'

class DisplayWeather extends React.Component {
    /**
     * @props : 
     * datas = {Meteo.state.cityData}
     */

    renderDay(dayNumber) {
        return (
            <Day
                iconNumber = {this.props.datas.list[dayNumber*8].weather[0].icon}
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

export default DisplayWeather;
