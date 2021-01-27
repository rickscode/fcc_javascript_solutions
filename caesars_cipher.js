function rot13(str) {

// Empty array to assign final string
var answer = '';
// For loop through length of str
for(let i = 0; i < str.length; i++) {
// Variable containing value of str ASCII index
  var asc = str[i].charCodeAt();
// If conditions are true
  if(asc >= 65 && asc <= 77){
    // Asc + 13 too match ROT13
    asc += 13;
    // Answer variable is assigned alaphabet version of ASCII n
    answer += String.fromCharCode(asc);
    // Else If 
  } else if(asc > 77 && asc <= 90){
    // Asc - 13 too match ROT13
    asc -= 13;
    // Answer variable is assigned alaphabet version of ASCII n
    answer += String.fromCharCode(asc);
    } else {
      // Spaces and other characters remain the same
      asc = asc;
      answer += String.fromCharCode(asc);

    }
}

  return answer;
}