const convertToCelsius = function(p_val) {
  return Math.round((p_val-32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(p_val) {
  return Math.round(((p_val*1.8)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
