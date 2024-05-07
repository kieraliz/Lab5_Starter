window.addEventListener('DOMContentLoaded', init);

var result = document.querySelector(".result");

var voiceDropdown = document.getElementById("voice-select");
var inputText = document.getElementById("text-to-speak");
var playButton = document.querySelector('button');

var synth = window.speechSynthesis;
let voices = [];
var myText = "";

function init() {
  voiceDropdown.addEventListener("click", populateVoiceList);
  inputText.addEventListener("input", updateText);
  playButton.addEventListener("click", playSound);
}

function populateVoiceList() {

  // check for errors in speechSynthesis, then get voices
  if (typeof speechSynthesis === "undefined") {
    return;
  }
  voices = speechSynthesis.getVoices();
  
  // for each voice, create option element
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    // add "default" tag
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    // set language and name attributes to voiceDropdown options
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceDropdown.appendChild(option);
  }
}

function updateText(e) {
  myText = e.target.value
}

function playSound() {
  result.textContent = 'you clicked me!';
}