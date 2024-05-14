let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounter() {
  counterElement.textContent = count;
}

function incrementCounter() {
  count++;
  updateCounter();
}

function decrementCounter() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function resetCounter() {
  count = 0;
  updateCounter();
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);

updateCounter();
