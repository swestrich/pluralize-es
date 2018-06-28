'use strict';

var removeAccents = require('remove-accents')
var vowels = 'aeiou'.split('');

function isVowel(char) {
  var result = char.length === 1 &&
      vowels.indexOf(removeAccents(char)) > -1;
  return result;
}

module.exports = function(str) {
  //info can be found here:
  //http://lema.rae.es/dpd/?key=plural&lema=plural
  //http://www.studyspanish.com/lessons/plnoun.htm
  //http://www.spanishdict.com/topics/show/3

  //some things are conflicting though so there might be some issues.

  var plural;

  var last_letter = str[str.length - 1], // Last letter of str
    last_2_letters = str.slice(-2), // Last 3 letters of str
    last_3_letters = str.slice(-3);
  if (last_letter === 'x') {
    //they don't change
    plural = str;
  }

  if (last_2_letters.match(/[áéíóú](n|s)$/)) {
    var radical = removeAccents(str);
    plural = radical + 'es';
  }
  else if (last_letter === 'z') {
    //drop the z and add ces
    var radical = str.substring(0, str.length - 1);
    plural = radical + 'ces';
  }
  else if (last_letter === 'c') {
    //drop the z and add ces
    var radical = str.substring(0, str.length - 1);
    plural = radical + 'ques';
  }
  else if (last_letter === 'g') {
    //add an extra u
    plural = str + 'ues';
  }
  else if (isVowel(last_letter)) {
    //easy, just add s
    plural = str + 's';
  }
  else {
    plural = str + 'es';
  }

  return plural;
};
