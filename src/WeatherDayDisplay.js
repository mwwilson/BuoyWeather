import React, { Component } from "react";

class WeatherDayDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {icon: ''};
    }

    render() {
        var weather = this.props.day;
        var isCurrentDayDisplay = this.props.daysFromNow === 0;
        var className = isCurrentDayDisplay ? "weatherDayContainer current" : "weatherDayContainer";
        var svgUrl = 'https://www.metaweather.com/static/img/weather/' + weather.weather_state_abbr + '.svg'
        return (
            <div className={className}>
                <div><b>{weather.applicable_date}</b></div>
                <object id="svg-object" data={svgUrl} type="image/svg+xml" className="svgImg">No SVG :(</object>
                {isCurrentDayDisplay ? <div><b>Current:</b> {Math.round(weather.the_temp)}°</div> : null}
                <div><b>High/Low:</b> {Math.round(weather.max_temp)}°/{Math.round(weather.min_temp)}°</div>
                <div><b>Wind:</b> {Math.round(weather.wind_speed)}mph {weather.wind_direction_compass}</div>
                <div><b>Air Pressure:</b> {Math.round(weather.air_pressure)}mbar</div>
                <div><b>Humidity:</b> {weather.humidity}%</div>
                <div><b>Visibility:</b> {Math.round(weather.visibility)}mi</div>
            </div>
            );
    }
}

export default WeatherDayDisplay;