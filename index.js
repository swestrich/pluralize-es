'use strict';

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

  if (last_letter === 's') {
    switch (str) {
      case 'pies':
        plural = 'pieses';
        break;
      case 'cafés':
        plural = 'cafeses';
        break;
      case 'acortamientos':
        plural = 'acortamiento';
        break;
      case 'abreviaturas':
        plural = 'abreviatura';
        break;
      case 'siglas':
        plural = 'sigla';
        break;
      case 'símbolos':
        plural = 'símbolo';
        break;
      default:
        //normally though it doesn't change
        plural = str;
    }
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
  else if (last_letter === 'a' || last_letter === 'e' || last_letter === 'é' || last_letter === 'i' || last_letter === 'o' || last_letter === 'u') {
    //easy, just add s
    plural = str + 's';

  }
  else if (last_letter === 'á') {
    var radical = str.substring(0, str.length - 1);
    plural = radical + 'aes';

  }
  else if (last_letter === 'ó') {
    var radical = str.substring(0, str.length - 1);
    plural = radical + 'oes';

  }
  else if (last_3_letters === 'ión') {
    var radical = str.substring(0, str.length - 3);
    plural = radical + 'iones';
  }
  else if (last_2_letters === 'ín') {
    var radical = str.substring(0, str.length - 2);
    plural = radical + 'ines';
  }

  else {
    plural = str + 'es';
  }
  return plural;
};

module.exports.singularize = function(str) {
  var last_letter = str[str.length - 1], // Last letter of str
    last_2_letters = str.slice(-2), // Last 2 letters of str
    last_3_letters = str.slice(-3), // Last 2 letters of str
    last_4_letters = str.slice(-4); // Last 4 letters of str

  if (last_letter !== 's') // it's not a plural word, just return it
    return str;

  if (last_4_letters === 'unes')
    return str;

  if (last_4_letters === 'ones')
    return str.slice(0, -4) + 'ón';

  if (last_4_letters === 'ques')
    return str.slice(0, -4) + 'c';

  if (last_4_letters === 'ises')
    return str.slice(0, -4) + 'ís';

  if (last_4_letters === 'uses')
    return str.slice(0, -4) + 'ús';

  if (last_3_letters === 'oes')
    return str.slice(0, -3) + 'ó'

  if (last_3_letters === 'ces')
    return str.slice(0, -3) + 'z'

  if (last_3_letters === 'ues')
    return str.slice(0, -3)

  if (last_2_letters === 'es')
    return str.slice(0, -2);

  if (last_letter === 's')
    return str.slice(0, -1)

}
