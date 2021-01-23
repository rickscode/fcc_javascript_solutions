function palindrome(str) {
  //replace underscores and non word characters
  //make all lower case
  //reverse string to new variable
  //compare the strings
  let noSpaceStr = str.replace(/[\W_]/g, "");
  let lowerCaseStr = noSpaceStr.toLowerCase();
  let reverseStr = '';
  for(let i = lowerCaseStr.length -1; i >= 0; i--){
    reverseStr += lowerCaseStr[i];
  }
  return reverseStr === lowerCaseStr;
}



palindrome("A man, a plan, a canal. Panama");