var turn = 0;

$(document).ready(function () {
  $('button').on('click', function(e){
    e.preventDefault;

    var table = $('table')[0];
    var row = $(this).parent().children().index($(this));
    var col = $(this).parent().index();
    // alert('Row: ' + row + ', Column: ' + col);
    // console.log($(this).parent().index());

    var checkTopCell = table.rows[1].cells[col];
    var $checkTopCell = $(checkTopCell);
    if ($checkTopCell.html()) {
      // console.log($checkTopCell.html());
      alert('This column is full');
    } else {
      for(i = 6; i >= 1; i--){
        var checkCell = table.rows[i].cells[col];
        var $checkCell = $(checkCell);
        if (!$checkCell.html()) {
          if (turn%2==0){
            $checkCell.html('<svg height="100" width="100"> <circle cx="50" cy="50" r="40" fill="#ff4040" /> </svg>');
          } else {
            $checkCell.html('<svg height="100" width="100"> <circle cx="50" cy="50" r="40" fill="#404040" /> </svg>');
          }
          turn++;
          break ;
        }
      }
    };

  });

});
