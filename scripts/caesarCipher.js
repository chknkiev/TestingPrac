function caesarCipher(str, shift = 3) {
  let solved = "";
  shift = (shift%26 + 26) % 26;
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    if(code >= 65 && code <= 90) {
      solved += String.fromCharCode((code - 'A'.charCodeAt(0) + shift) % 26
      + 'A'.charCodeAt(0));
    } else if(code >= 97 && code <= 122) {
      solved += String.fromCharCode((code - 'a'.charCodeAt(0) + shift) % 26
      + 'a'.charCodeAt(0));
    } else {
      solved += str[i];
    }
  }
  return solved;
}

module.exports = caesarCipher;