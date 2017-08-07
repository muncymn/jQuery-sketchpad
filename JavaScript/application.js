function createGrid(size) {
    for (var x = 0; x < size; x++){
        for (var y = 0; y < size; y++){
        $("#container").append("<div class='square'></div>");
    }
    }
    $(".square").width(600/size);
    $(".square").height(600/size);
}; 

function resetGrid() {
    $("#container").empty();
    $(".grid").css("display", "none");
};

function paintMe(color) {
    $(".square").hover(function() {
       $(this).css("background-color", color); 
    });
}

$(document).ready(function() {
    
    $("#start").click(function() {
        $(".sizes").fadeIn("fast");
    });
    
    $(".sizes").click(function() {
        $(".sizes").fadeOut("fast");
        $(".grid").fadeIn("fast");
    });
    
    $("#16").click(function() {
        resetGrid();
        createGrid(16);
        paintMe("#3B3738");
    });
                   
    $("#32").click(function() {
        resetGrid();
        createGrid(32);
        paintMe("#3B3738");
    });
    
    $("#64").click(function() {
        resetGrid();
        createGrid(64);
        paintMe("#3B3738");
    });
    
    $("#custom").click(function() {
        resetGrid();
        var number = prompt("Enter Number of Rows (1-100). Warning: large numbers may cause performance issues."); 
        if (isNaN(number)) {
            alert("Input is not a valid number. Please try again!");
        }else if (number > 0.99 && number < 100.001){
            createGrid(number);
            paintMe("#3B3738");
        }else{
            alert("Input is not a valid number. Please try again!");
        };
    }); 
    
    $("#reset").click(function() {
        resetGrid();
    });
    
    $("#on").click(function() {
        $(".square").css("outline", "1px solid black");
    });
    
    $("#off").click(function() {
        $(".square").css("outline", "none");
    });
    
    $("#black").click(function() {
        paintMe("#3B3738");
    });
    
    $("#purple").click(function() {
        paintMe("#9A6BAB");
    });
    
    $("#blue").click(function() {
        paintMe("#0DB9C7");
    });
    
    $("#green").click(function() {
        paintMe("#92C560");
    });

    $("#eraser").click(function() {
        paintMe("white");
    });
    
});

