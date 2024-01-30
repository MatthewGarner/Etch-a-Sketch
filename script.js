//Generate an n * n set of divs given input of n

function createSquares(numRows) {
    const container = document.querySelector('.main-container');
    const numSquares = numRows ** 2;

    for (let i = 0; i < numSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('grid-square');

        container.appendChild(newSquare);
    }

    // Change colour when mouse enters square
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((square) => {
        square.addEventListener('mouseenter', setSquareVisited);
    }
    );
}

function setSquareVisited (event) {
    event.target.classList.add('visited');
}

//Create the sketching area
createSquares(16);




//Call createSquares when button clicked
const gridSizeButton = document.querySelector('.set-grid-size');

gridSizeButton.addEventListener('click', () => {
    const gridSize = prompt('How many Rows?');

    if (gridSize < 100 && gridSize > 1) {
        const container = document.querySelector('.main-container');
        container.textContent = '';
        createSquares(gridSize);
    } 

    
})