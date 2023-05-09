// Get the button element from the DOM
const multipurposeButton = document.getElementById('multiButton');
const dishesButton = document.getElementById('dishesButton');
const bodyodyButton = document.getElementById('topicalButton');
const outdoorButton = document.getElementById('outdoorButton');
const anotherButton = document.getElementById('search_button'); const container = document.querySelector('.scrollspy-example');



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
    panelContainer.innerHTML = null
    let data; // declare data variable
    fetch('https://clean-and-greeen-back.onrender.com/multipurpose')
        .then(res => res.json())
        .then(responseData => {
            data = responseData; // assign responseData to data variable
            console.log(data);
            data.forEach(element => {
                addPanel(element.name, element.recipe, element.ingredients)
            });
        })
        .catch(error => console.error(error)); // handle any errors in the promise chain
    // data variable is accessible here
    console.log(data);

});
dishesButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    panelContainer.innerHTML = null
    let data; // declare data variable
    fetch('https://clean-and-greeen-back.onrender.com/detergent')
        .then(res => res.json())
        .then(responseData => {
            data = responseData;
            console.log(data);
            data.forEach(element => {
                addPanel(element.name, element.recipe, element.ingredients)
            });

        })
        .catch(error => console.error(error));
    console.log(data);

});
bodyodyButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    panelContainer.innerHTML = null
    let data; // declare data variable
    fetch('https://clean-and-greeen-back.onrender.com/topical')
        .then(res => res.json())
        .then(responseData => {
            data = responseData;
            console.log(data);
            data.forEach(element => {
                addPanel(element.name, element.recipe, element.ingredients)
            });
        })
        .catch(error => console.error(error));
    console.log(data);

});
outdoorButton.addEventListener('click', function () {
    // Code to execute when the button is clicked
    panelContainer.innerHTML = null
    let data; // declare data variable within this function
    fetch('https://clean-and-greeen-back.onrender.com/outdoor')
        .then(res => res.json())
        .then(responseData => {
            data = responseData;
            console.log(data);
            data.forEach(element => {
                addPanel(element.name, element.recipe, element.ingredients)
            });
        })
        .catch(error => console.error(error));
    console.log(data);
});

// Dynamically add a new panel when new data is added
let panelContainer = document.getElementById("panel-container");
function addPanel(title, content, ingredients) {
    // Create a new button and panel
    let button = document.createElement("button");
    button.className = "accordion";
    button.innerHTML = title;
    let panel = document.createElement("div");
    panel.className = "panel";
    let listHTML = '<ol>';
    for (let i = 0; i < ingredients.length; i++) {
        listHTML += '<li>' + ingredients[i] + '</li>';
    }
    listHTML += '</ol>';

    panel.innerHTML = "Ingredients:" + listHTML + "Recipe: " + "<br>" + content;



    // Add the button and panel to the container
    panelContainer.appendChild(button);
    panelContainer.appendChild(panel);
    // panelContainer.appendChild(recipePanel);

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