var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");
var userInputEl = document.getElementById("state-input");
var valueUserInputEl = userInputEl.value;
var submitButtonEl = document.querySelector("#button");
var modalBg = document.querySelector(".modal-background");
var modal = document.querySelector(".modal");
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

submitButtonEl.addEventListener("click", inputCheck);

function enableModal() {
  modal.classList.add("is-active");
  //then click out of
  modalBg.addEventListener("click", () => modal.classList.remove("is-active"));
}

function inputCheck(event) {
  event.preventDefault();
  console.log(userInputEl.value);
  if (!userInputEl.value) {
    enableModal();

    //{check against state/abbreviation/capital name here with for loop}
  } else {
    for (var i = 0; i < stateID.length; i++) {
      if (userInputEl.value.toUpperCase() === stateID[i].name) {
        saveData(userInputEl.value);
        window.location.href =
          "./state.html?state=" + userInputEl.value.toUpperCase();
        return;
      } else if (userInputEl.value.toUpperCase() === stateID[i].ID) {
        saveData(userInputEl.value);
        window.location.href =
          "./state.html?state=" + userInputEl.value.toUpperCase();
        return;
      }
    }
  }
  enableModal();
}

function removeAllOn() {
  wordStates.forEach(function (el) {
    el.classList.remove("on");
  });
  svgStates.forEach(function (el) {
    el.classList.remove("on");
  });
}

function addOnFromList(el) {
  var stateCode = el.getAttribute("data-state");
  var svgState = document.querySelector("#" + stateCode);
  el.classList.add("on");
  svgState.classList.add("on");
}

function addOnFromState(el) {
  var path = document.querySelector(".state");
  var stateId = el.getAttribute("id");
  var wordState = document.querySelector("[data-state='" + stateId + "']");
  el.classList.add("on");
  wordState.classList.add("on");
}

wordStates.forEach(function (el) {
  el.addEventListener("mouseenter", function () {
    addOnFromList(el);
  });
  el.addEventListener("mouseleave", function () {
    removeAllOn();
  });

  el.addEventListener("touchstart", function () {
    removeAllOn();
    addOnFromList(el);
  });

  el.addEventListener("click", function () {
    var ID = el.getAttribute("data-state");
    window.location.href = "./state.html?state=" + ID;
    saveData(ID);
  });
});

svgStates.forEach(function (el) {
  el.addEventListener("mouseenter", function () {
    addOnFromState(el);
  });
  el.addEventListener("mouseleave", function () {
    removeAllOn();
  });

  el.addEventListener("touchstart", function () {
    removeAllOn();
    addOnFromState(el);
  });

  el.addEventListener("click", function () {
    console.log(el.getAttribute);
    var ID = el.getAttribute("id");
    window.location.href = "./state.html?state=" + ID;
    saveData(el.getAttribute("id"));
  });
});

var createBtn = function (state) {
  //add in function to create n button for each item
  var buttonEl = document.createElement("button");
  buttonEl.textContent = state;
  buttonEl.classList.add("is-size-4");

  var searchContainerEl = document.querySelector("#search-container");
  buttonEl.setAttribute("id", "submit");
  searchContainerEl.appendChild(buttonEl);
};

var saveData = function (state) {
  var stateSearch = JSON.parse(localStorage.getItem("stateSearch")) || [];
  var stateUpper = state.toUpperCase();
  if (stateUpper.length > 2){
    for (var i = 0; i < stateID.length; i++){
      if (stateUpper === stateID[i].name){
        stateUpper = stateID[i].ID;
      }
    }
  }
  console.log(stateUpper.length)

  if (stateSearch === 0) {
    stateSearch.push(stateUpper);
    createBtn(stateUpper);
  } else if (!stateSearch.includes(stateUpper)) {
    stateSearch.push(stateUpper);
    createBtn(stateUpper);
  }

  window.localStorage.setItem("stateSearch", JSON.stringify(stateSearch));
};

var loadData = function () {
  var state = JSON.parse(localStorage.getItem("stateSearch"));

  $.each(state, function (list, item) {
    createBtn(item);
    console.log(item.length);
    //console.log(item);
  });
};

//add in the id selector for the save button
$("#search-container").on("click", "#submit", function (event) {
  //redirect to the next page and pass in the value of the button
  var state = this.textContent;
  console.log(state);

  window.location.href = "./state.html?state=" + state;
});

loadData();
