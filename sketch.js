// function that builds a grid in the "container"
// $ = getElementById()
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {

            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid

function clearGrid() {
    $(".grid").remove();
};

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid

function refreshGrid() {
    clearGrid()
    var box = prompt("How many boxes per side?");
    createGrid(box);

};

//function that creates a hover effect that colors the grid
//also when mouse is held down, it makes the boxes go back to white
function colorGrid() {

    $('.grid').on('mousedown mouseup', function mouseState(e) {
        if (e.type == "mousedown") {
            $(".grid").mouseover(function() {
                $(this).css("background-color", "white");
                });
            }
    
        if (e.type == "mouseup") {
            $(".grid").mouseover(function() {
                $(this).css("background-color", "black");
                });
        }



    });

};


// create a 16x16 grid when the page loads
// when "New Grid" button is clicked, clears grid and allows for hover effect to continue working
// uses colorGrid function
$(document).ready(function() {
    createGrid(16); 
    colorGrid();


    $(".newGrid").click(function(){
        refreshGrid();
        colorGrid();

    });
  
});

