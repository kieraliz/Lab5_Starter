window.addEventListener('DOMContentLoaded', init);

// global variables
var synth = window.speechSynthesis;
var voices = [];
var voiceDropdown = document.getElementById("voice-select");
var inputText = document.getElementById("text-to-speak");
var playButton = document.querySelector('button');

function init() {
  playButton.addEventListener("click", playSound);

  // populate voice list and check for errors
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}

function populateVoiceList() {

  // get voices, for each voice create option element
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    // add default label 
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    // set language and name attributes to voiceDropdown options
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceDropdown.appendChild(option);
  }
}

function playSound() {
  
  // read the input text and selected voice
  const utterThis = new SpeechSynthesisUtterance(inputText.value);
  const selectedOption = voiceDropdown.selectedOptions[0].getAttribute("data-name");

  // find the selected voice in our voices array
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  // speak the input text in our selected voice
  synth.speak(utterThis);

  // select main image and set to open mouth, when done talking reset image src 
  let mainImage = document.querySelector('#explore img');
  mainImage.src = "assets/images/smiling-open.png"
  utterThis.addEventListener('end', function() {
    mainImage.src = "assets/images/smiling.png"
  })
  
  inputText.blur();
}