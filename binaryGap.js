function solution(N) {
    // write your code in JavaScript (Node.js 14)
    const binary = [];
    let gap = 0;
    let gaps = [];
    let start = 0;
    while (N > 0){
        binary.push(N%2)
        N = Math.floor(N/2)
    }
    console.log(binary);

    binary.forEach((x,i,b) =>{
        if(x === 1 && b[i+1] === 0){
            start =1;
        }
        if( x=== 0 && b[i+1] ===1 && start===1){
            gap++;
            gaps.push(gap);
            gap = 0;
            start =0;
        }
        if( x === 0 && b[i+1] === 0 && start===1){
            gap++;
        }
    })
    return Math.max.apply(null, gaps) === -Infinity ? 0 : Math.max.apply(null, gaps);
}

console.log(solution(9));
console.log(solution(15));
console.log(solution(32));
console.log(solution(1041));