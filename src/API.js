const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const API_KEY = '&APPID=8b5002fb81de9e5f220897fe5cbf9b38';

const getJSON = (...args) => fetch(...args).then(r => r.json());

export const getWeather = (lat, log) => getJSON(`${API_URL}?lat=${lat}&lon=${log}&units=metric&lang=ru${API_KEY}`);

