import React, { Component } from "react";
import LocationForm from "./LocationForm"
import WeatherDisplay from "./WeatherDisplay"
require('./style.css')

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {city: '', locationInformation: '', responseData: '', responseForecast: '', isBadQuery: false};
      this.submitCity = this.submitCity.bind(this);
      this.makeApiRequestForLocation = this.makeApiRequestForLocation.bind(this);
      this.makeApiRequestForForecast = this.makeApiRequestForForecast.bind(this);
  }

  submitCity(city) {
    this.setState({city: city}, this.makeApiRequestForLocation);
  }

  makeApiRequestForLocation() {
    if (this.state.city === '') return;
    fetch('https://www.metaweather.com/api/location/search/?query=' + this.state.city)
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({responseData: data}, () => this.makeApiRequestForForecast());
    });
  }

  makeApiRequestForForecast() {
    var resultJSON = this.state.responseData;
    if (resultJSON.length === 0) {
      this.setState({isBadQuery: true});
      return;
    }
    this.setState({isBadQuery: false});
    var resultWoeid = resultJSON[0].woeid;
    fetch('https://www.metaweather.com/api/location/' + resultWoeid)
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({locationInformation: data});
    });
  }

  render() {
    return (
        <div>
          <h1 className="title">Simple Weather App</h1>
          <div className="content">
            <LocationForm className="form"
              city={this.state.city}
              submitCity={this.submitCity}
            />
            <br/>
            <WeatherDisplay forecast={this.state.locationInformation} isBadQuery={this.state.isBadQuery}/>
          </div>
        </div>
    );
  }
}
 
export default Main;