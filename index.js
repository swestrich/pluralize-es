'use strict';

module.exports = function(str, pluriel, nb) {

  // If pluriel is not initialized
  if (typeof pluriel === 'number') {
    nb = pluriel;

    var last_letter = str[str.length - 1],    // Last letter of str
        last_3_letters = str.slice(-3);     // Last 3 letters of str

    // exception for /s/z/x
    if (last_letter === 's' || last_letter === 'z' || last_letter === 'x') {
      pluriel = str;
    }
    // Exception for /eau/au/eu
    else if (last_3_letters === 'eau' || last_3_letters === 'au' || last_3_letters === 'eu') {
      pluriel = str + 'x';
    }
    // Exception for /ou
    else if (str === 'bijou' || str === 'chou' || str === 'genou' || str === 'caillou'        ||
            str === 'hibou' || str === 'joujou' || str === 'pou' || str === 'ripou' || str === 'chouchou'        ||
            str === 'boutchou') {
      pluriel = str + 'x';
    } else {
      pluriel = str + 's';
    }
  }
  return (nb === 0 || nb === 1) ? str : pluriel;
};
