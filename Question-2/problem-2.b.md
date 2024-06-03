An event listener in JavaScript is a function that waits for a specific event to occur on an element, such as a user clicking a button or typing in a text field. When the event occurs, the event listener triggers a specified function, known as an event handler.

<button id="doorbellButton">Press Doorbell</button>

<p id="message"></p>

<!--  Select the button and paragraph elements -->

const button = document.getElementById('doorbellButton');
const message = document.getElementById('message');

<!-- Add an event listener to the button -->

button.addEventListener('click', function() {

<!-- Change the text of the paragraph when the button is clicked -->

message.textContent = 'Doorbell rang!';
});
