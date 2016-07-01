/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE

//  for( var i = 0; i < palindrome.length/2; i++) {
//        if( palindrom[i] === palindrom.charAt(palindrom.length-1))
//        {
//          document.write('the word is palindrome.');
//            }else{
//              document.write('the word is not palindrome!');
//          }
//      }
//  }
////  checkPalindrom('wordthatwillbechecked');
function isPalindrome(){
  for ( var i=0; i <palindrome.length/2; i++) {
    if (palindrom.charAt(i) === palindrom.charAt(plaindrom.length-1)) {
      return true("This is a palindrome!");
    }
      else {
        return false("This is NOT a palindrome!");
      }
  }
}
