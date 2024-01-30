//Generate an n * n set of divs given input of n

function createSquares(numRows) {
    const container = document.querySelector('.main-container');
    const numSquares = numRows ** 2;

    for (let i = 0; i < numSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('grid-square');

        container.appendChild(newSquare);
    }
}

function setSquareVisited (event) {
    event.target.classList.add('visited');

}

//Create the sketching area
createSquares(16);


// Change colour when mouse enters square
const gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach((square) => {
    square.addEventListener('mouseenter', setSquareVisited);
}
);

