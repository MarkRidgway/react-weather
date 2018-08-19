import { currentWeather, forecast  } from './demo-data';
const useDemoData = process.env.REACT_APP_DEMO;
const apiUrl = process.env.REACT_APP_WEATHER_API;

// Fetch Current Weather by lat/long
export function fetchWeather(latitude = '40.776586', longitude = '-111.9905245'){
  if(useDemoData){
    return currentWeather();
  }

  var location = { latitude, longitude };
  var url = `${apiUrl}current/`;

  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(location)
  })
    .then(response => response.json());
}

// Fetch weeks forecast by lat/long
export function fetchForecast(latitude = '40.776586', longitude = '-111.9905245'){
  if(useDemoData){
    return forecast();
  }

  var location = { latitude, longitude };
  var url = `${apiUrl}forecast/`;

  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(location)
  })
    .then(response => response.json());
}
