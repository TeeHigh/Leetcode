const testArr = [-8, -6, -3, 0, 1, 4, 10, 16];
console.log(testArr);

function insertAtCorrectPosition(arr, num) {
  if (arr.length === 0) {
    arr.push(num);
    return arr;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    console.log("left: ", left);
    console.log("right: ", right);

    let midPoint = Math.floor((right + left) / 2);

    if (arr[midPoint] === num) {
      arr.splice(midPoint, 0, num);
      return arr;
    }else if(arr[midPoint] < num) {
      left = midPoint + 1;
    }else {
      right = midPoint - 1;
    }
  }

  arr.splice(right, 0, num);
  return arr;
}

console.log(insertAtCorrectPosition(testArr, 15));
