/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let stack = [];
  let ans = new Array(n).fill(0);

  // for (let i = temperatures.length - 1; i >= 0; i--) {
  //   let topElem = stack[stack.length - 1];

  //   if (stack.length == 0) {
  //     stack.push(temperatures[i]);
  //     ans[i] = 0;
  //     lastIndex = i;
  //   } else if (temperatures[i] < topElem) {
  //     stack.push(temperatures[i]);
  //     const currDiff = lastIndex - i;
  //     ans[i] = currDiff;
  //     lastIndex = i;
  //   } else if (temperatures[i] == topElem) {
  //     ans[i] = ans[i + 1] + 1;
  //   } else if (temperatures[i] > topElem) {
  //     while (stack.length > 0 && temperatures[i] > stack[stack.length - 1]) {
  //       stack.pop();
  //     }

  //     stack.length
  //       ? (ans[i] = temperatures.indexOf(stack[stack.length - 1]) - i)
  //       : (ans[i] = 0);
  //     stack.push(temperatures[i]);

  //     lastIndex = i;
  //   }
  // }

  for(let i = n - 1; i >= 0; i--){
    while(stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]){
      stack.pop();
    }
    if(stack.length > 0 && temperatures[i] < temperatures[stack[stack.length - 1]]){
      ans[i] = stack[stack.length - 1] - i;
    }
    
    stack.push(i);
  }

  return ans;
};

const temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures));