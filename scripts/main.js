(function(){
  var turn, checkBoard, jeezy, tic, tac, counter, play, winner;
  turn = 0;
  checkBoard = [];
  jeezy = [];
  tic = function(){
    if($(this).hasClass("empty")){
      $(this).addClass("tic");
      $(this).removeClass("empty");
    }
  }
  tac = function(){
    if($(this).hasClass("empty")){
      $(this).addClass("tac");
      $(this).removeClass("empty");
    }
  }
  counter = function (){
    if(!$(this).hasClass("empty") && !$(this).hasClass("played")){
      turn+=1;
      $(this).addClass("played");
      return turn;
    } else {
      return turn;
    }
  }
  play = function(){
    if(turn % 2 === 0){
      tic.call(this);
    } else if(turn % 2 === 1){
      tac.call(this);
    } else{
      return turn;
    }
  }
  winner = function(){
    delete checkBoard;
    var checkBoard = [];
    var jeezy = []
    checkBoard.push($("tr").children());
    $.map(checkBoard, function(){
      for(var i=0; i<9; i++){
        jeezy.push(checkBoard[0][i].className)
      }
    });
    if(jeezy[0] == jeezy[1] && jeezy[0] == jeezy[2] && jeezy[1]!="empty"){
      alert("woop");
    } else if(jeezy[3] == jeezy[4] && jeezy[3] == jeezy[5] && jeezy[3]!="empty"){
      alert("woop");
    } else if(jeezy[6] == jeezy[7] && jeezy[6] == jeezy[8] && jeezy[6]!="empty"){
      alert("woop");
    } else if(jeezy[0] == jeezy[3] && jeezy[0] == jeezy[6] && jeezy[0]!="empty"){
      alert("woop");
    } else if(jeezy[1] == jeezy[4] && jeezy[1] == jeezy[7] && jeezy[1]!="empty"){
      alert("woop");
    } else if(jeezy[2] == jeezy[5] && jeezy[2] == jeezy[8] && jeezy[2]!="empty"){
      alert("woop");
    } else if(jeezy[0] == jeezy[4] && jeezy[0] == jeezy[8] && jeezy[0]!="empty"){
      alert("woop");
    } else if(jeezy[2] == jeezy[4] && jeezy[2] == jeezy[6] && jeezy[2]!="empty"){
      alert("woop");
    }
  }
  $("td").click(function(){
    play.call(this);
    counter.call(this);
    winner.call(this);
  });
})();
