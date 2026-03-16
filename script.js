// STEP 1
// set up/fetch weather and location APIs
// https://open-meteo.com/
//
//start with Docs (website block)
// get the API's url from the website, copy and paste
//
// ex:
// https://api.open-meteo.com/v1/forecast?
// latitude=52.52&
// longitude=13.41&
// daily=weather_code,temperature_2m_max,temperature_2m_min
// &hourly=temperature_2m,weather_code
// &current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation

// on API WEBSITE click on: API URL (Open in new tab or copy this URL into
//  your application)
// info
// currently to get the API (of a city, so on a search bar you look for a city's
//  weather)
// you currently need "latitude" and "longitude"
//
//
// HW!
// thus we need another API
// In our search bar, we type in an address/city, and the api will auto get the
// address/city's "latitude" and "longitude"
//!g site:reddit.com/r/webdev .......[ask your question]...

//!g site:reddit.com/r/webdev geolocation for latitude and longitude from address

// I found  "Nominatim search"
// now fine the API
//   https://nominatim.openstreetmap.org/search?

// search: mdn javascript get api
//MDN stands for Mozilla Developer Network, which is a comprehensive resource for web development documentation covering technologies like HTML, CSS, and JavaScript. It provides guides, tutorials, and references for developers of all skill
// now you get a template:

//async function getData() {
//   const url = "https://example.org/products.json";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// use template literals/ Embedded Expressions,  by backtick (`), ${}
//now we have the long and lat

//next get the Weather API
//template literals/ Embedded Expressions,  by backtick (`), ${}

//connect getGeoData() and getWeatherData()






// hw
// step 2
// figure out celsius to fahrenheit
// website: https://api.open-meteo.com/v1/forecast?
// bf celsius, now change everyting to fahrenheit, m/s, and inches 
// API URL (Open in new tab )
// add "&wind_speed_unit=ms&temperature_unit=fahrenheit&precipitation_unit=inch"
// ... to the end of the url

//templature_unites: fahrenheit or celsius
//wind_speed_units = mph or kmh
//percipitation_units = inch or mm

// set the default units as celsius 
// querySelector the id = ddlUnits, from the html


// if (ddlUnits.value === "F") {}
//template literals/ Embedded Expressions,  by backtick (`), ${}
// check console: ddlUnits.value 




const ddlUnits = document.querySelector("#ddlUnits");




async function getGeoData() {
    let search = "los angeles, ca"


  const url = 
  `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    
    let lat = result[0].lat;
    let lon = result[0].lon;
    getWeatherData(lat, lon);
  } catch (error) {
    console.error(error.message);
  }
}

getGeoData();



async function getWeatherData(lat, lon) {

//templature_unites: fahrenheit or celsius
//wind_speed_units = mph or kmh
//percipitation_units = inch or mm
//refresh

// id = "ddlUnits"  => drop down list units 

  let tempUnit = "celsius";
  let windUnit = "kmh";
  let precipUnit = "mm";

  // if toggle value =  F

  if (ddlUnits.value === "F") {
    tempUnit = "fahrenheit";
    windUnit = "mph";
    precipUnit = "inch";
  }


  const url = 
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

