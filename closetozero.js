function closetozero(ts){
    let min = 0;
    if(Array.isArray(ts) && ts.length === 0){
        return 0;
    }
    else if ( Array.isArray(ts) && ts.length > 0){
        ts.sort((a,b)=> a-b);
        const neg = ts.filter(x => x < 0);
        const pos = ts.filter(x => x >= 0);
        const smallneg = neg.length === 0 ? -Infinity : neg.pop();
        const smallpos = pos.length === 0 ? Infinity : pos.shift();
        // console.log('neg ', neg , ' pos ', pos,  ' smallneg' , smallneg , ' and smallpos ', smallpos)
        if( Math.abs(smallneg) > smallpos){
            min = smallpos;
        }
        else if (Math.abs(smallneg) < smallpos){
            min = smallneg;
        }
        else {
            min = smallpos;
        }
        return min;
    }
    else {
        return ts;
    }
}

console.log(closetozero([7,5,9,1,4]));
console.log(closetozero(-254));
console.log(closetozero(5526));
console.log(closetozero([-15,-7,-9,-14,-12]));
console.log(closetozero( [-10,-10] ));
console.log(closetozero( []));
console.log(closetozero( [15,-7,9,14,7,12]));