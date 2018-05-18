import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

class Headline extends React.Component {
  render() {
    return (
      <h1>
        REACT METEO
        </h1>
    );
  }
}

// eslint-disable-next-line
class Footer extends React.Component {
  render() {
    return (
      <p>@Todo : Footer</p>
    )
  }
}

class Meteo extends React.Component {
  render() {
    return (
      <div>
        <Headline />
        <App />
        {/* <Footer /> */}
      </div>

    );
  }
}

ReactDOM.render(
  <Meteo />,
  document.getElementById('root')
)
