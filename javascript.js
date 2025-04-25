const gridContainer = document.querySelector(".grid-container");

const totalContainers = (16 * 16);



let i = "0"

for (j=0; j < totalContainers; j++) {
    let gridElement = document.createElement("div");
    gridElement.textContent = ("X");
    gridElement.className = ("number-"+i);
    gridContainer.appendChild(gridElement);
    i++;
    console.log(gridElement);
}