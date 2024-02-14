container = document.querySelector('.container');

function createGrid(squares){
    for (let i = 0; i < squares; i++) {
        gridCol = document.createElement('div');
        container.appendChild(gridCol)
        for (let j = 0; j < squares; j++) {
            grid = document.createElement('div');
            grid.classList.add('grid');
            gridCol.appendChild(grid)
        }
    }
}

createGrid(16)