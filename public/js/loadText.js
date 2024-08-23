var text = [
  "Hello World!",
  "Cyber Security Student",
  "Robot Enthusiast",
  "RubyonRails Developer",
  "Flutter Developer",
];
var counter = 0;
var elem = document.getElementById("changeText");
var typingSpeed = 50; // Speed of typing effect
var deletingSpeed = 50; // Speed of deleting effect
var delayBetweenTransitions = 500; // Delay between deleting and typing
var inst = setInterval(change, 5000);

function change() {
  var currentText = text[counter];
  // Start the removal process
  removeText(elem.innerHTML, function () {
    // After removal is complete, start typing the new text
    typeText(currentText, 0);
  });
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

function typeText(text, index) {
  if (index < text.length) {
    elem.innerHTML += text[index];
    setTimeout(function () {
      typeText(text, index + 1);
    }, typingSpeed); // Adjust typing speed here
  }
}

function removeText(text, callback) {
  if (text.length > 0) {
    elem.innerHTML = text.slice(0, -1); // Remove one character
    setTimeout(function () {
      removeText(elem.innerHTML, callback);
    }, deletingSpeed); // Adjust deleting speed here
  } else {
    // Wait a bit before starting to type the new text
    setTimeout(callback, delayBetweenTransitions);
  }
}
