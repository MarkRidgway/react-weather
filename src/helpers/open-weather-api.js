const apiKey = 'f5ecfb6c0846d87aba814ec541aadc7e';

// Fetch Current Weather by Zip
export function fetchWeather(zip = '84047'){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=${apiKey}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

// 16 day Forecast by Zip
export function forecast(zip = '84047'){
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=${apiKey}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}
