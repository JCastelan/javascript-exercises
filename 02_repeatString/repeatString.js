const repeatString = function(string, count) {
    if(count < 0){
        return "ERROR"
    }
    let retVal = "";
    for( let i = 0; i < count; i++){
        retVal+=string;
    }
    return retVal;
};

// Do not edit below this line
module.exports = repeatString;
