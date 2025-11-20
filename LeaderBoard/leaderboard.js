// It was to write a class to keep track of goals scored in a football season. It has two methods, one for recording a goal scored by a player and one for printing the players with the n highest goals, where n is provided in the class initialization

class LeaderBoard {
  constructor(n) {
    this.n = n;
    this.scores = new Map();
  }

  recordPlayerGoal(playerId, goal){
    if(this.scores.has(playerId)){
      const newVal = this.scores.get(playerId) + goal;
      this.scores.set(playerId, newVal);
    }else{
      this.scores.set(playerId, goal);
    }
  }

  printTopKPlayers(){
    let vals = Array.from(this.scores.values());
    vals.sort((a,b)=> b - a);
    const res = vals.slice(0, this.n).reduce((acc, b) => acc + b, 0);

    console.log(vals);
    return res;
  }

  resetPlayer(playerId){
    this.scores.delete(playerId);
  }
}


const lb = new LeaderBoard(4);

lb.recordPlayerGoal(1, 3);
lb.recordPlayerGoal(2,8);
lb.recordPlayerGoal(3,1);
lb.recordPlayerGoal(4,1);
lb.recordPlayerGoal(5,1);
lb.recordPlayerGoal(1, 2);
lb.recordPlayerGoal(2, 1);
lb.resetPlayer(1)


console.log(lb.printTopKPlayers());