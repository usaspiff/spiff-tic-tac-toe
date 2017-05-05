$(document).ready(function() {
  //Defaults player's turn to X
  var turn = "X";
  //Array stores values that we will check later for a winner
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  //Default computer turn
  var computersTurn = "O";
  //Keeps track if it is the computer's turn
  var gameOn = false;
  //Keeps track track of computer's turn so no loop;
  var count = 0;

  //Change player's turn to X and computer's to O
  $("#turnX").click(function() {
    turn = "O";
    computersTurn = "X";
    $("#turnX").removeClass("btn-primary");
    $("#turnO").addClass("btn-primary");
    reset();
  });

  //Change player's turn to X and computer's to O
  $("#turnO").click(function() {
    turn = "X";
    computersTurn = "O";
    $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
    $(".tic").text("#");
    reset();
  });

  function computerTurn() {
    //Used to break the while loop
    var taken = false;
    while (taken === false && count !== 5) {
      //Generate computer's random turn
      var computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === "#") {
        $("#" + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }

  function playerTurn(turn, id) {
    var spotTaken = $("#" + id).text();
    if (spotTaken === "#") {
      count++;
      turns[id] = turn;
      $("#" + id).text(turn);
      winCondition(turns, turn);
      if (gameOn === false) {
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }

  function winCondition(turnArray, currentTurn) {
    if (
      turnArray[0] === currentTurn &&
      turnArray[1] === currentTurn &&
      turnArray[2] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Top row across 0, 1, and 2 spots)"
      );
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[6] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Top row across 2, 4, and 6 spots)"
      );
    } else if (
      turnArray[0] === currentTurn &&
      turnArray[3] === currentTurn &&
      turnArray[6] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (1st row down 0, 3, and 6 spots)");
    } else if (
      turnArray[0] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " +
          currentTurn +
          " wins! (1st row diagonally across 0, 4, and 8 spots)"
      );
    } else if (
      turnArray[1] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[7] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (2nd row down 1, 4, and 7 spots)");
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[5] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row down 2, 5, and 8 spots)");
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[5] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (3rd row across 2, 4, and 6 spots)"
      );
    } else if (
      turnArray[3] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[5] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Middle row across 3, 4, and 5 spots)"
      );
    } else if (
      turnArray[6] === currentTurn &&
      turnArray[7] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Bottom row across 6, 7, and 8 spots)"
      );
    } else {
      gameOn = false;
    }
  }

  $(".tic").click(function() {
    var slot = $(this).attr("id");
    playerTurn(turn, slot);
    //reset();
  });

  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".tic").text("#");
    gameOn = false;
  }
});
