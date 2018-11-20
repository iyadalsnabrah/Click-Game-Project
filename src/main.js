let readyCounter = 3;
let p1Counter = 0;
let p2PcCounter = 0;
let start = 0;
let forHowMuchCounter = 10;
let p2Playing = 0;
let nextLvl = 0;
let p1WinCheck = 0;
let speed = 500;
let p1Scoure = 0;
let p2Scoure = 0;
let p1vsp2Check = 0;
let p1vsp2Win=0;


//intro
$(".p1-pc").click(() => {
    $(".p1-pc").removeClass("rubberBand");
    $(".p1-pc").addClass("flash");
    $(".p1-pc").css("animation-delay", "0.1s");
    $(".intro").fadeOut(2000, function () {
        $(".game-screen").css("display", "flex");
        $(".ready").css("display", "block")
        $(".for-how-much").css("display", "block")
        ready();
        forHowMuch();
        gameScreen();

    });
})

$(".p1-p2").click(() => {
    p2Playing = 1;
    p1vsp2Check = 1;
    $(".p1-p2").removeClass("rubberBand");
    $(".p1-p2").addClass("flash");
    $(".p1-p2").css("animation-delay", "0.1s");
    $(".intro").fadeOut(2000, function () {
        $(".game-screen").css("display", "flex");
        $(".ready").css("display", "block")
        $(".for-how-much").css("display", "block")
        ready();
        forHowMuch();
        gameScreen();

    });
})

//for how much
function forHowMuch() {
    $(".for-how-much h1").html(forHowMuchCounter)
}

//ready
function ready() {
    if (readyCounter !== 0) {
        $(".ready h1").html(readyCounter);
        readyCounter--;
        setTimeout(ready, 1000);
    } else {
        $(".ready").css("display", "none");
        start = 1;
        if (p2Playing == 0)
            p2Pc();

    }
}

//game screen
function gameScreen() {
    if (p2Playing == 0) {
        $(".p1 p").html("Player 1");
        $(".pc-p2 p").html("Pc");
    } else {
        $(".p1 p").html("Player 1");
        $(".pc-p2 p").html("Player 2");
    }
}


//player one counter
function p1() {
    if (start == 1) {
        p1Counter++;
        $(".p1 h1").html(p1Counter)
        checkWin()
    }

}
//pc or play2 counter
function p2Pc() {
    if (start == 1) {
        p2PcCounter++;
        $(".pc-p2 h1").html(p2PcCounter)
        setTimeout(p2Pc, speed)
        checkWin()
    }

}
//player 2 counter
function p2() {
    if (start == 1) {
        p2PcCounter++;
        $(".pc-p2 h1").html(p2PcCounter)
        checkWin()
    }
}

//when click or press space call p1()
$(window).click(() => {
    p1()
})
$(window).keyup((event) => {
    if (event.which === 32)
        p1()
})

//when player two press enter call p2()
$(window).keyup((event) => {
    if (p2Playing == 1)
        if (event.which === 13)
            p2()
})

//to check if anyone win
function checkWin() {
    //check if the player one win
    if (p1Counter == forHowMuchCounter) {
        //when you win and playing against the pc
        if (p2Playing === 0) {
            $(".p1").css("backgroundColor", "rgb(0, 255, 13)");
            $(".p1 p").html("WINNER");
            start = 0;
            p1WinCheck = 1;
            next();
            $(".again").css("display", "block");
            //when you win and playing against p2
        } else {
            $(".p1").css("backgroundColor", "rgb(0, 255, 13)");
            $(".p1 p").html("WINNER");
            start = 0;
            if (p1Scoure <= 3) {
                p1Scoure++;
                if (p1Scoure == 3) {
                    $(".p1vsp2-score-p1").html("WINNER");
                    $(".p1vsp2-score").css("display", "block");
                    $(".again").css("display", "block");
                    p1vsp2Win=1;
                    again();
                } else {
                    $(".p1vsp2-score-p1").html(p1Scoure);
                    $(".p1vsp2-score").css("display", "block");
                    nextScore();
                }
            }


        }
        //check if the p2 or pc win
    } else if (p2PcCounter == forHowMuchCounter) {
        if (p1vsp2Check == 0) {
            $(".pc-p2").css("backgroundColor", "rgb(0, 255, 13)");
            $(".pc-p2 p").html("WINNER");
            start = 0;
            p1WinCheck = 0;
            again();
            $(".again").css("display", "block");
        } else {
            $(".pc-p2").css("backgroundColor", "rgb(0, 255, 13)");
            $(".pc-p2 p").html("WINNER");
            start = 0;
            if (p2Scoure <= 3) {
                p2Scoure++;
                if (p2Scoure == 3) {
                    $(".p1vsp2-score-p2").html("WINNER");
                    $(".p1vsp2-score").css("display", "block");
                    $(".again").css("display", "block");
                    p1vsp2Win=1;
                    again();
                } else {
                    $(".p1vsp2-score-p2").html(p2Scoure);
                    $(".p1vsp2-score").css("display", "block");
                    nextScore();
                }
            }

        }
    }
}
//next score when p1 vs p2
function nextScore() {
    $(".again").css("display", "block");
    $(".again").html("<h1>Next</h1>");
}
//next lvl
function next() {
    nextLvl++;
    $(".next-lvl").css("display", "block");
    $(".next-lvl").html("<h1>Level " + nextLvl + " Complete</h1>")
    $(".again").html("<h1>Next</h1>");
}

//again
function again() {
    $(".again").html("<h1>Again</h1>");
}
$(".again").click(function () {
    restart();
    gameScreen();
    $(".again").css("display", "none");
    $(".next-lvl").css("display", "none");
    $(".p1vsp2-score").css("display", "none");

})

function restart() {
    if (p1vsp2Check == 0) {
        if (p1WinCheck == 1) {
            forHowMuchCounter += 5;
            if (speed <= 100) {
                speed -= 5;
            } else {
                speed -= 50;
            }
            rest()

        } else {
            nextLvl = 0;
            p1WinCheck = 0;
            speed = 500;
            forHowMuchCounter = 10;
            rest()
        }
    } else {
          if(p1vsp2Win==0){ 
              forHowMuchCounter+=10;
              rest(); 
          }
          else{
            p1Scoure=0;
            p2Scoure=0;
            p1vsp2Win=0;
            forHowMuchCounter=10;
            rest();
          }
    }

}

function rest() {
    $(".ready").css("display", "block");
    $(".p1 h1").html("0");
    $(".pc-p2 h1").html("0");
    $(".p1").css("backgroundColor", "rgb(245, 140, 140)");
    $(".pc-p2").css("backgroundColor", "rgb(245, 140, 140)");
    readyCounter = 3;
    p1Counter = 0;
    p2PcCounter = 0;
    forHowMuch();
    ready()
}