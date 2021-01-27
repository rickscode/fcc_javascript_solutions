function palindrome(str) {
  
  // Replace underscores and non word characters
  
  let noSpaceStr = str.replace(/[\W_]/g, "");
  
  // Make all lower case

  let lowerCaseStr = noSpaceStr.toLowerCase();

  // Reverse string to new variable

  let reverseStr = '';
  
  // For loop to compare the strings 


  for(let i = lowerCaseStr.length -1; i >= 0; i--){
    reverseStr += lowerCaseStr[i];
  }
  return reverseStr === lowerCaseStr;
}



palindrome("A man, a plan, a canal. Panama");