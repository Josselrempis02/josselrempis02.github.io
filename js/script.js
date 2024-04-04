function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {
  if (counter1 == 80) {
    clearInterval;
  } else {
    counter1 += 1;
    number1.innerHTML = `${counter1}%`;
  }
}, 30);

setInterval(() => {
  if (counter2 == 60) {
    clearInterval;
  } else {
    counter2 += 1;
    number2.innerHTML = `${counter2}%`;
  }
}, 30);

setInterval(() => {
  if (counter3 == 40) {
    clearInterval;
  } else {
    counter3 += 1;
    number3.innerHTML = `${counter3}%`;
  }
}, 30);

  
window.onload = function() {
  // Your code to hide the loader container after a delay
  setTimeout(function() {
      var loaderContainer = document.querySelector('.loader-container');
      loaderContainer.style.opacity = '0'; // Set opacity to 0
      setTimeout(function() {
          loaderContainer.style.display = 'none'; // Hide the spinner overlay after transition
      }, 500); 
  }, 2000); 
};

  

  