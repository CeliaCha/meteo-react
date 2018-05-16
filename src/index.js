import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Meteo from './components/Meteo'

class Headline extends React.Component {
  render() {
    return (
      <h1>
        REACT METEO
        </h1>
    );
  }
}


class Footer extends React.Component {
  render() {
    return (
      <p>@Todo : Footer</p>
    )
  }
}

class AppMeteo extends React.Component {
  render() {
    return (
      <div>
        <Headline />
        <Meteo />
        {/* <Footer /> */}
      </div>

    );
  }
}

ReactDOM.render(
  <AppMeteo />,
  document.getElementById('root')
)
