function abbrevName(name){
  var nameArray = name.split(" ");
  var firstName = nameArray[0].charAt(0);
  var lastName = nameArray[1].charAt(0);
  return (firstName.toUpperCase() + '.' +lastName.toUpperCase());
  // code away
}