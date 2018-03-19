function validatePIN (pin) {
  var fourOrSixDigitPin = RegExp(/^\d{4}$|^\d{6}$/);  
   return fourOrSixDigitPin.test(pin);  
   };