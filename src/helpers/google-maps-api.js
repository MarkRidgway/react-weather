const apikey = '';

// Fetch location information by zip
export function fetchLocation(zip){
  console.log(`fetching ${zip}`);
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${apikey}`)
    .then(response => response.json());
}
