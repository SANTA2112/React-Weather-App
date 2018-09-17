const API_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '&APPID=8b5002fb81de9e5f220897fe5cbf9b38';


const getJSON = (...args) => fetch(...args).then(r => r.json());

export const getWeather = (type, city, lat, log) => {
  return city !== null
    ? getJSON(`${API_URL}${type}?q=${city.toLowerCase()}&units=metric&lang=ru${API_KEY}`)
    : getJSON(`${API_URL}${type}?lat=${lat}&lon=${log}&units=metric&lang=ru${API_KEY}`);
}

export const forecastWeather = (lat, lon) => getJSON(`https://cors-anywhere.herokuapp.com/https://api.weather.yandex.ru/v1/forecast?lat=${lat}&lon=${lon}&hours=false&limit=4&extra=false&lang=ru_RU`, {
  headers: {
    "X-Yandex-API-Key": "978457a4-f5ee-4173-8f47-3096615d5e4c"
  }
})
