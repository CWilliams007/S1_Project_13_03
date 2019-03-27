"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
    Author: Chad Williams
    Date:   3.15.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

// step 4 A-F, declares variables.
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";

window.onload = init;
// step 6
function init() {
      allLetters = document.querySelectorAll('table#crossword span');
      currentLetter = allLetters[0];

      var acrossID = currentLetter.getAttribute('data-clue-a');
      var downID = currentLetter.getAttribute('data-clue-d');

      acrossClue = document.getElementById(acrossID);
      downClue = document.getElementById(downID);
      console.log(acrossClue);
      // step 8a
      formatPuzzle(currentLetter);
      // step 8b
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.cursor = "pointer";
            allLetters[i].onmousedown = function (e) {
                  formatPuzzle(e.target);
            };
      }

      // step 10
      document.addEventListener('keyDown', selectLetter);

      // step 12a
      var typeImage = document.getElementById('directionImg');
      // step 12b
      typeImage.style.cursor = "pointer";
      // step 12c
      typeImage.addEventListener('click', switchTypeDirection);

      // step 13a
      document.getElementById('showErrors').onclick = function () {
            for (var i = 0; i < allLetters.length; i++) {
                  if (allLetters[i].textContent != allLetters[i].dataset.letter) {
                        allLetters[i].style.color = 'red';
                  }
            }
            // step 13c
            setTimeout = (function () {
                  allLetters.style.color = "";
            }, 3000);
      }

      var showSolutionBtn = document.getElementById('showSolution');
      document.getElementById('showSolution').onclick = function () {
            for (var i = 0; i < allLetters.length; i++) {
                  allLetters[i].textContent = allLetters[i].dataset.letter;
            }
      }
}




// step 7
function formatPuzzle(puzzleLetter) {
      // step 7a
      currentLetter = puzzleLetter;
      // step 7b
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
      }

      // step 7c
      acrossClue.style.color = "rgb(96,96,28)";
      downClue.style.color = "rgb(96,96,28)";

      // step 7d
      if (currentLetter.dataset.clueA == !"undefined") {
            acrossClue = document.getElementById(currentLetter.dataset.clueA);
            acrossClue.style.color = 'blue';
            wordLetters = document.querySelectorAll("[data-clue-A =" + currentLetter.getAttribute('data-clue-a') + "]");
            wordLetters.style.backgroundColor = "rgb(231, 231, 255)";
      }
      // step 7e
      if (currentLetter.dataset.clueD == !"undefined") {
            acrossClue = document.getElementById(currentLetter.dataset.clueD);
            acrossClue.style.color = 'red';
            wordLetters = document.querySelectorAll("[data-clue-D =" + currentLetter.getAttribute('data-clue-d') + "]");
            wordLetters.style.backgroundColor = "rgb(255, 231, 231)";
      }

      // step 7f
      if (typeDirection = "right") {
            currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
      } else {
            currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
      }
}
// step 9
function selectLetter() {
      // step 9a
      var leftLetter = document.getElementById(currentLetter.dataset.left);
      var rightLetter = document.getElementById(currentLetter.dataset.right);
      var upLetter = document.getElementById(currentLetter.dataset.up);
      var downLetter = document.getElementById(currentLetter.dataset.down);
      // step 9b
      var userKey = e.keyCode;

      // step 9c
      if (userKey = 37) {
            formatPuzzle(leftLetter);
      } else if (userKey === 38) {
            formatPuzzle(upLetter);
      } else if (userKey === 39 || userKey === 9) {
            formatPuzzle(rightLetter);
      } else if (userKey === 40 || userKey === 13) {
            formatPuzzle(downLetter);
      } else if (userKey === 8 || userKey === 46) {
            currentLetter.textContent = "";
      } else if (userKey === userKey === 32) {
            switchTypeDirection();
      } else if (65 <= userKey <= userKey === 90) {
            currentLetter = getChar(userKey);
            if (typeDirection === 'right') {
                  formatPuzzle(rightLetter);
            } else {
                  formatPuzzle(downLetter);
            }

      }
      // step 9d
      e.preventDefault();
}

// step 11
function switchTypeDirection() {
      // step 11a
      var typeImg = document.getElementById('directionImg');
      // step 11b and 11c
      if (typeDirection = 'right') {
            typeDirection = 'down';
            typeImg.src = 'pc_right.png';
            currentLetter.style.backgroundColor = 'rgb(255, 191, 191);'
      } else {
            typeDirection = 'right';
            typeImg.src = 'pc_down.png';
            currentLetter.style.backgroundColor = 'rgb(191, 191, 255);'

      }
}







/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}