const findTheOldest = function(people) {
    let currentTime = new Date();
    let retVal = people.reduce(function(accumulator, item, index, array) {
        let champAge;
        let challengerAge;

        if( "yearOfDeath" in accumulator){
            champAge = accumulator.yearOfDeath-accumulator.yearOfBirth;
        }else{
            champAge = currentTime.getFullYear() - accumulator.yearOfBirth;
        }
        if( "yearOfDeath" in item){
            challengerAge = item.yearOfDeath-item.yearOfBirth;
        }else{
            challengerAge = currentTime.getFullYear() - item.yearOfBirth;
        }
        if(challengerAge > champAge){
            return item;
        }

        return accumulator;
      }, {
        name:"None", 
        yearOfBirth:-1,
        yearOfDeath:-1,
    });
    return retVal;
};

// Do not edit below this line
module.exports = findTheOldest;
