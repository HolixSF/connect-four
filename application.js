var audio = new Audio('test-your-skills-short.wav')
var turn = 0;
var gameWon = true;
var redChecker = '<svg height="100" width="100"> <circle cx="50" cy="50" r="40" fill="#ff4040" /> </svg>';
var blackChecker = '<svg height="100" width="100"> <circle cx="50" cy="50" r="40" fill="#404040" /> </svg>';

Array.prototype.allValuesSame = function() {
  for (i = 1; i < this.length; i++){
    if(this[i] !== this[0]) return false;
  }
  return true;
}

$(document).ready(function () {
  bindListeners()
});

var bindListeners = function(){
  $('.glyphicon-play').on('click', displayBoardGame)
  $('button').on('click', playGame)
}

var displayBoardGame = function(e){
  e.preventDefault;
  $('.button-container').remove();
  $('.name-container').remove();
  $('#connect-four-table').show();
}

var playGame = function(e){
  if (gameWon) {
    e.preventDefault;
    audio.loop = true;
    audio.play();

    var $table = $('table')[0];
    var $row = $(this).index();
    var $col = $(this).parent().index();
    var $checkTopCell = $($table.rows[1].cells[$col]);

    if ($checkTopCell.html()) {
      alert('This column is full');
    } else {
      for (i = 6; i >= 1; i--) {
        var $checkCell = $($table.rows[i].cells[$col]);
        if (!$checkCell.html()) {
          if (turn%2==0) {
            $checkCell.html(redChecker);
          } else {
            $checkCell.html(blackChecker);
          }
          turn++;
          break ;
        }
      }
    };

    if ($checkCell) {
        // Variables for checking win conditions
        var $cellOneToLeft = $($table.rows[$checkCell.parent().index()].cells[$col-1]);
        var $cellTwoToLeft = $($table.rows[$checkCell.parent().index()].cells[$col-2]);
        var $cellThreeToLeft = $($table.rows[$checkCell.parent().index()].cells[$col-3]);
        var $cellOneToRight = $($table.rows[$checkCell.parent().index()].cells[$col+1]);
        var $cellTwoToRight = $($table.rows[$checkCell.parent().index()].cells[$col+2]);
        var $cellThreeToRight = $($table.rows[$checkCell.parent().index()].cells[$col+3]);
        if ($checkCell.parent().index() <= 5) {
          var $cellOneDown = $($table.rows[$checkCell.parent().index()+1].cells[$col]);
        };
        if ($checkCell.parent().index() <= 4) {
          var $cellTwoDown = $($table.rows[$checkCell.parent().index()+2].cells[$col]);
        };
        if ($checkCell.parent().index() <= 3) {
          var $cellThreeDown = $($table.rows[$checkCell.parent().index()+3].cells[$col]);
        };
        if ($checkCell.parent().index() >= 2) {
          var $cellOneUpOneRight = $($table.rows[$checkCell.parent().index()-1].cells[$col+1]);
        };
        if ($checkCell.parent().index() >= 3) {
          var $cellTwoUpTwoRight = $($table.rows[$checkCell.parent().index()-2].cells[$col+2]);
        };
        if ($checkCell.parent().index() >= 4) {
          var $cellThreeUpThreeRight = $($table.rows[$checkCell.parent().index()-3].cells[$col+3]);
        };
        if ($checkCell.parent().index() <= 5) {
          var $cellOneDownOneRight = $($table.rows[$checkCell.parent().index()+1].cells[$col+1]);
        };
        if ($checkCell.parent().index() <= 4) {
          var $cellTwoDownTwoRight = $($table.rows[$checkCell.parent().index()+2].cells[$col+2]);
        };
        if ($checkCell.parent().index() <= 3) {
          var $cellThreeDownThreeRight = $($table.rows[$checkCell.parent().index()+3].cells[$col+3]);
        };
        if ($checkCell.parent().index() >= 2){
          var $cellOneUpOneLeft = $($table.rows[$checkCell.parent().index()-1].cells[$col-1]);
        };
        if ($checkCell.parent().index() >= 3){
          var $cellTwoUpTwoLeft = $($table.rows[$checkCell.parent().index()-2].cells[$col-2]);
        };
        if ($checkCell.parent().index() >= 4){
          var $cellThreeUpThreeLeft = $($table.rows[$checkCell.parent().index()-3].cells[$col-3]);
        };
        if ($checkCell.parent().index() <= 5){
          var $cellOneDownOneLeft = $($table.rows[$checkCell.parent().index()+1].cells[$col-1]);
        };
        if ($checkCell.parent().index() <= 4){
          var $cellTwoDownTwoLeft = $($table.rows[$checkCell.parent().index()+2].cells[$col-2]);
        };
        if ($checkCell.parent().index() <= 3){
          var $cellThreeDownThreeLeft = $($table.rows[$checkCell.parent().index()+3].cells[$col-3]);
        };

        // Check win conditions
        if ($col >= 3) {
          if ([$checkCell.html(),$cellOneToLeft.html(),$cellTwoToLeft.html(),$cellThreeToLeft.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($col >= 2 && $col <= 5) {
          if ([$checkCell.html(),$cellOneToLeft.html(),$cellTwoToLeft.html(),$cellOneToRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($col >= 1 && $col <= 4) {
          if ([$checkCell.html(),$cellOneToLeft.html(),$cellTwoToRight.html(),$cellOneToRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($col <= 3) {
          if ([$checkCell.html(),$cellOneToRight.html(),$cellTwoToRight.html(),$cellThreeToRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() <= 3) {
          if ([$checkCell.html(),$cellOneDown.html(),$cellTwoDown.html(),$cellThreeDown.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() >= 4) {
          if ([$checkCell.html(),$cellOneUpOneRight.html(),$cellTwoUpTwoRight.html(),$cellThreeUpThreeRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() <= 3) {
          if ([$checkCell.html(),$cellOneDownOneRight.html(),$cellTwoDownTwoRight.html(),$cellThreeDownThreeRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() >= 4) {
          if ([$checkCell.html(),$cellOneUpOneLeft.html(),$cellTwoUpTwoLeft.html(),$cellThreeUpThreeLeft.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() <= 3) {
          if ([$checkCell.html(),$cellOneDownOneLeft.html(),$cellTwoDownTwoLeft.html(),$cellThreeDownThreeLeft.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() >= 3 && $checkCell.parent().index() <= 5) {
          if ([$checkCell.html(),$cellOneDownOneLeft.html(),$cellOneUpOneRight.html(),$cellTwoUpTwoRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() >= 2 && $checkCell.parent().index() <= 4) {
          if ([$checkCell.html(),$cellOneDownOneLeft.html(),$cellOneUpOneRight.html(),$cellTwoDownTwoLeft.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() >= 2 && $checkCell.parent().index() <= 4) {
          if ([$checkCell.html(),$cellOneUpOneLeft.html(),$cellOneDownOneRight.html(),$cellTwoDownTwoRight.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
        if ($checkCell.parent().index() >= 3 && $checkCell.parent().index() <= 5) {
          if ([$checkCell.html(),$cellOneUpOneLeft.html(),$cellOneDownOneRight.html(),$cellTwoUpTwoLeft.html()].allValuesSame()){
            alert('You won!');
            gameWon = false;
            audio.pause();
          };
        };
      };
    };
  }
