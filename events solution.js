// Select "Click Me" button
// Make a function that says "It got clicked!"
// Attach a listener to the button
const butts = document.querySelector(".butts"); 
const handleClick = event => {
  console.dir(event.target);
  alert(`"${event.target.innerText}" got clicked!`);
};
butts.addEventListener('click', handleClick); 

// Select all Buy buttons
// Make a buyItem function that returns the name and the price of the item
// Loop over the buttons and attach a listener
const buyButtons = document.querySelectorAll('.buy');
const buyItem = event => {
  console.dir(event.target);
  alert(`You are buying \
"${event.target.parentElement.children[0].innerText}" for ${event.target.dataset.price} AUD.`)
};
buyButtons.forEach(button => button.addEventListener('click', buyItem));

// Show the price of the individual items as a paragraph element within each card
const itemCard = document.querySelectorAll('.item');
itemCard.forEach(function (item) {
  const { price } = item.children[1].dataset;
  const showP = document.createElement('p');
  showP.textContent = `Price: ${price} AUD`;
  item.appendChild(showP);
});

// Add a counter to each items with + / - options and additional Buy button.
itemCard.forEach(function (item) {
  const counter = document.createElement('form');
  counter.name = 'counter';
  counter.innerHTML = `
    <label for="quantity">Quantity: </label>
    <button type="submit">Buy</button>
    <button type="button" class="increment">+</button>
    <button type="button" class="decrement">-</button>
    <input type="text" name="quantity" class="quantity" value=0>
  `;
  item.appendChild(counter);
  function addToCart(event) {
    event.preventDefault();
    const pcs = parseInt(event.target.quantity.value);
    const itemName = event.target.parentElement.children[0].textContent;
    if (pcs > 0) {
      alert(`You are buying ${pcs} pcs of ${itemName}.`);
    }
    event.target.quantity.value = 0;
  }
  counter.addEventListener('submit', addToCart);
});

const incrButton = document.querySelectorAll('.increment');
function increment(event) {
  let origQuantity = parseInt(event.target.parentElement.children[4].value);
  let newQuantity = origQuantity;
  newQuantity += 1;
  event.target.parentElement.children[4].value = newQuantity;
}
incrButton.forEach((button) => {
  button.addEventListener('click', increment);
});

const decrButton = document.querySelectorAll('.decrement');
function decrement(event) {
  let origQuantity = parseInt(event.target.parentElement.children[4].value);
  let newQuantity = origQuantity;
  newQuantity -= 1;
  if (newQuantity < 0) {
    event.preventDefault();
  } else {
    event.target.parentElement.children[4].value = newQuantity;
  }
}
decrButton.forEach((button) => {
  button.addEventListener('click', decrement);
});

// Hide the unnecessary Buy buttons
/* buyButtons.forEach((button) => {
  button.remove();
}); */

// Add an image element to the document representing a photo: https://picsum.photos/200
// Count into the console how many times the mouse enters into the image
