
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var firstClick = 0;
var level =1;

$(document).keypress( function(){
    if (firstClick<1){
        nextSequence();
    }    
    firstClick++
    $(".endgame").addClass("hidden");
});

function nextSequence(){
    
    $("h1").text("Level "+level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("."+randomChosenColour).fadeOut(1).fadeIn();
    playSound(randomChosenColour);
    userClickedPattern = [];
    level++;
    
}

$(".btn").click(function(){
    var userChosenColour  = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length);
    
    
    
    
});


function playSound(name){
    switch (name) {
        case "green":
            var somGreen = new Audio("sounds/green.mp3");
            somGreen.play();
            
            break;
        case "red":
            var somGreen = new Audio("sounds/red.mp3");
            somGreen.play();
            
            break;
        case "yellow":
            var somGreen = new Audio("sounds/yellow.mp3");
            somGreen.play();
            
            break;
        case "blue":
            var somGreen = new Audio("sounds/blue.mp3");
            somGreen.play();
            
            break;
        
        default:
            console.log("baubau")
            break;
    }
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function() {
        $("."+currentColour).removeClass("pressed");
    }, 50);
    

}

function checkAnswer(currentLevel){
    
    if (gamePattern[currentLevel-1] !== userClickedPattern[currentLevel-1]){
            gamePattern = [];
            userClickedPattern = [];
            firstClick = 0;
            level =1;
            $("h1").text("Perdeu vacilão! Pressione qualquer botão em seu teclado e tente de novo!");
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            var somGreen = new Audio("sounds/wrong.mp3");
            somGreen.play();
            $(".endgame").removeClass("hidden");
            
        }

    if (gamePattern[currentLevel-1] === userClickedPattern[currentLevel-1] && gamePattern.length !==0){
            

            if ( gamePattern.length===userClickedPattern.length){
                setTimeout(function() {
                    nextSequence(); 
               
                }, 500);
                
            }
            
        }
    
}
 

// Seção extra:

$(".btns").click(function(){
    $(".btn").removeClass("hidden");
    $(".container1").hide();
    $("h1").text("Level 1");
    if (firstClick<1){
        setTimeout(function() {
            nextSequence(); 
       
        }, 500);
    }    
    firstClick++
});


$(".btne").click(function(){
    if (firstClick<1){
        nextSequence();
    }    
    firstClick++
    $(".endgame").addClass("hidden");

});
