/*
  Given a positive integer n, the task is to find how many steps it takes for this number to reach 1 after performing the following two operations:-
  If n is even, then n = n/2.
  If n is odd, then n = 3*n + 1.
  Repeat the above steps until it becomes 1.
*/

let memo = {1:0}

function collatzSteps(n) {
  if (Object.keys(memo).includes(n)) return memo[n];

  let steps = 0;

  while(n != 1){
    if(n % 2 == 0){
      n /= 2;
    }else{
      n = (3*n) + 1;
    }
    steps++;

    memo[n] = steps;
  }

  return steps;
}

