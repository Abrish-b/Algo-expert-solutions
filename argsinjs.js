function destroyer(arr) {
    let newArr
    for(key in [...Array(1,arguments.length-1).keys()].slice(1)){
        newArr = arr.map((x, i)=> {
            if (x === arguments[key])
                arguments[0].slice(i, 1)
            }
            )
    } 
    return newArr;
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));