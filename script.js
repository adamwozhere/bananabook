// get form and add new button
const form = document.getElementById('form');
const bananaBtn = document.getElementById('banana-btn');
const teaBtn = document.getElementById('tea-btn');

// add a new bannana handler
bananaBtn.addEventListener('click', () => {
  form.insertAdjacentHTML('beforeend', createBanana());
});

// add a new bannana handler
teaBtn.addEventListener('click', () => {
  form.insertAdjacentHTML('beforeend', createTea());
});

// handler takes in the delete button element as a parameter (passed in as 'this')
// selects the closest selector and removes it, this could be a data attribute (put in [square brackets] or .class or #id etc.)
function deleteHandler(element) {
  element.closest('[data-item]').remove();
}

// cup of tea and bana both have 'data-item' attribute, which means they can be deleted
// make a new banana
function createBanana() {
  const uid = _UID();
  return `
  <div class="banana" id="banana-${uid}" data-item>
    <h3>This is a Banana</h3>
    <p>&#127820;</p>
    <p>This is a random banana number: ${randomNum()}</p>
    <p>UID: ${uid}</p>
    <button class="delete-btn" onclick="deleteHandler(this)">Eat</button>
  </div>
  `;
}

// make a cup of tea
function createTea() {
  const uid = _UID();
  return `
  <div class="tea" id="tea-${uid}" data-item>
    <h3>This is a cup of tea</h3>
    <p>&#9749;</p>
    <p>This is a random cup of tea number: ${randomNum()}</p>
    <p>UID: ${uid}</p>
    <button class="delete-btn" onclick="deleteHandler(this)">Drink</button>
  </div>
  `;
}

// random banana number
function randomNum() {
  return Math.floor(Math.random() * 100);
}

// IIFE makes unique ID value
const _UID = (() => {
  let id = 0;
  return () => id++;
})();

/**
 * 
 * functionally equivalent to:
 * 
  const _UID = (function () {
    let id = 0;
    return function() {
      return id++;
    }
  })();
*/
