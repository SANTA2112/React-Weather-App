import defaultImg from './_assets/images/default_weather_img.jpg';
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

export const weatherIconType = [
  {type: 'default', src: defaultImg},
  {type: '01d', src: sun},
  {type: '01n', src: night},
  {type: '02d', src: someClounds},
  {type: '02n', src: someCloundsNight},
  {type: '03d', src: scatteredClouds},
  {type: '03n', src: scatteredCloudsNight},
  {type: '04d', src: overcast},
  {type: '04n', src: overcastNight},
  {type: '09d', src: showerRain},
  {type: '09n', src: showerRainNight},
  {type: '10d', src: rain},
  {type: '10n', src: nightRain},
  {type: '11d', src: thunderstorm},
  {type: '11n', src: nightThunderstorm},
  {type: '13d', src: snow},
  {type: '13n', src: nightSnow},
  {type: '50d', src: mist},
  {type: '50n', src: nightMist},
];

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
