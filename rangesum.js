function calc(arr, n1, n2){
    return arr.slice(n1,n2+1).reduce((t,x) => t+x)
}


console.log(calc([1,2,3,4,5,6], 2,4));