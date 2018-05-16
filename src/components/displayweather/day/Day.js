import React from 'react'

class Day extends React.Component {
      /**
     * @props : 
     * iconNumber = {DisplayWeather.props.datas.list[dayNumber*8].weather[0].icon}
     * whichDay = dayNumber
     */


  constructor() {
    super()
    this.state = {
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    }
  }

  renderDay () {
    let theDay = new Date(Date.now()).getDay() + this.props.whichDay - 1
    if (this.props.whichDay + 3 === new Date(Date.now()).getDay()) return <p>Aujourd'hui : </p>
    else return <p>{this.state.days[theDay]} : </p>
  }

  render() {
    let icon = `http://openweathermap.org/img/w/${this.props.iconNumber}.png`
    
    return (
      <div>
        {this.renderDay()}
        <img src={icon} alt='Icone météo' height="80" />
      </div>
    )
  }
}

export default Day;

