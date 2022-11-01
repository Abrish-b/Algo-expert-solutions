function books(){
    let max = 0;
    let credit = arguments[2]
    const books = arguments[1].sort((a,b)=> a-b)
    books.forEach( x => {
        if(credit - x >= 0){
            credit -= x;
            max += 1;
        }
    })
    return max
}

console.log(books(1,[1,2],3));
console.log(books(2,[1,3],3));
console.log(books(3,[6,7,4],3));