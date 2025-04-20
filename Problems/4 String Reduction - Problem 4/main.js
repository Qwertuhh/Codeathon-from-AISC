function main(s) {
  let stack = [];
  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === "0" && char === "1") {
      stack.pop();
    } else {
      stack.push(char); 
    }
  }
  const result = stack.join("");
  return result.length > 0 ? result : "-1";
}

//* Testcase
console.log(main("11010101"));
console.log(main("011010"));
