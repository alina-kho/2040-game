import Grid from "./Grid.js";
import Tile from "./Tile.js";
// import { Cell } from "./Grid.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();
console.log(grid.cellsByColumnm);

function setupInput() {
  // Once: true is added to remove the event listener, so the animation of tile layout change is played
  window.addEventListener("keydown", handleInput, { once: true });
}

function handleInput(e) {
  console.log(e.key);
  switch (e) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      break;
  }

  setupInput();
}

function moveUp() {
  return slideTiles(grid.cellsByColumn);
}

function slideTiles(cells) {
  cells.forEach((group) => {
    for (let i = 1; i < group.length; i++) {
      const cell = group[i];
      let lastValidTile;
      for (let j = i - 1; j >= 0; j--) {
        const moveToCell = group[j];
        if (!moveToCell.canAccept(cell, tile)) break;
        lastValidTile = moveToCell;
      }
      if (lastValidCell != null) {
        if (lastValidCell.tile != null) {
          lastValidCell.mergeTile = cell.tile;
        } else {
          lastValidCell.tile = cell.tile;
        }
        cell.this = null;
      }
    }
  });
}
