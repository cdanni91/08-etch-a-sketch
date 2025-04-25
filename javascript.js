// script.js
const container = document.querySelector('.grid-container');
// read --cols from computed style, default to 16 if not set
const cols = parseInt(
  getComputedStyle(container).getPropertyValue('--cols'),
  10
) || 16;

// generate cols × cols cells
for (let i = 0; i < cols * cols; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
}
