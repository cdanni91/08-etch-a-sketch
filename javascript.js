const container = document.querySelector('.grid-container');
const button = document.querySelector('.change-grid');
const hoverDelay = 2000; // 2 seconds
let opacity = (0.1);

// 1) Build the grid
function createGrid(size) {
  // Clear out old cells
  container.innerHTML = '';                                              // :contentReference[oaicite:0]{index=0}

  // Update CSS variable so flex-basis calc() works
  container.style.setProperty('--cols', size);                            // :contentReference[oaicite:1]{index=1}

  // Add size × size cells
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    
    cell.addEventListener('mouseover', (e) => { // Recibimos el objeto del evento 'e'
      cell.style.background = `rgb(${e.offsetX*4}, ${e.offsetY*4}, ${e.offsetY*4})`; // Aumente los valores sino se veia todo oscuro

    });

    cell.addEventListener('mouseout', () => {
      setTimeout(() => {
        cell.style.backgroundColor = `rgba(0,0,0,${opacity})`;
      }, hoverDelay);
      opacity += (0.01);
    });
    
    
    container.appendChild(cell);
  }
};
// 2) Initial grid on page load (default 16)
createGrid(16);

// 3) Button handler to change size
button.innerText = 'Change grid size';
button.addEventListener('click', () => {
  const input = prompt('Enter new grid size (e.g. 10 for 10x10):');
  const newSize = parseInt(input, 10);

  // Validate input
  if (Number.isNaN(newSize) || newSize < 1) {
    alert('Please enter a valid positive integer.');
    return;
  }
  if (newSize > 100) {
    alert('Please choose a size under 100 to avoid performance issues.');
    return;
  }

  // Rebuild grid
  createGrid(newSize);
});
