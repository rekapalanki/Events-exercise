// Select "Click Me" button
// Make a function that says "It got clicked!"
// Attach a listener to the button

// Select all Buy buttons
// Make a buyItem function that returns the name and the price of the item
// Loop over the buttons and attach a listener
const buyButtons = document.querySelectorAll('.buy');
const handleBuyButtonClick = event => console.dir(event.target.dataset.price);
buyButtons.forEach(button => button.addEventListener('click', handleBuyButtonClick));

// Show the price of the individual items as a paragraph element within each card

// Add a counter to each items with + / - options and additional Buy button.

// Hide the unnecessary Buy buttons

// Add an image element to the document representing a photo: https://picsum.photos/200
// Count into the console how many times the mouse enters into the image
