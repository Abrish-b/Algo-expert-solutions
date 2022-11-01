function buffet(){
    let max = 0;
    arguments[1].forEach(x => {
        arguments[2].forEach( y => {
            max += Math.floor(x/y)
        })
    })
    return max
}


console.log(buffet([3,1],[28,32,63],[48]));
console.log(buffet([3,1],[25,35,45],[30]));
console.log(buffet([3,3],[1,1,1],[1,1,1]));
