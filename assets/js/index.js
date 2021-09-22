var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");
var userInputEl = document.getElementById("state-input");
var valueUserInputEl = userInputEl.value;
var submitButtonEl = document.querySelector("#button");
var modalBg = document.querySelector(".modal-background");
var modal = document.querySelector(".modal");

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
  } //change this to reflect the correct item//
  else {
    //call api stuff
    //window.location.href = "./state.html?state=" + varname
    console.log("this should be showing up");
  }
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
  //add in function to createn button for each item
};

var saveData = function (state) {
  var stateSearch = JSON.parse(localStorage.getItem("stateSearch")) || [];
  var stateUpper = state.toUpperCase();

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
    console.log(item);
  });
};

//add in the id selector for the save button
$().on("click", function () {
  //redirect to the next page and pass in the value of the button
});

loadData();
