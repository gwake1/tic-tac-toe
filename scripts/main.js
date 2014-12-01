// ;(function(){
//   "use strict";
var myModule = (function(){
  var turn = true;
  var player = {
    one: {
      name: "",
      turn: true
    },
    two: {
      name: "",
      turn: false
    },
    gameTurn: function(turn){
      if(turn === true){
        turn = false;
      } else {
        turn = true;
      }
      return turn;
    },
    selected: $("td").click(function(){
      $(this).addClass("selected");
    }),
    append: $("td").click(function(){
      if(turn === true && $(this).hasClass("selected")){
        $(this).addClass("tic");
        $(this).removeClass("selected");
        myModule.gameTurn(turn);
      } else {
        $(this).addClass("tac");
        $(this).removeClass("selected");
        myModule.gameTurn(turn);
      }
    }),
    gameOver: function(){
    }
  }
})();
