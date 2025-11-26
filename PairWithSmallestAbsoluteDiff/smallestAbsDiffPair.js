
const array = [24, 12, 34, 32, 64, 81, 47]
const array2 = [0, 0, 0, 0, 0, 0, 0]
const array3 = []

/*
1. sort array ()
2. iterate through array and compare adjacent values
3. if pair[i,j] = 0, set pair = [1, j], break
4. if pair[i,j] < next, update diff = pair[i,j]
*/


function smallestAbsDiffPair(s){
  if(s.length <= 1) return -1;

  let diff = Infinity;
  let pair = [];

  s.sort();

  for(let i = 0; i < s.length - 1; i++){
    const pairDiff = s[i+1] - s[i];

    if(pairDiff == 0){
      pair = [s[i], s[i+1]]
      break;
    }
    
    if(pairDiff < diff){
      diff = pairDiff;
      pair = [s[i], s[i+1]];
    }
  }

  return pair;
}

console.log(smallestAbsDiffPair(array));