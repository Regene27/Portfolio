var text = ["Hi", "សួស្តី", "สวัสดี", "こんにちは", "Salut", "你好"]; // Array of different greetings
var counter = 0; // Counter for the current text in the array
var elemHi = document.getElementById("changeTextHi"); // Element for displaying the greetings
var typingSpeed = 50; // Speed of typing effect
var deletingSpeed = 50; // Speed of deleting effect
var delayBetweenTransitions = 500; // Delay between deleting and typing

function change() {
  var currentText = text[counter]; // Current greeting text
  removeText(elemHi.innerHTML, function () {
    typeText(currentText, 0); // Start typing new text after the old text is removed
  });

  counter++;
  if (counter >= text.length) {
    counter = 0; // Reset counter if it exceeds the array length
  }
}

function typeText(text, index) {
  if (index < text.length) {
    elemHi.innerHTML += text[index]; // Append next character
    setTimeout(function () {
      typeText(text, index + 1); // Call function recursively for next character
    }, typingSpeed); // Typing speed
  } else {
    // Wait a bit after typing before starting to delete
    setTimeout(change, delayBetweenTransitions);
  }
}

function removeText(text, callback) {
  if (text.length > 0) {
    elemHi.innerHTML = text.slice(0, -1); // Remove last character
    setTimeout(function () {
      removeText(elemHi.innerHTML, callback); // Call function recursively for next character
    }, deletingSpeed); // Deleting speed
  } else {
    setTimeout(callback, delayBetweenTransitions); // Delay before starting to type new text
  }
}

// Typing effect for "I am Regene"
var name = "I am Regene"; // Static text to type
var elemName = document.getElementById("changeTextName"); // Element for displaying the name text

function typeName(name, index) {
  if (index < name.length) {
    elemName.innerHTML += name[index]; // Append next character
    setTimeout(function () {
      typeName(name, index + 1); // Call function recursively for next character
    }, 100); // Typing speed
  }
}

// Initialize typing effects on page load
document.addEventListener("DOMContentLoaded", function () {
  // Start both typing effects at the same time
  setTimeout(typeName(name, 0), 1000); // Start typing "I am Regene" text
  change(); // Start the greeting change immediately
});
