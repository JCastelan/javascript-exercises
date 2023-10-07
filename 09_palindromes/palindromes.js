const palindromes = function (aString) {
    punctRemoved = aString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase();
    reversed = punctRemoved.split("").reverse().join("");
    return punctRemoved == reversed;
};

// Do not edit below this line
module.exports = palindromes;
