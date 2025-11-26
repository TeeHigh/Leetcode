/*
s = abcabbdce

uniqueCharsArr = []
uniqueCharsObj = {}
nonUniqueCharsObj = {}

1. initialize array and 2 hashmaps
2. traverse s
  if s[i] in nonUniqueCharsObj:
    continue;
  else if s[i] in uniqueCharsObj:
    remove uniqueCharsArr[uniqueCharsObj[s[i]]];
    nonUniqueCharsObj[s[i]] = i
    remove uniqueCharsObj[s[i]]
  else:
    uniqueCharsArr.push(s[i]);
    uniqueCharsObj[s[i]] = i

3. return uniqueCharsArr[0];

*/

function firstUnique(s){
  let uniqueCharsArr = [];
  let uniqueCharsObj = {};
  let nonUniqueCharsObj = {};

  for(let i in s){
    let currChar = s[i];

    if(s[i] in nonUniqueCharsObj){
      continue;
    }
    else if(currChar in uniqueCharsObj){
      console.log(uniqueCharsObj[currChar]);
      uniqueCharsArr.splice(Number(uniqueCharsObj[currChar]), 1);
      nonUniqueCharsObj[currChar] = i;
      delete uniqueCharsObj[currChar];
    }else{
      uniqueCharsArr.push(currChar);
      uniqueCharsObj[currChar] = i;
    }

    // console.log(`${currChar}, non unique chars obj at ${currChar}: ${nonUniqueCharsObj[currChar]}`);
    console.log(`uniqueCharsArr at ${currChar}: ${uniqueCharsArr}`);
    console.log(`uniqueCharsObj at ${currChar}: ${JSON.stringify(uniqueCharsObj)}`);
    console.log(`nonUniqueCharsObj at ${currChar}: ${JSON.stringify(nonUniqueCharsObj)}`);
    console.log(`-----------------------------------------------------`);
  }

  return uniqueCharsArr[0] ?? "null";
}

const s = "abcabbdce";
console.log(firstUnique(s));