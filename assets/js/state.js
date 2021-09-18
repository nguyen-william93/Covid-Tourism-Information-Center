var stateID = [
    {   name: "ALASKA",
        capital: "",
        ID: "AK"
    },
    {
        name: "ALABAMA",
        capital: "",
        ID: "AL"
    },
    {
        name: "ARIZONA",
        capital: "",
        ID: "AZ"
    },
    {
        name: "ARKANSAS",
        capital: "",
        ID: "AR"
    },
    {
        name: "CALIFORNIA",
        capital: "",
        ID: "CA"
    },
    {
        name: "COLORADO",
        capital: "",
        ID: "CO"
    },
    {

    },

]

var displayStateDataCovid = function(confirmed, death, infectionRate, population, transmissionLevel, ICU_bed){ //pass in whatever we want to be display
    //display the data by appending it
}

var displayWeatherData = function(state, time, temp, wind_speed, humidity, UVI, weather_icon){
    //display weather for 5 days depend on how we to display it
    //converting time from binary to UTC
}


var getCityWeather = function(state,lat,lon){
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=9698d78e4b0b91d10c1cae15ee7197eb"

    var response = fetch(apiUrl).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
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

//start function



