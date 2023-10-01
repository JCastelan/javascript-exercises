const removeFromArray = function(p_array, ...p_vals) {
    let index = 0;
    while( index < p_array.length){
        if(p_vals.includes(p_array[index])){
            p_array.splice(index,1);
        }else{
            index++;
        }
    }
    return p_array;
};

// Do not edit below this line
module.exports = removeFromArray;
