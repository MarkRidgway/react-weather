const apiKey = 'f2f10ab66f124744f54d1a4241faa498';

// Fetch Current Weather by lat/long
export function fetchWeather(latitude = '40.776586', longitude = '-111.9905245'){
  var location = { latitude, longitude };
  var url = 'https://us-central1-react-weather-1534190420132.cloudfunctions.net/weather/current/';

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
  var location = { latitude, longitude };
  var url = 'https://us-central1-react-weather-1534190420132.cloudfunctions.net/weather/forecast/';

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
