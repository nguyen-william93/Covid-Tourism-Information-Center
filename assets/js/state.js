var stateID = [
    {   name: "ALASKA",
        capital: "Juneau",
        ID: "AK"
    },
    {
        name: "ALABAMA",
        capital: "Montgomery",
        ID: "AL"
    },
    {
        name: "ARIZONA",
        capital: "Phoenix",
        ID: "AZ"
    },
    {
        name: "ARKANSAS",
        capital: "Little Rock",
        ID: "AR"
    },
    {
        name: "CALIFORNIA",
        capital: "Sacramento",
        ID: "CA"
    },
    {
        name: "COLORADO",
        capital: "Denver",
        ID: "CO"
    },
    {
        name: "CONNECTICUT",
        captial: "Hartford",
        ID: "CT"
    },
    {
        name: "DELAWARE",
        capital: "Dover",
        ID: "DE"
    },
    {
        name: "DISTRICT OF COLUMBIA",
        capital: "Washington D.C.",
        ID: "DC"
    },
    {
        name: "FLORIDA",
        capital: "Tallahassee",
        ID: "FL"
    },
    {
        name: "GEORGIA",
        capital: "Atlanta",
        ID: "GA"
    },
    {
        name: "HAWAII",
        capital: "Honolulu",
        ID: "HI"
    },
    {
        name: "IDAHO",
        capital: "Boise",
        ID: "ID"
    },
    {
        name: "ILLINOIS",
        capital: "Springfield",
        ID: "IL"
    },
    {
        name: "INDIANA",
        captial: "Indianapolis",
        ID: "IN"
    },
    {
        name: "IOWA",
        capital: "Des Moines",
        ID: "IA"
    },
    {
        name: "KANSAS",
        capital: "Topeka",
        ID: "KS"
    },
    {
        name: "LOUISIANA",
        capital: "Baton Rouge",
        ID: "LA"
    },
    {
        name: "MAINE",
        capital: "Augusta",
        ID: "ME"
    },
    {
        name: "MARYLAND",
        captial: "Annapolis",
        ID: "MD"
    },
    {
        name: "MASSACHUSETTS",
        captial: "Boston",
        ID: "MA"
    },
    {
        name: "MICHIGAN",
        captial: "Lansing",
        ID: "MI"
    },
    {
        name: "MINNESOTA",
        captial: "St. Paul",
        ID: "MN"
    },
    {
        name: "MISSISSIPPI",
        captial: "Jackson",
        ID: "MS"
    },
    {
        name: "MISSOURI",
        capital: "Jefferson City",
        ID: "MO"
    },
    {
        name: "MONTANA",
        capital: "Helena",
        ID: "MT"
    },
    {
        name: "NEBRASKA",
        capital: "Lincoln",
        ID: "NE"
    },
    {
        name: "NEVADA",
        capital: "Carson City",
        ID: "NV"
    },
    {
        name: "NEW HAMPSHIRE",
        capital: "Concord",
        ID: "NH"
    },
    {
        name: "NEW JERSEY",
        capital: "Trenton",
        ID: "NJ"
    },
    {
        name: "NEW YORK",
        capital: "Albany",
        ID: "NY"
    },
    {
        name: "NEW MEXICO",
        captial: "Santa Fe",
        ID: "NM"
    },
    {
        name: "NORTH CAROLINA",
        capital: "Raleigh",
        ID: "NC"
    },
    {
        name: "NORTH DAKOTA",
        capital: "Bismarck",
        ID: "ND"
    },
    {
        name: "OHIO",
        capital: "Columbus",
        ID: "OH"
    },
    {
        name: "OKLAHOMA",
        capital: "Oklahoma City",
        ID: "OK"
    },
    {
        name: "OREGON",
        capital: "Salem",
        ID: "OR"
    },
    {
        name: "PENNYSLVANIA",
        capital: "Harrisburg",
        ID: "PA"
    },
    {
        name: "RHODE ISLAND",
        capital: "Providence",
        ID: "RI"
    },
    {
        name: "SOUTH CAROLINA",
        capital: "Columbia",
        ID: "SC"
    },
    {
        name: "SOUTH DAKOTA",
        capital: "Pierre",
        ID: "SD"
    },
    {
        name: "TENNESSEE",
        capital: "Nashville",
        ID: "TN"
    },
    {
        name: "TEXAS",
        capital: "Austin",
        ID: "TX"
    },
    {
        name: "UTAH",
        capital: "Salt Lake City",
        ID: "UT"
    },
    {
        name: "VERMONT",
        capital: "Montpelier",
        ID: "VT"
    },
    {
        name: "VIRGINIA",
        capital: "Richmond",
        ID: "VA"
    },
    {
        name: "WASHINGTON",
        capital: "Olympia",
        ID: "WA"
    },
    {
        name: "WEST VIRGINIA",
        capital: "Charleston",
        ID: "WV"
    },
    {
        name: "WISCONSIN",
        capital: "Madison",
        ID: "WI"
    },
    {
        name: "WYOMING",
        capital: "Cheyenne",
        ID: "WY"
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
                displayStateDataCovid()
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



