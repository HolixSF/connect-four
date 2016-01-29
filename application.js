var turn = 0;
var redChecker = '<svg height="100" width="100"> <circle cx="50" cy="50" r="40" fill="#ff4040" /> </svg>';
var blackChecker = '<svg height="100" width="100"> <circle cx="50" cy="50" r="40" fill="#404040" /> </svg>';

$(document).ready(function () {
  $('button').on('click', function(e){
    e.preventDefault;

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

      if ($col >= 3) {
        if (($checkCell.html()==$cellOneToLeft.html())&&($cellOneToLeft.html()==$cellTwoToLeft.html())&&($cellTwoToLeft.html()==$cellThreeToLeft.html())){
          alert('You won!');
        };
      };
      if ($col >= 2 && $col <= 5) {
        if (($checkCell.html()==$cellOneToLeft.html())&&($cellOneToLeft.html()==$cellTwoToLeft.html())&&($cellTwoToLeft.html()==$cellOneToRight.html())){
          alert('You won!');
        };
      };
      if ($col >= 1 && $col <= 4) {
        if (($checkCell.html()==$cellOneToLeft.html())&&($cellOneToLeft.html()==$cellTwoToRight.html())&&($cellTwoToRight.html()==$cellOneToRight.html())){
          alert('You won!');
        };
      };
      if ($col <= 3) {
        if (($checkCell.html()==$cellOneToRight.html())&&($cellOneToRight.html()==$cellTwoToRight.html())&&($cellTwoToRight.html()==$cellThreeToRight.html())){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() <= 3) {
        if (($checkCell.html()==$cellOneDown.html())&&($cellOneDown.html()==$cellTwoDown.html())&&($cellTwoDown.html()==$cellThreeDown.html())){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() >= 4) {
        if (($checkCell.html()==$cellOneUpOneRight.html())&&($cellOneUpOneRight.html()==$cellTwoUpTwoRight.html())&&($cellTwoUpTwoRight.html()==$cellThreeUpThreeRight.html())){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() <= 3) {
        if (($checkCell.html()==$cellOneDownOneRight.html())&&($cellOneDownOneRight.html()==$cellTwoDownTwoRight.html())&&($cellTwoDownTwoRight.html()==$cellThreeDownThreeRight.html())){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() >= 4) {
        if (($checkCell.html()==$cellOneUpOneLeft.html())&&($cellOneUpOneLeft.html()==$cellTwoUpTwoLeft.html())&&($cellTwoUpTwoLeft.html()==$cellThreeUpThreeLeft.html()) ){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() <= 3) {
        if (($checkCell.html()==$cellOneDownOneLeft.html())&&($cellOneDownOneLeft.html()==$cellTwoDownTwoLeft.html())&&($cellTwoDownTwoLeft.html()==$cellThreeDownThreeLeft.html()) ){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() >= 3 && $checkCell.parent().index() <= 5) {
        if (($checkCell.html()==$cellOneDownOneLeft.html())&&($checkCell.html()==$cellOneUpOneRight.html())&&($cellOneUpOneRight.html()==$cellTwoUpTwoRight.html()) ){
          alert('You won!');
        };
      };
      if ($checkCell.parent().index() >= 2 && $checkCell.parent().index() <= 4) {
        // if (($checkCell.html()==$cellOneDownOneLeft.html())&&($checkCell.html()==$cellOneUpOneRight.html())&&($cellOneUpOneRight.html()==$cellTwoUpTwoRight.html()) ){
        //   alert('You won!');
        };
      };
    };
  });

});
