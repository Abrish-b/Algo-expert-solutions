function solution(A, K) {
    // write your code in JavaScript (Node.js 14)
    let rep = K;
    while(rep > 0){
        let val = A.pop();
        A.unshift(val)
        rep--;
    }
    return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));