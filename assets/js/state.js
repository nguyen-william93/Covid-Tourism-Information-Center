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
        name: "CONNECTICUT",
        captial: "",
        ID: "CT"
    },
    {
        name: "DELAWARE",
        capital: "",
        ID: "DE"
    },
    {
        name: "DISTRICT OF COLUMBIA",
        capital: "",
        ID: "DC"
    },
    {
        name: "FLORIDA",
        capital: "",
        ID: "FL"
    },
    {
        name: "GEORGIA",
        capital: "",
        ID: "GA"
    },
    {
        name: "HAWAII",
        capital: "",
        ID: "HI"
    },
    {
        name: "IDAHO",
        capital: "",
        ID: "ID"
    },
    {
        name: "ILLINOIS",
        capital: "",
        ID: "IL"
    },
    {
        name: "INDIANA",
        captial: "",
        ID: "IN"
    },
    {
        name: "IOWA",
        capital: "",
        ID: "IA"
    },
    {
        name: "KANSAS",
        capital: "",
        ID: "KS"
    },
    {
        name: "LOUISIANA",
        capital: "",
        ID: "LA"
    },
    {
        name: "MAINE",
        capital: "",
        ID: "ME"
    },
    {
        name: "MARYLAND",
        captial: "",
        ID: "MD"
    },
    {
        name: "MASSACHUSETTS",
        captial: "",
        ID: "MA"
    },
    {
        name: "MICHIGAN",
        captial: "",
        ID: "MI"
    },
    {
        name: "MINNESOTA",
        captial: "",
        ID: "MN"
    },
    {
        name: " MISSISSIPPI",
        captial: "",
        ID: "MS"
    },
    {
        name: "MISSOURI",
        capital: "",
        ID: "MO"
    },
    {
        name: "MONTANA",
        captial: "",
        ID: "MT"
    },
    {
        name: "NEBRASKA",
        capital: "",
        ID: "NE"
    },
    {
        name: "NEVADA",
        capital: "",
        ID: "NV"
    },
    {
        name: "NEW HAMPSHIRE",
        capital: "",
        ID: "NH"
    },
    {
        name: "NEW JERSEY",
        capital: "",
        ID: "NJ"
    },
    {
        name: "NEW YORK",
        capital: "",
        ID: "NY"
    },
    {
        name: "NEW MEXICO",
        captial: "",
        ID: "NM"
    },
    {
        name: "NORTH CORLINA",
        capital: "",
        ID: "NC"
    },
    {
        name: "NORTH DAKOTA",
        capital: "",
        ID: "ND"
    },
    {
        name: "OHIO",
    },
    {
        name: "OKLAHOMA",
    },
    {
        name: "OREGON",
    },
    {
        name: "PENNYSLVANIA"
    },
    {
        name: "RHODE ISLAND",
    },
    {
        name: "SOUTH CAROLINA",
    },
    {
        name: "SOUTH DAKOTA",
    },
    {
        name: "TENNESSEE",
    },
    {
        name: "TEXAS",
    },
    {
        name: "UTAH",
    },
    {
        name: "VERMOT",
    },
    {
        name: "VIRGINIA",
    },
    {
        name: "WASHINGTON",
    },
    {
        name: "WEST VIRGINIA",
    },
    {
        name: "WISCONSIN",
    },
    {
        name: "WYOMING",
    }

]

var getStateID = function(){
    var queryString = document.location.search;
    var state = decodeURI(queryString).split("=")[1];
    return state;
}

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

    var response = fetch(apiUrl).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                displayStateDataCovid()//pass in the info we need
                getState();
            })
        } else {
            console.log("error");
        }
    })
}

//start function
getState();
getCovidInfo();



