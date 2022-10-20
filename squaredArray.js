function sortedSquaredArray(array) {
    return array.map(x => x*x).sort((a,b)=> a-b)
 }

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));