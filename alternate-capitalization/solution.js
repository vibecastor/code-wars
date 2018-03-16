function capitalize(s) {
  let splitArray = s.split('');
  let evenCap = [];
  let oddCap = [];
  for (let i = 0; i < splitArray.length; i++) {
    if (i % 2 == 0) {
      evenCap.push(splitArray[i].toUpperCase());
    }
    else { evenCap.push(splitArray[i]);
    }
  }
  for (let i = 0; i < splitArray.length; i++) {
    if (i % 2 !== 0) {
      oddCap.push(splitArray[i].toUpperCase());
    }
    else { oddCap.push(splitArray[i]);
    }  
  }return [evenCap.join(''), oddCap.join('')];
}