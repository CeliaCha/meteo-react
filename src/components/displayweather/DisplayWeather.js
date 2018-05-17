import React from 'react'
import Day from './day/Day'

/**
 * @props : 
 * datas = {Meteo.state.cityData}
 */
class DisplayWeather extends React.Component {
    renderTodayLine() {
        return (
            <h3>En ce moment à {this.props.city} : {this.props.datas.list[0].weather[0].description}, {this.props.datas.list[0].main.temp} C°</h3>
        )
    }
    renderDay(day) {
        return (
            <Day
                datas = {this.props.datas}
                today = {new Date(Date.now()).getDay()}
                day = {day}
            />
        )
    }
    render() {
        return (
            <div>
            {this.renderTodayLine()}
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
