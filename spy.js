function spy(fun, callback) {
    return fun(callback)
}

function fun(){
    if (arguments.length === 1){
        callback();
    }
    else {
        for( i in arguments){
            callback()
        }
    }
};