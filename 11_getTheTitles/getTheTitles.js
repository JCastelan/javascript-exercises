const getTheTitles = function(books) {
    // let retVal=[];
    // for(let i = 0; i < books.length;i++){
    //     let book = books[i];
    //     retVal.push(book.title);
    // }
    // return retVal;

    //cooler way:
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
