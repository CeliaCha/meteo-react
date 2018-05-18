import React from 'react'
import axios from 'axios'
import Weather from './weather/Weather'
import Search from './search/Search'
import Autocomplete from 'react-google-autocomplete'


export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            city: '',
            cityData: {},

        }
        this.handleResults = this.handleResults.bind(this);
    }
    handleResults(city, results) {
        this.setState({
            city: city,
            cityData: results,
        })
    }
    render() {
        return (
            <div>
                <Search
                    sendResults={this.handleResults}
                />
                {this.state.cityData.list &&
                    <Weather
                        datas={this.state.cityData}
                        city={this.state.city}
                    />
                }
            </div>
        )
    }
}