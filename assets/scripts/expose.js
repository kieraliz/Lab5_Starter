// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById("horn-select");
  const result = document.querySelector(".result");  
  
  horn.addEventListener("change", changeImage);

  function changeImage(e) {
    // selects the main image, reads choice
    const mainImage = document.querySelector('#expose img');
    const choice = e.target.value;

    // changes main image's src depending on choice
    if (choice == "air-horn") {
      mainImage.src = "assets/images/air-horn.svg";
    }
    else if (choice == "car-horn") {
      mainImage.src = "assets/images/car-horn.svg";
    }
    else if (choice == "party-horn") {
      mainImage.src = "assets/images/party-horn.svg";
    }
    else {
      mainImage.src = "assets/images/no-image.png";
    }    
  }

}
