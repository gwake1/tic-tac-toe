// ;(function(){
//   "use strict";
// var playerTurn = {
//   turn: true,
//   sign: "tic",
//   player: {
//     one: {
//       name: "",
//       turn: true
//     },
//     two: {
//       name: "",
//       turn: false
//     }
//   }
// }
// var module = (function () {
//   var privateGameCounter, append;
//   append = function( foo ){
//     var foo = 0;
//     if(foo%2==0){
//       $("td").on("click", function( foo ){
//         if($(this).hasClass("empty")){
//           $(this).addClass("tic");
//           $(this).removeClass("empty");
//           foo++;
//           console.log("tic");
//           console.log(foo);
//           return foo;
//         }
//       });
//     } else {
//       if($(this).hasClass("empty")){
//         $(this).addClass("tac");
//         $(this).removeClass("empty");
//         foo++;
//         console.log("tac");
//         console.log(foo);
//         return foo;
//       }
//     }
//   }
//   return {
//     myPublicFunction: $("td").click(function(){
//       append( "bar" );
//     })
//   }
// })();

(function(){
  var tic, tac, count, counter, play, turn;
  turn = 0;
  tic = function(){
    // $("td").mousedown(function(){
      if($(this).hasClass("empty")){
        $(this).addClass("tic");
        $(this).removeClass("empty");
      }
    // })
  }
  tac = function(){
    // $("td").mousedown(function(){
      if($(this).hasClass("empty")){
        $(this).addClass("tac");
        $(this).removeClass("empty");
      }
    // })
  }
  counter = function (){
    turn+=1;
    console.log(turn);
    return turn;
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

  $("td").click(function(){
    play.call(this);
    counter();
  });

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
