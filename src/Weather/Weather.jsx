import React, { Component } from 'react';
import MainBlock from '../MainBlock/';
import SearchBar from '../SearchBar/';
import { getWeather, forecastWeather } from "../API";
import { weatherIconType, getCurrentCoordnates } from "../constants";
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
    searchQueryes: [],
    lat: null,
    lng: null
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => getCurrentCoordnates().then(({ latitude, longitude }) => this.doRequest(latitude, longitude));

  searchWeather = () => this.doRequest(this.state.lat, this.state.lng);


  takeWeatherIcon = (image) => weatherIconType.filter(el => el.type === image)[0].src;

  takeQuery = (value) => {
    if (this.state.searchQueryes.includes(value))
      this.setState(p => ({ searchQueryes: p.searchQueryes.filter(el => el != value) }));

    else this.setState(p => ({ searchQueryes: [...p.searchQueryes, value] }));
  }

  getCoords = (city) => fetch(`https://maps.google.com/maps/api/geocode/json?address=${city}`).then(r => r.json()).then(({ results }) => {
    if (results.length === 0) return null;
    const { location: { lat, lng } } = results[0].geometry;
    this.setState({ lat, lng }, this.searchWeather);
  });

  doRequest(lat, lng) {
    const { city } = this.state;
    getWeather('weather', city, lat, lng).then(weather => this.setState({ weather, image: this.takeWeatherIcon(weather.weather[0].icon) }));
    forecastWeather(lat, lat).then(weatherOnWeek => this.setState({ weatherOnWeek }));
  }

  render() {
    const { image, weather, weatherOnWeek } = this.state;
    return (
      <Wrapper>
        {weather !== null ? <MainBlock image={image} weather={weather} weatherOnWeek={weatherOnWeek}/> : <div>Не удалось загрузить данные с сервера</div>}
        <SearchBar takeQuery={this.takeQuery} getCoords={this.getCoords}/>
      </Wrapper>
    );
  }
}

export default Weather;
