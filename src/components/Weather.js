import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import axios from 'axios'

class Weather extends Component {
    static propTypes = {
        cityName: PropTypes.string.isRequired
    };

    constructor () {
        super();

        this.state = {
            location : '',
            temp : '',
            description : '',
            icon : '',
            speed : ''
        };

        this.extractWeatherData = this.extractWeatherData.bind(this);
    }

    componentDidMount() {
        this.getCityWeather(this.props.cityName);
    }

    render() {
        return (
            <Card id="weather">
                <div>
                    <img id="wicon" width="100" height="100" src={this.state.icon} alt="Weather icon"/>
                </div>

                <div id="weatherStats">
                    <p>{this.state.location}</p>
                    <p >{this.state.temp}</p>
                    <p >{this.state.description}</p>
                    <p >{this.state.speed}</p>
                </div>
            </Card>
        );

    }

    getCityWeather (city) {
        axios.get('https://nodejs-assignment-manara.herokuapp.com/weather/' + city)
            .then(response => {

                this.extractWeatherData(response.data);

            });
    }

    extractWeatherData (data) {
        this.setState({temp : data.main.temp + ' °C'});

        var weather = data.weather[0];
        this.setState({description : weather.description});
        this.setState({icon : "http://openweathermap.org/img/w/" + weather.icon + ".png"});

        this.setState({speed : data.wind.speed + ' m/s'});
        this.setState({location : data.name + ' - ' + data.sys.country});
    }
}

export default Weather;