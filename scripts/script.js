container = document.querySelector('.container');

//Random RGB value using Math.floor with Math.random
function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

//Create the grid. Adjust size of squares according to the number entered so it always fills a 960px by 960px area.
function createGrid(squares){
    gridSize = 960 / squares;
    gridSize = gridSize + 'px';
    for (let i = 0; i < squares; i++) {
        gridCol = document.createElement('div');
        container.appendChild(gridCol)
        for (let j = 0; j < squares; j++) {
            grid = document.createElement('div');
            grid.style.width = gridSize;
            grid.style.height = gridSize;
            grid.classList.add('grid');
            gridCol.appendChild(grid)
        }
    }
    //Select all grid squares and add an event listener to them which changes the color with mouseover.
    const gridSquares = document.querySelectorAll('.grid');
    gridSquares.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = randomColor();
        })
    })
}

//prompts the user to create a new grid and deletes the old grid.
function promptNewGrid(){
    var numberOfSquares = prompt("Please enter the number of squares per side for the new grid");
    if (!isNaN(numberOfSquares)){
        parent = document.querySelector('.container')
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.lastChild);
        }
        createGrid(numberOfSquares)
    }
}
const newGridButton = document.querySelector('.create-grid');
newGridButton.addEventListener('click', promptNewGrid);

//Starting grid. 16 by 16
createGrid(16)