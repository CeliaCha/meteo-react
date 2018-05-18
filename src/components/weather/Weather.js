import React from 'react'
import Day from './day/Day'

/**
 * @props : 
 * datas = {Meteo.state.cityData}
 */
class Weather extends React.Component {
    renderTodayLine() {
        return (
            <h3>En ce moment à {this.props.city} : {this.props.datas.list[0].weather[0].description}, {this.props.datas.list[0].main.temp} C°</h3>
        )
    }
    renderDays() {
        let numbers = [0,1,2,3,4]
        const listDays = numbers.map((number) =>
            <Day
                key={number.toString()}
                datas={this.props.datas}
                today={new Date(Date.now()).getDay()}
                day={number}
            />
            )
        return listDays     
    }
    render() {
        return (
            <div>
                {this.renderTodayLine()}
                <div className="board-row">
                    {this.renderDays()}
                </div>
            </div>
        );
    }
}

export default Weather;
