function isPalindrome(word) {
  var separateLetters = word.split("");
  var reverseWord = separateLetters.reverse();
  reverseWord = reverseWord.join("");
  if (word === reverseWord) {
    console.log("The word " + word + " is a palindrome!");
    return;
  }
  console.log("The word " + word + " is not a palindrome!");
}

isPalindrome("rever");
