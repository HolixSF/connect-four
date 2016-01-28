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
      if ($col >= 3) {
        var $cellOneToLeft = $($table.rows[$checkCell.parent().index()].cells[$col-1]);
        var $cellTwoToLeft = $($table.rows[$checkCell.parent().index()].cells[$col-2]);
        var $cellThreeToLeft = $($table.rows[$checkCell.parent().index()].cells[$col-3]);
        if (($checkCell.html()==$cellOneToLeft.html())&&($cellOneToLeft.html()==$cellTwoToLeft.html())&&($cellTwoToLeft.html()==$cellThreeToLeft.html())){
          alert('You won!');
        };
      };
    };
  });

});
