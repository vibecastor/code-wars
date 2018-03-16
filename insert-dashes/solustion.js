function insertDash(num) {
  var number = num.toString();
  var newNumber = number.replace(/[1,3,5,7,9](?=[1,3,5,7,9])g/, '$&-');
   return(newNumber);
 }
 