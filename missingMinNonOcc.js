function solution(A) {
    // write your code in JavaScript (Node.js 14)
    let min = 1;
    A.sort((a,b) => a-b)
    const postive = A.filter(x => x>= 0)
    console.log(postive);
    if(postive === null || postive === undefined || postive === []){
        return min
    }
    else{
        postive.forEach(x=> {
        if (postive.includes(min) && x <= min)
            min += 1;  
    })
    }
    
    return min
}

console.log(solution([1,3,6,4,1,2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));    