var stateID = [
    {   name: "ALASKA",
        ID: "AK"
    },
    {
        name: "ALABAMA",
        ID: "AL"
    },
    //CONTINUE FOR ALL 52 STATE
]

var displayStateDataCovid = function(confirmed, death, infectionRate, population, transmissionLevel){
    //display the data by appending it
}

var displayWeatherData = function(state, time, temp, wind_speed, humidity, UVI, weather_icon){
    //display weather for 5 days depend on how we to display it
    //converting time from binary to UTC
    var dateObj = new Date(time * 1000).toLocaleString();
    var convertedDate = dateObj.slice(0,8);

    //weather degree sign = "\u00B0F"
}


var getCityWeather = function(state,lat,lon){
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=9698d78e4b0b91d10c1cae15ee7197eb"

    var response = fetch(apiUrl).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                for(var i = 0; i < 5; i++){
                    displayWeatherData(state, data.daily[i].dt, data.daily[i].temp.day, data.daily[i].humidity, data.daily[i].wind_speed, data,daily[i].uvi, data.daily[i].weather[0].icon, data.daily[i].weather[0].description)
                }
            })
        }
    })
}

//pass in state from the front page
var getCityInfo = function(state){
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9698d78e4b0b91d10c1cae15ee7197eb"

    var response = fetch(apiUrl).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                getWeather(state, data.coord.lon, data.coord.lat);
            })
        } else {
            console.log("error: please enter a valid city name");
        }
    })
}

var getCovidInfo = function(){
    var apiUrl = "https://api.covidactnow.org/v2/states.json?apiKey=6cace70212de4ea3b58aea0276c7232e"

    var response = fetch(apiUr).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                displayStateDataCovid()//pass in the info we need
            })
        } else {
            console.log("error");
        }
    })
}



