import React, { Component } from 'react';
import MainBlock from '../MainBlock/';
import { getWeather, kek } from "../API";
import { Wrapper } from "./styled";
import default_weather_img from '../_assets/images/default_weather_img.jpg';

class Weather extends Component {
  state = {
    image: default_weather_img,
    city: '',
  }

  componentDidMount() {
    this.getUserCoords();
  }

  getUserCoords() {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      getWeather(coords.latitude, coords.longitude);
    });
  }

  render() {
    const { image } = this.state;

    return (
      <Wrapper>
        <MainBlock image={image}/>
      </Wrapper>

    );
  }
}

export default Weather;
