// get form and add new button
const form = document.getElementById('form');
const btn = document.getElementById('banana-btn');

// add a new bannana handler
btn.addEventListener('click', () => {
  form.insertAdjacentHTML('beforeend', createBanana());
});

function deleteHandler(banana) {
  banana.closest('.banana').remove();
}

// make a new banana
function createBanana() {
  return `
  <div class="banana">
    <h3>This is a Banana</h3>
    <p>&#127820;</p>
    <p>This is a random banana number: ${randomNum()}</p>
    <button class="delete-btn" onclick="deleteHandler(this)">Eat</button>
  </div>
  `;
}

// random banana number
function randomNum() {
  return Math.floor(Math.random() * 100);
}
