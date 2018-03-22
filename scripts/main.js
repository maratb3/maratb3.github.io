var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/we-love-koh-tao-website.jpg') {
      myImage.setAttribute('src', 'images/slider2-1600x760.jpg');
    } else {
      myImage.setAttribute('src', 'images/we-love-koh-tao-website.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent  = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}