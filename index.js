// Get the button element from the DOM
const button1 = document.getElementById('box1');
const button2 = document.getElementById('box2');
const button3 = document.getElementById('box3');
const button4 = document.getElementById('box4');
const button5 = document.getElementById('search_button');



// Add a click event listener to the buttons
button1.addEventListener('click', function () {
    // Code to execute when the button is clicked
    console.log('Button1 clicked!');
});
button2.addEventListener('click', function () {
    // Code to execute when the button is clicked
    console.log('Button2 clicked!');
});
button3.addEventListener('click', function () {
    // Code to execute when the button is clicked
    console.log('Button3 clicked!');
});
button4.addEventListener('click', function () {
    // Code to execute when the button is clicked
    console.log('Button4 clicked!');
});
button5.addEventListener('click', function () {
    // Code to execute when the button is clicked
    console.log('Button5 clicked!');
});


//ADDING INFORMATION TO THE SCROLL LIST
// Create a new HTML element
const newElement = document.createElement('p');
const newHeading = document.createElement('h4');
const newElement2 = document.createElement('p');
const newHeading2 = document.createElement('h4');
newHeading.textContent = 'This is a New Header';
newElement.textContent = 'This is some new content!';
newHeading2.textContent = 'This is another New Header';
newElement2.textContent = 'This is some more new content!';

// Find the container where you want to append the new element
const container = document.querySelector('.scrollspy-example');

// Append the new element to the container
container.appendChild(newHeading);
container.appendChild(newElement);
container.appendChild(newHeading2);
container.appendChild(newElement2);