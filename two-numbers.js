// function twoNumberSum(array, targetSum) {
//     let output = [];
//     array.map( x  => {
//         if(targetSum-x !== x && array.includes(targetSum - x) !== false && output.includes(targetSum - x) === true)
//             output.push([x, targetSum-x])  
           
//     })
//     return output
//   }
//   return array.map( x  => targetSum - x !== x ? array.includes(targetSum - x) !== false ? [x, targetSum-x]: [] : [])


// solution hashtable 
// function twoNumberSum(array, targetSum) {
//    const hashtable = {}
//    for (const num of array) {
//         if(targetSum - num in hashtable)
//             return [num, targetSum- num]
//         else 
//             hashtable[num] = true;
//    }
//    return []
//   }

function twoNumberSum(array, targetSum) {
    let left = 0
    let right = array.length - 1
    array.sort((a,b) => a-b)
    while (left != right){
        if(array[left] + array[right] === targetSum)
            return [array[left], array[right]]
        else if (array[left] + array[right] > targetSum)
            right -= 1
        else if (array[left] + array[right] < targetSum)
            left += 1
    }
    return []
  }



  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
//   console.log([4, 6].includes(6))
