// Get the button element from the DOM
const multipurposeButton = document.getElementById('box1');
const dishesButton = document.getElementById('box2');
const bodyodyButton = document.getElementById('box3');
const outdoorButton = document.getElementById('box4');
const anotherButton = document.getElementById('search_button');



// Add functionality to toggle the accordion panel when the button is clicked
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Add a click event listener to the buttons
multipurposeButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    let data; // declare data variable
    fetch('https://clean-and-greeen-back.onrender.com/multipurpose')
        .then(res => res.json())
        .then(responseData => {
            data = responseData; // assign responseData to data variable
            console.log(data);
        })
        .catch(error => console.error(error)); // handle any errors in the promise chain
    // data variable is accessible here
    console.log(data);

});
dishesButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    let data; // declare data variable
    fetch('https://clean-and-greeen-back.onrender.com/detergent')
        .then(res => res.json())
        .then(responseData => {
            data = responseData;
            console.log(data);
        })
        .catch(error => console.error(error));
    console.log(data);

});

bodyodyButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    let data; // declare data variable
    fetch('https://clean-and-greeen-back.onrender.com/topical')
        .then(res => res.json())
        .then(responseData => {
            data = responseData;
            console.log(data);
        })
        .catch(error => console.error(error));
    console.log(data);
    
});

outdoorButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    let data; // declare data variable within this function
    fetch('https://clean-and-greeen-back.onrender.com/outdoor')
        .then(res => res.json())
        .then(responseData => {
            data = responseData;
            console.log(data);
        })
        .catch(error => console.error(error));
    console.log(data);
});
// anotherButton.addEventListener('click', function () {
//     // Code to execute when the button is clicked
//     let data; // declare data variable
//     fetch('https://clean-and-greeen-back.onrender.com/')
//         .then(res => res.json())
//         .then(responseData => {
//             data = responseData;
//             console.log(data);
//         })
//         .catch(error => console.error(error));
//     console.log(data);
// });


//ADDING INFORMATION TO THE SCROLL LIST
// Create a new HTML element
// const newElement = document.createElement('p');
// const newHeading = document.createElement('h4');
// const newElement2 = document.createElement('p');
// const newHeading2 = document.createElement('h4');
// newHeading.textContent = 'This is a New Header';
// newElement.textContent = 'This is some new content!';
// newHeading2.textContent = 'This is another New Header';
// newElement2.textContent = 'This is some more new content!';

// Find the container where you want to append the new element
const container = document.querySelector('.scrollspy-example');

// Append the new element to the container
// container.appendChild(newHeading);
// container.appendChild(newElement);
// container.appendChild(newHeading2);
// container.appendChild(newElement2);


// Dynamically add a new panel when new data is added
function addPanel(title, content) {
    // Create a new button and panel
    let button = document.createElement("button");
    button.className = "accordion";
    button.innerHTML = title;
    let panel = document.createElement("div");
    panel.className = "panel";
    panel.innerHTML = content;

    // Add the button and panel to the container
    let container = document.getElementById("panel-container");
    container.appendChild(button);
    container.appendChild(panel);

    // Add the click event listener to the new button
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Example usage of the addPanel function


// addPanel("Section 2", "<p>I will type words here</p>");
// addPanel("Section 3", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 4", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 5", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 6", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 7", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 8", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 9", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 10", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 11", "<p>Content for section 3 goes here.</p>");
// addPanel("Section 12", "<p>Content for section 3 goes here.</p>");