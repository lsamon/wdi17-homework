/* Strings

These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want
to consult the JavaScript strings reference to find useful string methods to call.

DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add
'(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky) */

  var drEvil = function(num){
    if (num === 1000000){
      return num + " dollars (pinky)";
    }
    else {
      return num + " dollars";
    }
  };





/* MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
(separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at
least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful! */

var mixUp = function(str1, str2){
  var mix = str2.charAt(0, 2) + str1.substr(2) + " " + str1.charAt(0, 2) + str2.substr(2);
  return mix;
};





/* FixStart

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences
of its first character have been replaced with '*', except for the first character itself. You can assume that the string is
at least one character long. For example:

fixStart('babble'): 'ba**le' */

var fixStart = function(str){
  var reg = new RegExp(str.charAt(0), "g");
  var fix = str.replace(reg, "*");
  var start = str.charAt(0) + fix.substr(1);
  return start;
};





/* Verbing

Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing'
to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it
should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go' */

  var verbing = function(str){
    if (str.substr((str.length-3)) === 'ing'){
      return str + "ly";
    }
    else if (str.length >= 3) {
      return str + "ing";
    }
    else {
      return str;
    }
  };





/* Not Bad

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!' */

var notBad = function(str){
  if (str.includes('not') === true && str.includes('bad', str.indexOf('not')) === true) {
    var str1 = str.substr(str.indexOf('not'), (str.indexOf('bad') - str.indexOf('not') + 3));
    var reg = new RegExp(str1, "g");
    var repStr = str.replace(reg, "good");
    return repStr;
  }
  else {
    return str;
  }
}
