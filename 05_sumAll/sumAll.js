const sumAll = function(firstNum, secondNum) {
    if( firstNum < 0 || secondNum < 0 ||
        !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return 'ERROR';

    let largerNum = secondNum;
    let smallerNum = firstNum;
    if( firstNum > secondNum ){
        largerNum = firstNum;
        smallerNum = secondNum;
    }
    let sum = 0;
    for( ; smallerNum <= largerNum; smallerNum++){
        sum+=smallerNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
