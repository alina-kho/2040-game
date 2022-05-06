//Creating variables to use in JS and CSS
const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid {
  constructor(gridElement) {
    //Setting JS variables to CSS variables
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    this.cells = createCellElement(gridElement).map((cellElement, index) => {
      return new Cell(
        cellElement,
        index % GRID_SIZE,
        Math.floor(index / GRID_SIZE)
      );
    });
    console.log(this.cells);
  }
}

//Creating a layout - instead of making 16 static HTML divs
function createCellElement(gridElement) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElement.append(cell);
  }
  return cells;
}

class Cell {
  constructor(cellElement, x, y) {
    this.cellElement = cellElement;
    this.x = x;
    this.y = y;
  }
}
