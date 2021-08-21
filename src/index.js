module.exports = function check(str, bracketsConfig) {
   let pairs = bracketsConfig.map((el) => el[0] + "" + el[1]);
   let count = str.length;

  while (count) {
    for (let i=0; i<= pairs.length; i++) {
      str = str.replace(pairs[i], "");
    }
    if (count === str.length) {
      return false;
    } 
    count = str.length;
  }

  return true;
}
