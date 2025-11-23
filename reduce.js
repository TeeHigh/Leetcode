// nums = [3,0,1,2];

// nums.sort((a,b) => a -b); // nlogn

// let index = 0;

// for(let i = 0; i <= nums.length; i++ ){ //O(n)
//   if(nums[i] == index){
//     index++;
//     continue;
//   }else{
//     console.log(index);
//     break;
//   }
// }

// /**
//  * sum of n[0] to n[n.length - 1]
//  * sum of 0 to n.length
//  */

// const currSum = nums.reduce((acc, curr) => acc + curr, 0);
// const expectedSum = (nums.length * (nums.length + 1)) / 2;

// console.log("missing number is: ", expectedSum - currSum);


// let fullString = "";

// const substring = "ab"
// const sub = substring.repeat(3);

// fullString += sub;

// console.log(fullString);

const map = {
  "a": 1,
  "b": 2,
  "c": 3
}

for(let key in map){
  // console.log(key);
  console.log(map[key]);
}