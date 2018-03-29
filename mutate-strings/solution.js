function mutateMyStrings(stringOne, stringTwo){
  let array1 = stringOne.split('');
  let array2 = stringTwo.split('');
  let answer = [array1.join('')];  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        array1[i] = array2[i];
        answer.push(array1.join(''));
      }
    }
  return answer.join('\n') + '\n';
  }