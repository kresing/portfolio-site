
var time = new Date().getHours();
var wakeUpTime = 7;
var lunchTime = 12;
var noon = 12;
var napTime = 14;
var evening = 17;
var messageText;
var partyTime = 18;
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


var updateClock = function() {
    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImage = document.getElementById("lolcat");
    var image = "images/chester-selfie.jpg";
  if (time == partyTime) {
      image = "images/chester-party.jpg";
      messageText = "Party time!!!";
  } else if (time == napTime) {
      image = "images/chester-nap.jpg";
      messageText = "Time to rest that brain of yours";
  } else if (time == wakeUpTime) {
      image = "images/chester-looks-at-sun.jpg";
      messageText = "Wake up, gorgeous!";
  } else if (time == lunchTime) {
      image = "images/chester-lunch.jpg";
      messageText = "No takies my lunch!";
  } else if (time < noon) {
      messageText = "Good morning, huuman";
  } else if (time > evening) {
      messageText = "Have a fabulous evening!";
  } else {
      messageText = "Hope your day is purrfect!";
  }

  console.log(messageText);

  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  showCurrentTime();
};

var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};


updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {

  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Party over";
    partyTimeButton.style.backgroundColor = "#A9A9A9";

  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "PARTY TIME!!!";
    partyTimeButton.style.backgroundColor = "#0000CD";
  }
};

var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};

var napTimeEvent = function() {
  napTime = napTimeSelector.value;
};

var lunchTimeEvent = function() {
  lunchTime = lunchTimeSelector.value;
};


partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
napTimeSelector.addEventListener("change", napTimeEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
