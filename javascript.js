let cellEachCorner = 10;
let cellTotalSize = cellEachCorner * cellEachCorner;
let penColor = "black";

const grid = document.querySelector('#grid');
grid.style.gridTemplateColumns = `repeat(${cellEachCorner}, 2fr)`;
grid.style.gridTemplateRows = `repeat(${cellEachCorner}, 2fr)`;

function createGrid(cellTotalSize){
for (let i = 0; i < cellTotalSize; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = 'cell'
    grid.appendChild(cell);
}
const cellColor = document.querySelectorAll('#cell')
cellColor.forEach(color => color.addEventListener('mouseover', function() {
    color.style.backgroundColor = penColor
}));
}

function rainbowPen(){
    penColor = "#"
    for (let i = 0; i<6; i++){
        let codes = "0123456789ABCDEF"
        penColor += codes[Math.floor(Math.random() * 15 + 1)]
    }
    return penColor;
}


createGrid(cellTotalSize)

const cellColor = document.querySelectorAll('#cell')
cellColor.forEach(color => color.addEventListener('mouseover', function() {
    color.style.backgroundColor = penColor
}));


const slider = document.getElementById('cellRange')
slider.oninput = function() {
    const grid = document.querySelector('#grid');
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    grid.style.gridTemplateColumns = `repeat(${this.value}, 2fr)`;
    grid.style.gridTemplateRows = `repeat(${this.value}, 2fr)`;
    createGrid((this.value * this.value))
    const value = document.getElementById('value')
    value.textContent =  "Grid Size: " + this.value
}

const rainbow = document.querySelector('#rainbow');

rainbow.addEventListener('click', () => {
    const cellColor = document.querySelectorAll('#cell')
    cellColor.forEach(color => color.addEventListener('mouseover', function() {
    color.style.backgroundColor = rainbowPen()
    }));
});

const black = document.querySelector('#black')

black.addEventListener('click', () => {
    const cellColor = document.querySelectorAll('#cell')
    
    cellColor.forEach(color => color.addEventListener('mouseover', function() {
        color.style.backgroundColor = "black"
    }));
});