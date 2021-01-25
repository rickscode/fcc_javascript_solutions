function telephoneCheck(str) {
// Variable too hold String
let testStr = str;
// Regex too match String
let testRegex = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gm;
// Test regex against String
let truthRegex = testRegex.test (testStr)

return truthRegex;

}