const leapYears = function(p_year) {
    return (p_year%4 == 0 && (p_year%100 != 0 || (p_year%100 == 0 && p_year%400 == 0)) );
};

// Do not edit below this line
module.exports = leapYears;
