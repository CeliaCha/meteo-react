import React from 'react'
import axios from 'axios'
import Autocomplete from 'react-google-autocomplete'

class SearchInput extends React.Component {
    constructor () {
        super()
        this.state = {
            city: '',
            latitude: 0,
            longitude: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        let lat = this.state.latitude
        let long = this.state.longitude
        const apiKey = 'c5cc43085e2bcc1f4f0dda3c8df25267'
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&mode=json&lang=fr&APPID=${apiKey}`
        axios.get(openWeatherUrl)
            .then(res => {
                console.log(res.data)
                this.props.sendResults(this.state.city, res.data)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Autocomplete
                    style={{ width: '90%' }}
                    onPlaceSelected={(place) => {
                        console.log(place)
                        this.setState({
                            city: place.name,
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng(),
                        })
                        this.handleSubmit()
                    }}
                    types={['(regions)']}
                />
            </form>
        );
    }
}

export default SearchInput;