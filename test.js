function myToLowerCase(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const asciiCode = string[i].charCodeAt();
    if (asciiCode >= 65 && asciiCode <= 90) {
      result += String.fromCharCode(asciiCode + 32);
    } else {
      result += string[i];
    }
  }
  return result;
}
function myToUpperCase(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const asciiCode = string[i].charCodeAt();
    if (asciiCode >= 97 && asciiCode <= 122) {
      result += String.fromCharCode(asciiCode - 32);
    } else {
      result += string[i];
    }
  }
  return result;
}

const testString = "Some UpPerCAsE & LowErcAse LeTTeRs!!!";

console.log(myToLowerCase(testString));
console.log(myToUpperCase(testString));
