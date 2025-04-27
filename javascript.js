// script.js
const container = document.querySelector('.grid-container');
// read --cols from computed style, default to 16 if not set
const cols = parseInt(
  getComputedStyle(container).getPropertyValue('--cols'),
  10
) || 16;


const hoverDelay = 2000; // Tiempo en milisegundos (2 segundos)



// generate cols × cols cells
for (let i = 0; i < cols * cols; i++) {
  let cell = document.createElement('div');
  container.appendChild(cell);
  /* cell.addEventListener("mouseover", () => {
    cell.style.background = "red";
  }
); */
  cell.addEventListener("mouseover", ()=> {
    cell.style.background = "red";
  })
  cell.addEventListener("mouseout", () => {
    setTimeout(() => {
      cell.style.backgroundColor = "";
    }, hoverDelay);
  })};