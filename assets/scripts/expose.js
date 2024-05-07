window.addEventListener('DOMContentLoaded', init);

// global variables accessed anywhere
var horn = document.getElementById("horn-select");
var audio = document.getElementsByClassName("hidden")[0];
var audioButton = document.querySelector("button"); 
var volumeDial = document.querySelector("input");
var jsConfetti = new JSConfetti();

/*
 contains all event listeners
 if user changes horn selection, moves volume dial, or clicks Play Sound button
 */
function init() {  
  horn.addEventListener("change", updateHorn);
  volumeDial.addEventListener("input", updateVolume);
  audioButton.addEventListener("click", playSound);
}

// when user changes horn selection, update image and audio
function updateHorn(horn) {

  // selects the horn choice and main image, audio used globally
  var choice = horn.target.value;
  const mainImage = document.querySelector('#expose img');
  
  // changes main image and audio's src depending on horn choice
  if (choice == "air-horn") {
    mainImage.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if (choice == "car-horn") {
    mainImage.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }
  else if (choice == "party-horn") {
    mainImage.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
  else {
    mainImage.src = "assets/images/no-image.png";
    audio.src = "";
  }    
}

function updateVolume(volumeDial) {

  // selects the volume icon and volume level
  var volumeLevel = volumeDial.target.value;
  const volumeImage = document.querySelector('#volume-controls img');

  // changes volume icon depending on set volume level
  if (volumeLevel == 0) {
    volumeImage.src = "assets/icons/volume-level-0.svg";
  }
  else if (volumeLevel >= 1 && volumeLevel < 33) {
    volumeImage.src = "assets/icons/volume-level-1.svg";
  }
  else if (volumeLevel >= 33 && volumeLevel < 67){
    volumeImage.src = "assets/icons/volume-level-2.svg";
  }
  else if (volumeLevel >= 67) {
    volumeImage.src = "assets/icons/volume-level-3.svg";
  }  
}

function playSound(audioButton) {

  // create new audio object, get src from audio button and volume from volumeDial
  let audioObj = new Audio();
  audioObj.src = audio.src;
  audioObj.volume = volumeDial.value / 100;
  
  audioObj.play();

  // if we selected party horn, throw confetti  
  if (horn.value == "party-horn") {    
    jsConfetti.addConfetti();
  }  
}