import React from 'react'

class Day extends React.Component {
      /**
     * @props : 
     * today = {today}
     * day = {day} (number 0 to 4)
     * datas = DisplayWeather.datas
     */

  constructor() {
    super()
    this.state = {
      days: ['dimanche','lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    }
  }

  renderDayName () {
    let dayNumber
    this.props.today + this.props.day < 7 ? dayNumber = this.props.today + this.props.day : dayNumber = this.props.today + this.props.day - 7
    if (this.props.day === 0) return <span>Aujourd'hui</span>
    else return <span>{this.state.days[dayNumber]}</span>
  }
  renderTemp() {
    return <span>{this.props.datas.list[this.props.day*8].main.temp} C°</span>
  }
  renderIcon() {
    let iconNumber = this.props.datas.list[this.props.day*8].weather[0].icon
    let icon = `http://openweathermap.org/img/w/${iconNumber}.png`
    return <img src={icon} alt='Icone météo' height="80" />
  }
  render() {
    return (
      <div>
       <p>{this.renderDayName()} : {this.renderTemp()}</p>
        {this.renderIcon()}
      </div>
    )
  }
}

export default Day;

