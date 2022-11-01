function a(i,j){
    if (i === 1 || j === 1 || i + j === 1)
        return true
    else
        return false
}

console.log(a(1, 5));
console.log(a(2, 3));
console.log(a(-3, 4));