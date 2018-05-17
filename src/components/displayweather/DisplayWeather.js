import React from 'react'
import Day from './day/Day'

class DisplayWeather extends React.Component {
    /**
     * @props : 
     * datas = {Meteo.state.cityData}
     */

    renderDay(today, day) {
        return (
            <Day
                //iconNumber = {this.props.datas.list[dayNumber*8].weather[0].icon}
                datas = {this.props.datas}
                today = {today}
                day = {day}
            />
        )
    }
    render() {
        let today = new Date(Date.now()).getDay()
        console.log(today)
        return (
            <div>
            <h3>En ce moment à {this.props.datas.city.name} : {this.props.datas.list[0].weather[0].description}</h3>
            <div className="board-row">
                {this.renderDay(today, 0)}
                {this.renderDay(today, 1)}
                {this.renderDay(today, 2)}
                {this.renderDay(today, 3)}
                {this.renderDay(today, 4)}
            </div>
            </div>
        );
    }
}

export default DisplayWeather;
