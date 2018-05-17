import React from 'react'
import axios from 'axios'
import DisplayWeather from './displayweather/DisplayWeather'

export default class Meteo extends React.Component {
    constructor() {
      super()
      this.state = {
        city: '',
        cityData: {},
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        city: event.target.value
      })
    }
   
    handleSubmit(event) {
      let city = this.state.city
      const apiKey = 'c5cc43085e2bcc1f4f0dda3c8df25267'
      const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},fr&mode=json&&lang=fr&APPID=${apiKey}`
      axios.get(openWeatherUrl)
        .then(res => {
          this.setState({ cityData : res.data })
          console.log(this.state.cityData)
        })
      event.preventDefault();
    }
  
    renderData (cityData) {
      if (this.state.cityData.list) {
        return <DisplayWeather 
          datas = {this.state.cityData}
        />
      }
    }
  
    render() {
      return (
        <div>
  
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.city} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Valider" />
          </form>
          {this.renderData()}
        </div>
      )
    }
  }