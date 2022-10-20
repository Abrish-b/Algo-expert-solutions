function tournamentWinner(competitions, results) {
    let teams = [];
    let score = {};
    let winner;
    competitions.map(x => x.forEach(y => teams.includes(y) ? '' : teams.push(y)))
    teams.forEach(team => score[team] = 0)
    results.map((x,i)=>{
        if(x === 1){
            score[competitions[i][0]] += 3;
            console.log(score);
        }
        else if(x === 0){
            score[competitions[i][1]] += 3;
            console.log(score);
        }
    })
    winner = Object.keys(score).find(key => score[key] === Math.max(...Object.values(score)))
    return winner;
  }

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],[0, 0, 1]));