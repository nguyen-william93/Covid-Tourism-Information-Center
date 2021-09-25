var stateID = [
  { name: "ALASKA", capital: "Juneau", ID: "AK" },
  {
    name: "ALABAMA",
    capital: "Montgomery",
    ID: "AL",
  },
  {
    name: "ARIZONA",
    capital: "Phoenix",
    ID: "AZ",
  },
  {
    name: "ARKANSAS",
    capital: "Little Rock",
    ID: "AR",
  },
  {
    name: "CALIFORNIA",
    capital: "Sacramento",
    ID: "CA",
  },
  {
    name: "COLORADO",
    capital: "Denver",
    ID: "CO",
  },
  {
    name: "CONNECTICUT",
    captial: "Hartford",
    ID: "CT",
  },
  {
    name: "DELAWARE",
    capital: "Dover",
    ID: "DE",
  },
  {
    name: "DISTRICT OF COLUMBIA",
    capital: "Washington D.C.",
    ID: "DC",
  },
  {
    name: "FLORIDA",
    capital: "Tallahassee",
    ID: "FL",
  },
  {
    name: "GEORGIA",
    capital: "Atlanta",
    ID: "GA",
  },
  {
    name: "HAWAII",
    capital: "Honolulu",
    ID: "HI",
  },
  {
    name: "IDAHO",
    capital: "Boise",
    ID: "ID",
  },
  {
    name: "ILLINOIS",
    capital: "Springfield",
    ID: "IL",
  },
  {
    name: "INDIANA",
    captial: "Indianapolis",
    ID: "IN",
  },
  {
    name: "IOWA",
    capital: "Des Moines",
    ID: "IA",
  },
  {
    name: "KANSAS",
    capital: "Topeka",
    ID: "KS",
  },
  {
    name: "LOUISIANA",
    capital: "Baton Rouge",
    ID: "LA",
  },
  {
    name: "MAINE",
    capital: "Augusta",
    ID: "ME",
  },
  {
    name: "MARYLAND",
    captial: "Annapolis",
    ID: "MD",
  },
  {
    name: "MASSACHUSETTS",
    captial: "Boston",
    ID: "MA",
  },
  {
    name: "MICHIGAN",
    captial: "Lansing",
    ID: "MI",
  },
  {
    name: "MINNESOTA",
    captial: "St. Paul",
    ID: "MN",
  },
  {
    name: "MISSISSIPPI",
    captial: "Jackson",
    ID: "MS",
  },
  {
    name: "MISSOURI",
    capital: "Jefferson City",
    ID: "MO",
  },
  {
    name: "MONTANA",
    capital: "Helena",
    ID: "MT",
  },
  {
    name: "NEBRASKA",
    capital: "Lincoln",
    ID: "NE",
  },
  {
    name: "NEVADA",
    capital: "Carson City",
    ID: "NV",
  },
  {
    name: "NEW HAMPSHIRE",
    capital: "Concord",
    ID: "NH",
  },
  {
    name: "NEW JERSEY",
    capital: "Trenton",
    ID: "NJ",
  },
  {
    name: "NEW YORK",
    capital: "Albany",
    ID: "NY",
  },
  {
    name: "NEW MEXICO",
    captial: "Santa Fe",
    ID: "NM",
  },
  {
    name: "NORTH CAROLINA",
    capital: "Raleigh",
    ID: "NC",
  },
  {
    name: "NORTH DAKOTA",
    capital: "Bismarck",
    ID: "ND",
  },
  {
    name: "OHIO",
    capital: "Columbus",
    ID: "OH",
  },
  {
    name: "OKLAHOMA",
    capital: "Oklahoma City",
    ID: "OK",
  },
  {
    name: "OREGON",
    capital: "Salem",
    ID: "OR",
  },
  {
    name: "PENNYSLVANIA",
    capital: "Harrisburg",
    ID: "PA",
  },
  {
    name: "RHODE ISLAND",
    capital: "Providence",
    ID: "RI",
  },
  {
    name: "SOUTH CAROLINA",
    capital: "Columbia",
    ID: "SC",
  },
  {
    name: "SOUTH DAKOTA",
    capital: "Pierre",
    ID: "SD",
  },
  {
    name: "TENNESSEE",
    capital: "Nashville",
    ID: "TN",
  },
  {
    name: "TEXAS",
    capital: "Austin",
    ID: "TX",
  },
  {
    name: "UTAH",
    capital: "Salt Lake City",
    ID: "UT",
  },
  {
    name: "VERMONT",
    capital: "Montpelier",
    ID: "VT",
  },
  {
    name: "VIRGINIA",
    capital: "Richmond",
    ID: "VA",
  },
  {
    name: "WASHINGTON",
    capital: "Olympia",
    ID: "WA",
  },
  {
    name: "WEST VIRGINIA",
    capital: "Charleston",
    ID: "WV",
  },
  {
    name: "WISCONSIN",
    capital: "Madison",
    ID: "WI",
  },
  {
    name: "WYOMING",
    capital: "Cheyenne",
    ID: "WY",
  },
];

var weatherApiKey = "a1cef5ec8d14ee25ac975bd19e5efc49";
var currentWeatherContainer = document.getElementById("weather-container");
var stateCapitalContainer = document.getElementById("thisStateCapital");
var temperatureContainer = document.getElementById("temperature");
var humidityContainer = document.getElementById("humidity");
var windSpeedContainer = document.getElementById("windSpeed");
var uviContainer = document.getElementById("uvi");
var feelsLikeContainer = document.getElementById("feelsLike");

var renderWeatherData = function (data) {
  var current = data.current;
  var temperature = "Temperature: " + current.temp + " °F";
  var humidity = "Humidity: " + current.humidity + " %";
  var windspeed = "Wind Speed: " + current.wind_speed + " MPH";
  var uvindex = "UV Index: " + current.uvi;
  var feelsLike = "Feels like: " + current.feels_like + " °F";

  var temperatureEl = document.createElement("p");
  temperatureEl.textContent = temperature;
  temperatureContainer.append(temperatureEl);

  var humidityEl = document.createElement("p");
  humidityEl.textContent = humidity;
  humidityContainer.append(humidityEl);

  var windspeedEl = document.createElement("p");
  windspeedEl.textContent = windspeed;
  windSpeedContainer.append(windspeedEl);

  var uvindexEl = document.createElement("p");
  uvindexEl.textContent = uvindex;
  uviContainer.append(uvindexEl);

  var feelsLikeEl = document.createElement("p");
  feelsLikeEl.textContent = feelsLike;
  feelsLikeContainer.append(feelsLikeEl);
};

var getStateID = function () {
  var queryString = document.location.search;
  var state = decodeURI(queryString).split("=")[1];
  return state;
  console.log(state);
};

//obtain state capital from search input
//use var state to check against var StateID and show capital only
var getStateCapital = function () {
  var city = [];
  var queryString = document.location.search;
  console.log(queryString);
  var state = decodeURI(queryString).split("=")[1];
  console.log(state);
  var stateCapital = city;
  console.log(stateCapital);

  function renderStateCapital() {
    var stateCapitalEl = document.createElement("p");
    var stateCapital = city;
    stateCapitalEl.textContent = "State Capital: " + stateCapital;
    stateCapitalContainer.append(stateCapitalEl);
  }

  //how to extract from array?
  for (var i = 0; i < stateID.length; i++) {
    if (state.toUpperCase() === stateID[i].ID) {
      city = stateID[i].capital;
      console.log(city);
      renderStateCapital(city);
    } else if (state.toUpperCase() === stateID[i].name) {
      city = stateID[i].capital;
      console.log(city);
      renderStateCapital(city);
    }
  }
  console.log(city);
  var stateCapital = city;
  console.log(stateCapital);
  //this right here below is not working//

  function getWeatherData(event) {
    var query =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      stateCapital +
      "&appid=" +
      weatherApiKey;
    fetch(query)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        var apiUrl =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=hourly,minutely&units=imperial&appid=" +
          weatherApiKey;

        fetch(apiUrl)
          .then(function (res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then(function (data) {
            console.log("weather return", data);
            renderWeatherData(data);
          });
      });
  }
  getWeatherData();
};

var displayStateDataCovid = function (
  confirmed,
  death,
  vaccine,
  population,
  transmissionLevel,
  ICU_bed
) {
  //pass in whatever we want to be display
  //display the data by appending it
  var arrName = [
    "Total Population",
    "Confirmed Cases",
    "Death",
    "Percent of population vaccinated",
    "CDC Tranmission Level",
    "ICU bed",
  ];
  var arrData = [
    population,
    confirmed,
    death,
    vaccine * 100,
    transmissionLevel,
    ICU_bed,
  ];
  var covidEl = document.querySelector("#covid-container");
  for (var i = 0; i < arrName.length; i++) {
    var pEl = document.createElement("p");
    pEl.textContent = arrName[i] + ": " + arrData[i];
    pEl.classList.add("has-text-left");
    covidEl.appendChild(pEl);
  }
};

// var displayWeatherData = function (
//   state,
//   time,
//   temp,
//   wind_speed,
//   humidity,
//   UVI,
//   weather_icon
// ) {
//   var arrWeatherName = [
//     "State",
//     "Time",
//     "Temp",
//     "Wind Speed",
//     "Humidity",
//     "UVI",
//     "Status",
//   ];
//   var arrWeatherData = [
//     state,
//     time,
//     temp,
//     wind_speed,
//     humidity,
//     UVI,
//     weather_icon,
//   ];
//   var weatherEl = document.querySelector("#weather-container");
//   for (var i = 0; i < arrName.length; i++) {
//     var wEl = document.createElement("p");
//     wEl.textContent = arrWeatherName[i] + ": " + arrWeatherData[i];
//     wEl.classList.add("has-text-left");
//     weatherEl.appendChild(wEl);
//   }
// };

function getWeatherData(event) {
  var query =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    stateCapital +
    "&appid=" +
    weatherApiKey;
  fetch(query)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (data) {
      console.log(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var apiUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely&appid=" +
        weatherApiKey;

      fetch(apiUrl)
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then(function (data) {
          console.log("palabra", data);
          renderWeatherData(data);
        });
    });
}

var getCovidInfo = function () {
  var apiUrl =
    "https://api.covidactnow.org/v2/states.json?apiKey=6cace70212de4ea3b58aea0276c7232e";
  var stateId = getStateID();
  if (stateId.length > 2) {
    for (var i = 0; i < stateID.length; i++) {
      if (stateId === stateID[i].name) {
        var stateName = stateId;
        stateId = stateID[i].ID;
      }
    }
  }
  if (stateId.length <= 2) {
    for (var i = 0; i < stateID.length; i++) {
      if (stateId === stateID[i].ID) {
        var stateName = stateID[i].name;
      }
    }
  }
  var stateEl = document.querySelector("#state-name");
  stateEl.textContent = stateName;

  var titleEl = document.querySelector("#state-selected");
  titleEl.textContent = stateName;

  var capitalSubtitleEl = document.querySelector("#stateHasCapital");
  capitalSubtitleEl.textContent = stateName;

  var response = fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].state === stateId) {
            displayStateDataCovid(
              data[i].actuals.cases,
              data[i].actuals.deaths,
              data[i].metrics.vaccinationsCompletedRatio,
              data[i].population,
              data[i].cdcTransmissionLevel,
              data[i].actuals.icuBeds.capacity
            );
          }
        }
      });
    } else {
      console.log("error");
    }
  });
};

//start function
getCovidInfo();
// getWeatherInfo function is actually getStateCapitol in order to bypass local to global issue;
getStateCapital();
