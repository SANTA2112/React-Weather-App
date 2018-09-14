import React, { Component } from 'react';
import MainBlock from '../MainBlock/';
import { Wrapper } from "./styled";
import default_weather_img from '../_assets/images/default_weather_img.jpg';

class Weather extends Component {
  state = {
    image: default_weather_img,
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
