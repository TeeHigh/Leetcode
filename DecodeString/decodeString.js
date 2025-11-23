/**
 * @param {string} s
 * @return {string}
 */

// s = "3[a]2[bc]" or s = "3[a2[c]]"
var decodeString = function (s) {
  let numStack = [];
  let strStack = [];
  let currNum = 0;
  let currStr = "";

  for (let char of s) {
    if (!isNaN(char)) {
      currNum = currNum * 10 + Number(char); // build multi-digit numbers
    } else if (char === '[') {
      numStack.push(currNum);
      strStack.push(currStr);
      currNum = 0;
      currStr = "";
    } else if (char === ']') {
      let repeatTimes = numStack.pop();
      currStr = strStack.pop() + currStr.repeat(repeatTimes);
    } else {
      currStr += char;
    }

    console.log("numStack: ", numStack);
        console.log("strStack :", strStack);
  }

  return currStr;
};

const s = "3[a2[c]]";

console.log(decodeString(s));
