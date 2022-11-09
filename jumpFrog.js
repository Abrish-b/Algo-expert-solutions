function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 14)
    let jump = 0;
    let reach = X;
    if(X > Y || Y === 0){
        return 0
    }
    while(reach){
        if(reach + D < Y ){
            reach = reach + D;
            jump ++;
        }
        if(reach + D >= Y){
            return jump + 1;
        }
    }
}

console.log((10, 85, 30));
console.log((10, 5, 1));
console.log((0, 0, 0));
