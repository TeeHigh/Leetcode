function isCoolString(s) {
  freq = {};

  if(s.length == 0) return false;

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let counts = Object.values(freq);
  // console.log("freq: ", freq);
  // console.log("counts: ", counts);

  return counts.every((v) => v == counts[0]);
}

function canBeCoolString(s) {
  let freq = {};
  let countFreq = {};

  if(!s.length) return false;

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const count = Object.values(freq);

  for (let char of count) {
    countFreq[char] = (countFreq[char] || 0) + 1;
  }

  const keys = Object.keys(countFreq).map(Number);
  if (keys.length == 1) return true;
  if (keys.length > 2) return false;

  const [f1, f2] = keys;
  const c1 = countFreq[f1], c2 = countFreq[f2];

  console.log(keys);
  console.log(Math.abs(f1 - f2));
  console.log(Math.max(countFreq[f1], countFreq[f2]));

  if((f1 == 1 && c1 == 1) || (f2 == 1 && c2 == 1)){
    return true;
  }



  if(Math.abs(f1 - f2) == 1){

    return (f1 > f2 && c1 == 1 || f2 > f1 && c2 == 1);
  }

}

let s = "aabbbcc";

console.log(isCoolString(s));
console.log(canBeCoolString(s));


/*
  freq = {
    a: 2,
    b: 3,
    c: 2,
  }
  countFreq = {
    2: 2,
    3: 1,
  }
}
*/