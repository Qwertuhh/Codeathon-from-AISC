function minOperationsToMakeBeautiful(s) {
  let operations = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (s.slice(i, i + 3) === "010") {
      operations++;
      i += 2;
    }
  }
  return operations;
}

//* Test cases
console.log(minOperationsToMakeBeautiful("0101010"));
console.log(minOperationsToMakeBeautiful("1111"));
console.log(minOperationsToMakeBeautiful("010011"));
