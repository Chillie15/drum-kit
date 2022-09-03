var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  //This will detect mouse click to the drum, and will play a sound when click
  function handleClick() {
    var buttonDrumSound = this.innerHTML;
    makeSound(buttonDrumSound);
    buttonAnimation(buttonDrumSound);
  }
}

//This will detect some key on your keyboard (w, a, s, d, j, k , l), and will play when press suitable key
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Add animation when got click or press key
function buttonAnimation(currentKey) {
  //Add .pressed class in HTML element when it got click or press key
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  //Remove .pressed class in HTML element after 200ms
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}

//This will check which sound should play when click/keyboard
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      alert("Key not available");
      break;
  }
}
