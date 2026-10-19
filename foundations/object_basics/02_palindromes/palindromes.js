const palindromes = function (phrase) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

  let phraseArray = phrase
    .toLowerCase()
    .split("")
    .filter((letter) => alphanumerical.includes(letter));

  const cleanedPhrase = phraseArray.join("");
  const reversedPhrase = phraseArray.reverse().join("");
  return cleanedPhrase === reversedPhrase;
};

// Do not edit below this line
module.exports = palindromes;
