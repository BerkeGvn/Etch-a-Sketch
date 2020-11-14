let container = document.querySelector(".container");
let grid = 16;

for (let i = 0; i < 16; i++) {
  let divs = document.createElement("div");
  divs.classList.add("divs");
  container.appendChild(divs);
  container.style.gridTemplateColumns = `repeat(${i}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${i}, 1fr)`;
}
