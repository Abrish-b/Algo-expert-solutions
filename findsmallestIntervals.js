function findSmallestInterval(numbers){
    let interval = Infinity;
    numbers.sort((a,b) => a-b)
    const neg = numbers.filter(x => x < 0) === null ? [] : numbers.filter(x => x < 0);
    const pos = numbers.filter(x => x >= 0) === null ? [] : numbers.filter(x => x >= 0);

    if (neg.length === 0){
        interval = interval > pos[1]-pos[0] ?  pos[1]-pos[0] : interval;
    }
    else if( pos.length === 0){
        interval = interval > Math.abs(neg[1])-Math.abs(neg[0]) ?  Math.abs(neg[1])-Math.abs(neg[0]) : interval;
    }
    else {
        interval = interval > pos[1]-pos[0] ?  pos[1]-pos[0] : interval;
        interval = interval > Math.abs(neg[1])-Math.abs(neg[0]) ?  Math.abs(neg[1])-Math.abs(neg[0]): interval;
        interval = interval > pos[1]-Math.abs(neg[0]) ?  pos[1]-Math.abs(neg[0])  : interval;
        interval = interval > Math.abs(neg[1])-pos[0] ?  Math.abs(neg[1])-pos[0]  : interval;
    }
    // if (numbers[0] > 0){
    //     interval = interval > numbers[1]-numbers[0] ?  numbers[1]-numbers[0] : interval;
    // }
    // else if (numbers[0] < 0){
    //     const neg = numbers.filter(x => x < 0)
    //     interval = interval > Math.abs(Math.abs(neg.pop())- Math.abs(neg.pop())) ? Math.abs(Math.abs(neg.pop())- Math.abs(neg.pop())) : interval;
    // }
    return interval;
}

console.log(findSmallestInterval([1,6,4,8,2]));
console.log(findSmallestInterval([-2,-6, -3,6,4,8]));
console.log(findSmallestInterval([-3,8,4,-6,3,2]));