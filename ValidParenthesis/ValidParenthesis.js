function isValid(s){
  if (s.length < 2) return false;

  const parens = {
    "}": "{",
    ")" : "(",
    "]" : "["
  };

  const stack = [];
  
  for(i in s){
    const topElement = stack[stack.length - 1];
    const currElement = s[i];
    console.log("curr: ", currElement);

    // if(parens[currElement] == topElement){
    //   stack.pop();
    // }
    // else{
    //   stack.push(currElement);
    // }
    if(Object.values(parens).includes(currElement)){
      stack.push(currElement);
    }else{
      if(parens[currElement] == topElement){
        stack.pop();
      }
      else{
        return false;
      }
    }
  }

  console.log(stack);
  return stack.length === 0;
}

console.log(isValid(")(){}"));
console.log(isValid("()"));