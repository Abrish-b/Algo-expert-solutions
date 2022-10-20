function isValidSubsequence(array, sequence) {
    let arrayPtn = 0;
    let seqPtn = 0;
    while(arrayPtn <= array.length - 1 && seqPtn <= sequence.length - 1){
      if(array[arrayPtn] === sequence[seqPtn])
        seqPtn += 1;
        arrayPtn += 1;
    }    
      
    return seqPtn === sequence.length ? true : false;
  }

  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]));