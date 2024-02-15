container = document.querySelector('.container');

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
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
    const gridSquares = document.querySelectorAll('.grid');
    gridSquares.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e)
            console.log(item)
            item.style.backgroundColor = randomColor();
            //item.style.outline = 'none';
        })
    })
}

createGrid(16)