const apiKey = 'f5ecfb6c0846d87aba814ec541aadc7e';

// ZIP
// https://api.openweathermap.org/data/2.5/weather?zip=84047,us&APPID=${apiKey}
export function fetchWeather(zip = '84047'){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=${apiKey}`)
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
}
