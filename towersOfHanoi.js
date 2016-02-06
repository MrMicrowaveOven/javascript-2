// until all of the disks are on one tower that is not the left most one
// get move from player
// check if the move is valid
// move disk from start to end position
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
  this.board = [[3,2,1],[],[]];
  this.leftStack = this.board[0];
  this.midStack = this.board[1];
  this.rightStack = this.board[2];


  this.run = function(completionCallback){
    var that = this;
    (that.isWon(that.midStack, that.rightStack)
    that.promptMove( function(fro, tot) {
      that.move(fro, tot)
    });
    that.run(completionCallback);
  };


  this.isValidMove = function(startTowerIndex, endTowerIndex){
    var fro = this.board[startTowerIndex - 1];
    var tot = this.board[endTowerIndex - 1];
    if (fro.length === 0){
      return false;
    }
    else if(fro[fro.length - 1] > tot[tot.length - 1]){
      return false;
    }
    else{
      return true;
    }
  };


  this.isWon = function(midStack, rightStack){
    if (midStack.length === 3 || rightStack.length === 3){
      return true;
    }
    else {
      return false;
    }
  };


  this.print = function() {
    console.log("Tower 1: " + JSON.stringify(this.leftStack));
    console.log("Tower 2: " + JSON.stringify(this.midStack));
    console.log("Tower 3: " + JSON.stringify(this.rightStack));
  };


  this.promptMove = function(callback) {
    var that = this;
    that.print();

    reader.question("select a tower to take from: ", function(fromTower){
      reader.question("select a tower to move to: ", function(toTower){
        callback(fromTower, toTower);
        // that.move(fromTower, toTower);
      });
    });
  };



  this.move = function(startTowerIndex, endTowerIndex){
    var fro = this.board[startTowerIndex - 1];
    var tot = this.board[endTowerIndex - 1];
    var that = this;
    if (that.isValidMove(parseInt(startTowerIndex), parseInt(endTowerIndex))){
      tot.push(fro.pop());
    }
    else {
      console.log("Invalid Move");
    }
  };
}

var game = new HanoiGame();
game.run(true);
