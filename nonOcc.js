function solution(A) {
    // write your code in JavaScript (Node.js 14)
    // let occ = [];
    // let paired = A.filter(x=> occ.includes(x)? '': x)
    // return paired.filter(p => occ.includes(p)? )
    let hash = {}
    let nonrep = A.filter((item,index) => A.indexOf(item) === index);
    nonrep.forEach(x => {
        hash[x] = 0;
    })
    A.sort((a,b)=>a-b);
    A.forEach( x=>{
        hash[x] += 1;
    })
    return Number(Object.keys(hash).filter(x => hash[x] ===1)[0]);

}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));