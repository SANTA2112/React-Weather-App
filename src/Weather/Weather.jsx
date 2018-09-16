import React, { Component } from 'react';
import MainBlock from '../MainBlock/';
import { getWeather } from "../API";
import { weatherIconType } from "../constants";
import { Wrapper } from "./styled";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.takeWeatherIcon = this.takeWeatherIcon.bind(this);
  }
  state = {
    image: weatherIconType[0].src,
    weather: null,
    weatherOnWeek: null,
    city: null,
  }

  componentDidMount() {
    this.getUserCoords();
  }

  getUserCoords() {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { city } = this.state;
      getWeather('weather', city, coords.latitude, coords.longitude).then(weather => this.setState({ weather, image: this.takeWeatherIcon(weather.weather[0].icon) }));
      getWeather('forecast', city, coords.latitude, coords.longitude).then(weatherOnWeek => this.setState({ weatherOnWeek }));
    });
  }

  takeWeatherIcon = (image) => weatherIconType.filter(el => el.type === image).pop().src;


  render() {
    const { image, weather, weatherOnWeek } = this.state;
    console.log(weatherOnWeek);
    return (
      <Wrapper>
        {weather !== null ? <MainBlock image={image} weather={weather} weatherOnWeek={weatherOnWeek}/> : <div>Не удалось загрузить данные с сервера</div>}
      </Wrapper>
    );
  }
}

export default Weather;
