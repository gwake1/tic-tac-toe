// ;(function(){
//   "use strict";
var playerTurn ={
  turn: true,
  sign: "tic",
  player: {
    one: {
      name: "",
      turn: true
    },
    two: {
      name: "",
      turn: false
    }
  }
}

var module = (function () {
  var gameCounter, privateGameCounter, append;
  gameCounter = 0;
  append = function( foo ){
    var foo = gameCounter;
    if(foo%2===0){
      $("td").on("click", function( foo ){
        $(this).addClass("tic");
        return console.log("tic");
      })
    } else if (foo%2===1){
      $(this).addClass("tac");
      return console.log("tac");
    }
  }
  return {
    myPublicVar: "foo",
    myPublicFunction: $("td").click(function(){
      append( "bar" );
      gameCounter++;
    })
  }
})();

// (function append(){
//   $("td").click(function(){
//     if(playerTurn.turn === true && $(this).hasClass("empty")){
//       $(this).addClass("tic");
//       $(this).removeClass("selected");
//       gameTurn();
//       $(this).removeClass("empty");
//       winner();
//     } else if (playerTurn.turn === false && $(this).hasClass("empty")){
//       $(this).addClass("tac");
//       $(this).removeClass("selected");
//       gameTurn();
//       $(this).removeClass("empty");
//       winner();
//     }
//   })
// }());
