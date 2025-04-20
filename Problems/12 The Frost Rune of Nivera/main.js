function largestDivisibleBy3(s) {
  const digits = s.split("").map(Number);
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  if (sum % 3 === 0) {
    return digits.sort((a, b) => b - a).join("");
  }

  const remainderGroups = [[], [], []];
  for (const digit of digits) {
    remainderGroups[digit % 3].push(digit);
  }

  remainderGroups[1].sort((a, b) => a - b);
  remainderGroups[2].sort((a, b) => a - b);

  let toRemove = [];
  if (sum % 3 === 1) {
    if (remainderGroups[1].length > 0) {
      toRemove.push(remainderGroups[1][0]);
    } else if (remainderGroups[2].length > 1) {
      toRemove.push(remainderGroups[2][0], remainderGroups[2][1]);
    }
  } else if (sum % 3 === 2) {
    if (remainderGroups[2].length > 0) {
      toRemove.push(remainderGroups[2][0]);
    } else if (remainderGroups[1].length > 1) {
      toRemove.push(remainderGroups[1][0], remainderGroups[1][1]);
    }
  }

  if (toRemove.length === 0) return "-1";

  const result = [];
  let removedCount = 0;
  for (const digit of digits) {
    if (toRemove.includes(digit) && removedCount < toRemove.length) {
      toRemove.splice(toRemove.indexOf(digit), 1);
      removedCount++;
    } else {
      result.push(digit);
    }
  }

  const finalNumber = result.sort((a, b) => b - a).join("");
  return finalNumber.length > 0 ? finalNumber : "-1";
}

//? Test cases
console.log(largestDivisibleBy3("3124"));
console.log(largestDivisibleBy3("111")); 
console.log(largestDivisibleBy3("7"));
