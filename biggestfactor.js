function factor(){
    let max = 0;
    arguments[1].forEach(x=>{
        arguments[1].forEach(y=>{
            if(x % y === 0){
                max = y;
            }
        })
    })
    return max
}

console.log(factor(2,[2,4]));
console.log(factor(3,[2,4,6]));
console.log(factor(5,[2,5,7,11,13]));