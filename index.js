// Accessing button element.
const myButton = document.getElementById("btn");
// adding a click event listners

myButton.addEventListener("click",function(event){
    alert('Successful Submited')
    // prevent the default from submission
    event.preventDefault();
    // console.log("Submited successful")
});

// accessing h2 element
const header = document.getElementById("form_action")
// changing style of the color
header.style.color = 'white';

let heading = document.querySelector('h2');
heading.style.color = 'green'

// creating an Elements

const newParagragh =document.createElement('p')
// setting the text for the element.
newParagragh.textContent = 'This is my work'

// appending the new paragraph to the body

document.body.appendChild(newParagragh);