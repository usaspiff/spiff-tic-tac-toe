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
    turn = "X";
    computersTurn = "O";
    $("#turnX").addClass("clicked");
    $("#turnO").removeClass("clicked");
    reset();
  });

  //Change player's turn to X and computer's to O
  $("#turnO").click(function() {
    turn = "O";
    computersTurn = "X";
    $("#turnO").addClass("clicked");
    $("#turnX").removeClass("clicked");
    $(".tic").text("#");
    reset();
    computerTurn();
  });


  function computerTurn() {
    //Used to break the while loop
    var taken = false;
    while (taken === false && count !== 5) {
      //Generate computer's random turn
      var computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === "#") {
        $("#" + computersMove).text(computersTurn).addClass("played");
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
      $("#" + id).text(turn).addClass("played");
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
        "Player " + currentTurn + " wins! (Top row across - squares 1, 2, and 3)"
      );
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[6] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Diagonal on squares 3, 5, and 7)"
      );
    } else if (
      turnArray[0] === currentTurn &&
      turnArray[3] === currentTurn &&
      turnArray[6] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Left row down - squares 1, 4, and 7)"
      );
    } else if (
      turnArray[0] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Diagonal on squares 1, 5, and 9)"
      );
    } else if (
      turnArray[1] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[7] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Middle row down - squares 2, 5 , and 8)"
      );
    } else if (
      turnArray[2] === currentTurn &&
      turnArray[5] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Right row down - squares 3, 6, and 9)"
      );
    } else if (
      turnArray[3] === currentTurn &&
      turnArray[4] === currentTurn &&
      turnArray[5] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Middle row across squares 4, 5, and 6)"
      );
    } else if (
      turnArray[6] === currentTurn &&
      turnArray[7] === currentTurn &&
      turnArray[8] === currentTurn
    ) {
      gameOn = true;
      reset();
      alert(
        "Player " + currentTurn + " wins! (Bottom row across - squares 7, 8, and 9)"
      );
    } else if(
      !(turnArray.includes('#'))
    ){
      gameOn = true;
      reset();
      alert(
        "Match draw"
      );
    }﻿
    else {
      gameOn = false;
    }
  }

  $(".tic").click(function() {
    var slot = $(this).attr("id");
    playerTurn(turn, slot);
  });

  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".tic").text("#").removeClass("played");
    //$(".sides").removeClass("clicked");
    gameOn = false;
  }
});
