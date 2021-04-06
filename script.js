//Select elements
const mainContainer = document.getElementById('container');
const refreshButton = document.getElementById('refresh-button');

//add event listener for refresh button
refreshButton.addEventListener('click', refreshGame);

//Add - create x number of divs to create the drawing grid
function createDivs (n) {
    for (i = 0; i < n; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-box');

        mainContainer.appendChild(newDiv);
        //TODO: make sure the CSS grid has the right number of rows and columns based on the user input
    }
}

function refreshGame() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
      }

    const newGridSize = +prompt('How many squares per side for your new sketch?', 16);
    
    createDivs(newGridSize * newGridSize);
    addTrackingToDrawingArea();

}

function addTrackingToDrawingArea() {
    //Select all the items in the grid
    const sketchGrid = document.querySelectorAll('div .grid-box');

     //For each item - add an event lstener for a mouse hover and apply a CSS class to fill in the
    sketchGrid.forEach(gridItem => {
        gridItem.addEventListener('mouseenter', e => {
            e.target.classList.add('grid-box-filled');
        })
    })
}

 //create divs for 16 x 16 grid
 createDivs(16 * 16);
 addTrackingToDrawingArea();






