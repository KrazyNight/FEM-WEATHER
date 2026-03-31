
// STEP 1
// let
//let
// new
// work
// in 
//dynamic
//yes 
//
//i 
//am
//studying
//
//review soon
//yup
//
// REVIEW
//review
// 6hrs 
// hello 
// yes 
// what 
// are 
// i 
// am 
// you 
// who 
// are 
// you 
// no tortella
// no quesadias 
// half of vetagables 
// half month of fruit 









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

// hw 
// just add the country and the city
// you search for it in: nominatim.openstreetmap.org/
// addressdetails=1
// add it to the nominatim url

//this adds the "city" and "country" catagorys in the "console window", now its labeled, before it showd displayName
// create a function that "loadsLocationData" 
// HW do this solo, good pracrice
// Load Current Date as: Thusday, Aug 5, 2025
// 

//Now connect to UI/HTML by adding id= "..." & const dvCityCountry = document.querySelector("#dvCityCounty");

//hw add function to load weather data

// figure out the "weather code" display image function
// function weatherCodeName()

//HW function loadDailyForecast(), working with "daily"
// make all the "daily boxes dynamic": dvForecastDay, daily__day-tittle,d aiy__day-icon, daily__day-high, daily__day-low,
//
// ACCESS console: date, dayOfWeed, dvForecastDay, weaterCodeName, dailyHigh, dailyLow for each day of the week
//
//add elements from daily index.html into script.js, in order to make it dynamic
//
//function addDailyElement(tag, className, content, weatherCodeName, parentElement, position)
//
// ex:     addDailyElement("p", "daily__day-title", dayOfWeek, "", dvForecastDay, "afterbegin");
//
//
//
// 
//
//
//
//










const ddlUnits = document.querySelector("#ddlUnits");

const dvCityCountry = document.querySelector("#dvCityCountry");
const dvCurrDate = document.querySelector("#dvCurrDate");
const dvCurrTemp = document.querySelector("#dvCurrTemp");

const pFeelsLike = document.querySelector("#pFeelsLike");
const pHumidity = document.querySelector("#pHumidity");
const pWind = document.querySelector("#pWind ");
const pPrecipitation =  document.querySelector("#pPrecipitation");















let cityName, countryName;




async function getGeoData() {
    let search = "los angeles, ca "


  const url = 
  `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    
    let lat = result[0].lat;
    let lon = result[0].lon;

    loadLocationData(result);
    getWeatherData(lat, lon);
    //console.log(dvCityCountry);

  } catch (error) {
    console.error(error.message);
  }
}


function loadLocationData(locationData) {
  let location = locationData[0].address;
  let cityName = location.city;
  let countryName = location.country_code.toUpperCase();


  let dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  };

  let currDate = new Intl.DateTimeFormat("en-US", dateOptions).format(new Date());

  
  dvCityCountry.textContent = `${cityName}, ${countryName}`;
  dvCurrDate.textContent = currDate;
  
  console.log(cityName, countryName, currDate)



}



// function loadLocationData(locationData) {
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country_code.toUpperCase();

//   let dateOptions = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     weekday: "long",
//   };

//   let currDate = new Intl.DateTimeFormat("en-US", dateOptions).format(new Date());

//   //console.log(cityName, countryName, date);

//   dvCityCountry.textContent = `${cityName}, ${countryName}`;
//   dvCurrDate.textContent = currDate;
// }

async function getWeatherData(lat, lon) {

//
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
    //console.log(result);
 


    loadWeatherData(result);
    loadDailyForecast(result);
  } catch (error) {
    console.error(error.message);
  }
}


function loadWeatherData(weatherData) {
  console.log(weatherData);

  dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m);
  pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature);
  pHumidity.textContent = weatherData.current.relative_humidity_2m;
  pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`;
  pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`;


  // dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m);
  // pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature);
  // pHumidity.textContent = weatherData.current.relative_humidity_2m;
  // pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`;
  // pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`;
}

function getWeatherCodeName(code) {
  const weatherCodes = {
    0: "sunny",
    1: "partly-cloudy",
    2: "partly-cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    56: "drizzle",
    57: "drizzle",
    61: "rain",
    63: "rain",
    65: "rain",
    66: "rain",
    67: "rain",
    80: "rain",
    81: "rain",
    82: "rain",
    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    85: "snow",
    86: "snow",
    95: "storm",
    96: "storm",
    99: "storm",
  };

  return weatherCodes[code];
}

function loadDailyForecast(weatherData) {
  let daily = weatherData.daily;

   for (let i = 0; i < 7; i++) {
    // 7 is related to days of the week
    let date = new Date(daily.time[i]);
    console.log(date)
    // ex: Thu Mar 19 2026 17:00:00 GMT-0700 (Pacific Daylight Time)

     let dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
     console.log(dayOfWeek)
     // ex: Thu, Fri...

     let dvForecastDay = document.querySelector(`#dvForecastDay${i + 1}`);
     console.log(dvForecastDay)
     //allows access to all the daily boxs Mon .... Sun


     let weatherCodeName = getWeatherCodeName(daily.weather_code[i]);
     //console.log(weatherCodeName)
     let dailyHigh = Math.round(daily.temperature_2m_max[i]) + "°";
     //console.log(dailyHigh)
     let dailyLow = Math.round(daily.temperature_2m_min[i]) + "°";
     //console.log(dailyLow)

  
// dynamic work here : create function addDailyElement(tag, className, content, weatherCodeName, parentElement, position)
//      const newDayOfWeek = document.createElement("p");
//      newDayOfWeek.setAttribute("class", "daily__day-title");
//      const newContent = document.createTextNode(dayOfWeek);    
//      newDayOfWeek.appendChild(newContent);
//      dvForecastDay.insertAdjacentElement("afterbegin", newDayOfWeek)
//      --- understand insertAdjacentElement("afterbegin", newDayOfWeek)

// dynamic work here





     //ex: add the daily elements
              // <p class="daily__day-tittle">Tue</p>
              // <img
              //   class="daiy__day-icon"
              //   src="assets/images/icon-rain.webp"
              //   alt=""
              //   width="60"
              //   height="60"
              // />
              // <div class="daily__day-temps">
              //   <p class="daily__day-high">
              //     <span id="dvHighTemp">20</span>&deg;
              //   </p>
              //   <p class="daily__day-low">
              //     <span id="dvLowTemp">10</span>&deg;
              //   </p>
              // </div>


    // while (dvForecastDay.firstChild) {
    //   dvForecastDay.removeChild(dvForecastDay.firstChild);
    // }


    
    //what does this code mean? 
    // This code snippet is a common, reliable JavaScript pattern used to remove all children (child nodes) 
    // from a DOM element (specifically, the dvForecastDay element). It clears the content of the dvForecastDay
    // container, preparing it to hold new content, such as updating a weather forecast display
    // /
    // Why it works: When a child is removed, the next child immediately becomes the new firstChild.
    // The loop continues to remove the first child until there are none left, 
    // at which point dvForecastDay.firstChild becomes null, and the loop stops. 






//keep


    addDailyElement("p", "daily__day-tittle", dayOfWeek, "", dvForecastDay, "afterbegin" );
    addDailyElement("img", "daiy__day-icon", "", weatherCodeName, dvForecastDay, "beforeend");
    addDailyElement("div", "daily__day-temps", "", "", dvForecastDay, "beforeend");

    let dvDailyTemps = document.querySelector(`#dvForecastDay${i + 1} .daily__day-temps`);
    //still accessing each day of the week, but focusing on .daily__day-temps
    addDailyElement("p", "daily__day-high", dailyHigh, "", dvDailyTemps, "afterbegin");
    addDailyElement("p", "daily__day-low", dailyLow, "", dvDailyTemps, "beforeend");

//leep





    //
    //  while (dvForecastDay.firstChild) {
    //    dvForecastDay.removeChild(dvForecastDay.firstChild);
    //  }
    
    // please explaine this code?

    //  addDailyElement("p", "daily__day-title", dayOfWeek, "", dvForecastDay, "afterbegin");
    //  addDailyElement("img", "daily__day-icon", "", weatherCodeName, dvForecastDay, "beforeend");
    //  addDailyElement("div", "daily__day-temps", "", "", dvForecastDay, "beforeend");


    //  let dvDailyTemps = document.querySelector(`#dvForecastDay${i + 1} .daily__day-temps`);
    //  addDailyElement("p", "daily__day-high", dailyHigh, "", dvDailyTemps, "afterbegin");
    //  addDailyElement("p", "daily__day-low", dailyLow, "", dvDailyTemps, "beforeend");


   }
}


function addDailyElement(tag, className, content, weatherCodeName, parentElement, position) {
  //tag is another name for element. ex: <p><div>...
  //
  //copy and paste
    //  const newDayOfWeek = document.createElement("p");
    //  newDayOfWeek.setAttribute("class", "daily__day-title")
    //  const newContent = document.createTextNode(dayOfWeek);
    //  newDayOfWeek.appendChild(newContent);
    //  dvForecastDay.insertAdjacentElement("afterbegin", newDayOfWeek) ---------------> parentElement.insertAdjacentElement(position, newElement);
    //

  const newElement = document.createElement(tag);
  newElement.setAttribute("class", className);

  // if (content !== "") {
  //   const newContent = document.createTextNode(content);
  //   newElement.appendChild(newContent);
  // }

  const newContent = document.createTextNode(content);
  newElement.appendChild(newContent);

  //explain: 
  // checks if a variable named "content" is not an empty string, and if so, 
  // creates a text node containing that content and appends it to another element named newElement. 
  //
  //if (content !== ""): 
  // This is a conditional statement that evaluates whether the content 
  // variable has any value other than an empty string ("").
  //
  //const newContent = document.createTextNode(content);: 
  // If the condition is true, this line uses the document.createTextNode() method
  //  to create a new DOM text node using the value stored in the content variable.
  //
  //newElement.appendChild(newContent);
  // This line then appends the newly created newContent text node 
  // as a child of the newElement object, effectively adding the text into the newElement. 

  if (tag === "img") {
    newElement.setAttribute("src", `/assets/images/icon-${weatherCodeName}.webp`);
    newElement.setAttribute("alt", weatherCodeName);
    newElement.setAttribute("width", "60");
    newElement.setAttribute("height", "60");
  }
  
  parentElement.insertAdjacentElement(position, newElement);
}



// function populateDayOfWeek() {
//   let currDate = new Date();
//   let currDay;
  

//   for (i = 0; i < 7; i++) {
//     currDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currDate);
//     const newOption = document.createElement("option");
//     const dayOfWeek = document.createTextNode(currDay);

//     newOption.setAttribute("class", "hourly__select-day");
//     newOption.setAttribute("value", i);
//     newOption.appendChild(dayOfWeek);

//     ddlDay.insertAdjacentElement("beforeend", newOption);

//     currDate.setDate(currDate.getDate() + 1);
//   }

//   console.log(ddlDay);
// }

// populateDayOfWeek();




//console.log(getWeatherCodeName())
//it displays the weather code image



getGeoData();
