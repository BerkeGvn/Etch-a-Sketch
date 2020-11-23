let container = document.querySelector(".container");
let grid = 8;
container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
let gridSize = document.querySelector(".grid-size");

for (let i = 0; i < grid * grid; i++) {
  let divs = document.createElement("div");
  divs.classList.add("divs");
  container.appendChild(divs);
}

gridSize.addEventListener("click", function () {
  let size = prompt("Grid size?");
  grid = size;
});
