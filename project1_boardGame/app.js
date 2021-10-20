// class that contains logic for game
class Game {

    //class properties
    gameBoard = document.getElementsById("gameBoard");
    base = document.getElementById("base");
    player1Color = "red";
    player2Color = "yellow";
    // normalColor = "white";
    // numRows = 6;
    // numCols = 7;
    // numTurns = 0;

    constructor() {
        // make circles (rn they are hard coded)
        for (var i = 0; i < 25; i++) {
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            // newCirc.setAttribute("radius", 15);

            //circle style class
            // newCirc.classList.add("gameCirc");
            // newCirc.setAttribute("cx", Math.random() * 400);
            // newCirc.setAttribute("cy", Math.random() * 400);

            // randomly choose what reveal color the circle is
            if (Math.random() < .3) {
                // set to be looking for color
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles ++;
            } else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

        // DIFFERENT TRY
        // for(var x = 0; x <= numRows; x++) {

        //     gameBoard[x] = {};
            
        //     for(var y = 0; y <= numCols; y++) {
        //         gameBoard[x][y] = 'circle';
        //     }
        // }



            // mouse events
            // on mouse over, show the hdden color in the data-hiddencolor attribute
            // newCirc.addEventListener("mouseover", (event) => {
            //     event.target.style.fill = event.target.dataset.hover;
            // })

            // newCirc.addEventListener("mouseout", (event) => {
            //     event.target.style.fill = "#000";
            // })

            newCirc.addEventListener("click", (event) => {
                event.target.style.fill = "red";
            })

    //         // add circle to the screen
    //         this.gameZone.appendChild(newCirc);

    //     }
    }
}


}

// creates a class for the first player movements
class Player1 {
    // constructs the method
    constructor () {

    }
}

// creates a class for the second player movements
class Player2 {
    // constructs the method
    constructor () {

    }
}