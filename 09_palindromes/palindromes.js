const palindromes = function (string) {
  return (
    string
      .split('')
      .filter((letter) => !letter.match(/[*/_,.?!\s-():]/))
      .join('')
      .toLowerCase() ===
    string
      .split('')
      .filter((letter) => !letter.match(/[*/_,.?!\s-():]/))
      .reverse()
      .join('')
      .toLowerCase()
  );
};

console.log(palindromes('0_0 (: /- :) 0-0'));
// Do not edit below this line
module.exports = palindromes;
