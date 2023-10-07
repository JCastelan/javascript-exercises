const fibonacci = function(itNum) {
    itNum = Number(itNum);
    if(itNum <=0){
        return "OOPS";
    }
    if(itNum <=2){
        return 1;
    }
    let retVal = 1;
    let prevNum = 1;
    let temp;
    for(let i = 0; i < itNum-2; i++){
        temp = retVal;
        retVal+=prevNum;
        prevNum = temp;
    }
    return retVal;
};

// Do not edit below this line
module.exports = fibonacci;
