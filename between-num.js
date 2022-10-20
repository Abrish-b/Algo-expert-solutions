function sumAll(arr) {
    if(arr[0] < arr[arr.length-1]){
        const num = [...Array(arr[1]+1).keys()].slice(arr[0])
        return num.reduce((total, val) => total + val);
    }
    else if (arr[0] > arr[arr.length-1]){
        const num = [...Array(arr[0]+1).keys()].slice(arr[1])
        return num.reduceRight((total, val) => total + val);
    }
  }
  
 console.log(sumAll([4, 1]));