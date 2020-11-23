const container = document.querySelector(".container");
const resetbtn = document.querySelector(".reset");
const gridSize = document.querySelector(".grid-size");
const rainbowBtn = document.querySelector(".rainbow");
const black = document.querySelector(".black");
sizingGrid(16);
creatingDivs(16);
function sizingGrid(grid) {
  container.style.setProperty("--grid-rows", grid);
  container.style.setProperty("--grid-cols", grid);
}

gridSize.addEventListener("click", function () {
  let size = prompt("Grid size? 0-50");
  if (size > 50) {
    return alert("Please enter a number below 50");
  }
  delGrid();
  sizingGrid(size);
  creatingDivs(size);
});
function delGrid() {
  container.innerHTML = "";
}
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

function creatingDivs(grid) {
  for (let i = 0; i < grid * grid; i++) {
    let divs = document.createElement("div");
    divs.classList.add("divs");
    container.appendChild(divs);

    divs.addEventListener("mouseover", function () {
      divs.style.backgroundColor = randomColor();
    });
  }
}

resetbtn.addEventListener("click", clear);
function clear() {
  const allDivs = document.querySelectorAll(".divs");
  allDivs.forEach((allDivs) => {
    allDivs.style.backgroundColor = "white";
  });
}
