const noOfGrids = 16;
const containerWidth = 500;
const containerHeight = 380;
const color = '#59a96a';


let parentDiv = document.querySelector('#container');
createGrid(noOfGrids);

//Create Grid
function createGrid(noOfGrids) {
    for(let i = 0; i < noOfGrids; i++) {
        for(let j = 0; j < noOfGrids; j++) {
            //Grid created
            let grid = document.createElement('div');

            //Grid appended to parent div
            parentDiv.appendChild(grid);

            //Calculate size of Grid
            let gridWidth = containerWidth/noOfGrids;
            let gridHeight = containerHeight/noOfGrids; 

            //Style and attributes applied to grid
            grid.style.backgroundColor = '#fbf9df';
            grid.style.width = gridWidth + 'px';
            grid.style.height = gridHeight + 'px';
            grid.setAttribute('class','grid');
        }
    }
}

//add mouseover eventListner
let selectDiv = document.querySelectorAll('.grid');
setEventListner(color);

function setEventListner(color) {
    selectDiv = document.querySelectorAll('.grid');
    selectDiv.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            changeColor(item,color);
        })
    })
}

function changeColor(item,color) {
    item.style.backgroundColor = color;
}

// Change Grid Button

let gridButton = document.querySelector('.changeGrid');
gridButton.addEventListener('click',function() {
    changeGrid();
})

let currentGridSize = noOfGrids;

// Remove Grid
function removeGrid() {
    selectDiv.forEach(function(item) {
        parentDiv.removeChild(item);
    });
}

//Change Grid

function changeGrid() {
    let result = prompt('Enter grid Size (1-100)');
    if(result > 100) {
        result = prompt('Please Enter within the range (16-100)');
    } else if(result == null) {
        return;
    } 
    currentGridSize = result;
    removeGrid();
    createGrid(result);
    setEventListner(color);
    
}

//Clear grid
const clearGrid = document.querySelector('.clearGrid');
clearGrid.addEventListener('click', function() {
    removeGrid();
    createGrid(currentGridSize);
    setEventListner(color);
})

//Colors

const color1 = document.querySelector('.jadeC');
const color2 = document.querySelector('.persianRedC');
const color3 = document.querySelector('.celestialBlueC');
const color4 = document.querySelector('.fulvousC');

color1.addEventListener('click', function() {
    setEventListner('#59a96a');
})

color2.addEventListener('click', function() {
    setEventListner('#CC3333');
})

color3.addEventListener('click', function() {
    setEventListner('#0897cc');
})

color4.addEventListener('click', function() {
    setEventListner('#e08200');
})
