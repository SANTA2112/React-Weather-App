import sun from './_assets/images/01d.jpg';
import night from './_assets/images/01n.jpeg';
import someClounds from './_assets/images/02d.jpeg';
import someCloundsNight from './_assets/images/02n.jpg';
import scatteredClouds from './_assets/images/03d.jpg';
import scatteredCloudsNight from './_assets/images/03n.jpg';
import overcast from './_assets/images/04d.jpeg';
import overcastNight from './_assets/images/04n.jpg';
import showerRain from './_assets/images/09d.jpg';
import showerRainNight from './_assets/images/09n.jpg';
import rain from './_assets/images/10d.jpg';
import nightRain from './_assets/images/10n.jpeg';
import thunderstorm from './_assets/images/11d.jpg';
import nightThunderstorm from './_assets/images/11n.jpg';
import snow from './_assets/images/13d.jpg';
import nightSnow from './_assets/images/13n.jpg';
import mist from './_assets/images/50d.jpg';
import nightMist from './_assets/images/50n.jpg';

export const takeWeatherIcon = (icon) => {
  const weatherIconType = {
    '01d': sun,
    '01n': night,
    '02d': someClounds,
    '02n': someCloundsNight,
    '03d': scatteredClouds,
    '03n': scatteredCloudsNight,
    '04d': overcast,
    '04n': overcastNight,
    '09d': showerRain,
    '09n': showerRainNight,
    '10d': rain,
    '10n': nightRain,
    '11d': thunderstorm,
    '11n': nightThunderstorm,
    '13d': snow,
    '13n': nightSnow,
    '50d': mist,
    '50n': nightMist
  }
  return weatherIconType[icon];
};

export const convertDate = (stringDate) => {
  const date = new Date(stringDate);
  const day = date.getDay();
  const dayOfWeek = {
    0: 'Вс',
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
  };

  return `${dayOfWeek[day]} ${date.toLocaleDateString().slice(0, -5)}`;
}

export const getCurrentCoordnates = () => new Promise(r => window.navigator.geolocation.getCurrentPosition(({ coords }) => r(coords)));
