import React from 'react'
import axios from 'axios'
import DisplayWeather from './displayweather/DisplayWeather'
import Autocomplete from 'react-google-autocomplete';


export default class Meteo extends React.Component {
    constructor() {
        super()
        this.state = {
            city: '',
            latitude : 0,
            longitude : 0,
            cityData: {},
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    
    //     this.setState({ city: event.target.value })
    // }
    handleSubmit(event) {
        let lat = this.state.latitude
        let long = this.state.longitude
        console.log(lat)
        const apiKey = 'c5cc43085e2bcc1f4f0dda3c8df25267'
        // const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&mode=json&lang=fr&APPID=${apiKey}`
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&mode=json&lang=fr&APPID=${apiKey}`
        axios.get(openWeatherUrl)
            .then(res => {
                console.log(res.data)
                this.setState({ cityData: res.data })
            })
        //event.preventDefault();
    }
    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label>
                    <input type="text" value={this.state.city} onChange={this.handleChange} />
                </label> */}
                <Autocomplete
                    style={{ width: '90%' }}
                    onPlaceSelected={(place) => {
                        console.log(place)
                        this.setState({ 
                            city: place.name,
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng()
                        })
                        this.handleSubmit()
                    }}
                    types={['(regions)']}
                />
                {/* <input type="submit" value="Valider" /> */}
            </form>
        )
    }

    renderTest() {
        return (
            <Autocomplete
                style={{ width: '90%' }}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                types={['(regions)']}
                componentRestrictions={{}}
            />
        )

    }
    renderForecast(cityData) {
        if (this.state.cityData.list) {
            return <DisplayWeather
                datas={this.state.cityData}
                city={this.state.city}
            />
        }
    }
    render() {
        return (
            <div>

                {this.renderForm()}
                {this.renderForecast()}
            </div>
        )
    }
}