function diffArray(arr1, arr2) {
    const newArr = [];
        arr1.map(x => arr2.includes(x)? x: newArr.push(x))
        arr2.map(x => arr1.includes(x)? x: newArr.push(x))
    return newArr;
  }
  
 console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));