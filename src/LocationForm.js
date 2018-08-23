import React, { Component } from "react";

class LocationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {city: ''};
        this.submitRequest = this.submitRequest.bind(this);
        this.updateCity = this.updateCity.bind(this);
    }

    submitRequest(e) {
        e.preventDefault();
        this.props.submitCity(this.state.city);
    }

    updateCity(e) {
        this.setState({city: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitRequest}>
                    <label>
                         Enter a city to retrieve the forecast! 
                    </label>
                    <input type="text" value={this.city} onChange={this.updateCity}/>
                    <input type="submit" value="Go!" className="btn"/>
                </form>
            </div>
            );
    }
}

export default LocationForm;