import React, { Component } from "react";
import WeatherDayDisplay from "./WeatherDayDisplay";

class WeatherDisplay extends Component {
    render() {
        if (this.props.forecast !== '') {
            var forecastDays = this.props.forecast.consolidated_weather.map((day, index) =>
                <WeatherDayDisplay key={day.applicable_date} day={day} daysFromNow={index}/> );
        }
        return (
            <div>
            {this.props.isBadQuery ? <b> No results returned for that query :(</b> : null}
            {this.props.forecast === '' || this.props.isBadQuery ?
                null :
                <div className="weatherDaysContainer">
                    {forecastDays}
                </div> }
            </div>
            );
    }
}

export default WeatherDisplay;