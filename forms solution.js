const anchors = document.querySelectorAll('.wrapper a');
// Select kilipuedesign link
// Ask the user wishing to proceed when clicked and warn for potential malicious content
function terminatePageload(event) {
  const confirmed = confirm(
    'The link you clicked may be malicious. Do you wish to proceed?'
  );
  if (!confirmed) {
    event.preventDefault();
  }
  console.log(
    `Page load ${event.target.textContent} was terminated by the user.`
  );
}
anchors.forEach((anchor) => {
  anchor.addEventListener('click', terminatePageload);
});

// Input control nr.1
// Select the signup form
const form = document.querySelector("[name='signup']");
// Stop sending the form if it contains "Ann"
function inputControlAnn(event) {
  const name = event.target.name.value;
  if (name.includes('Ann')) {
    event.preventDefault();
    alert(`Value '${name}' is not allowed. Please enter another name.`);
  }
  event.preventDefault();
  console.log(name);
}
form.addEventListener('submit', inputControlAnn);

// Input control nr.2
// Select the signup form
// Prevent using !%*/@#<>{} characters in the name field and warn the user about it (keydown)
const form2 = document.querySelector('[id="name"]');
function inputControlKeydown(event) {
  const key = event.key;
  const charsNotAllowed = ['!','%','*','/','@','#','<','>','{','}'];
  let invalidKey = charsNotAllowed.includes(key);
  if (invalidKey) {
    event.preventDefault();
    alert('Characters !%*/@#<>{} are not allowed.')
  }
}
form2.addEventListener('keydown', inputControlKeydown);
