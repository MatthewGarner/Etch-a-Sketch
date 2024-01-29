function createSquares(numSquares) {
    const container = document.querySelector('.main-container');

    for (let i = 0; i < numSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('grid-square');

        container.appendChild(newSquare);
    }
}

createSquares(16 * 16);