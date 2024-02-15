container = document.querySelector('.container');

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
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
    //grid.style.backgroundColor = 'pink';
    const gridSquares = document.querySelectorAll('.grid');
    gridSquares.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            //console.log(e)
            //console.log(item)
            item.style.backgroundColor = randomColor();
            //item.style.outline = 'none';
        })
    })
}

function promptNewGrid(){
    //console.log("prompted")
    var numberOfSquares = prompt("Please enter the number of squares per side for the new grid");
    //console.log(typeof(numberOfSquares));
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

createGrid(16)