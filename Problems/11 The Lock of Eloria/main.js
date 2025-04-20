function unlockVault(s) {
  const sortedString = s.split("").sort().join("");
  const reversedString = sortedString.split("").reverse().join("");

  if (sortedString !== reversedString) return sortedString;

  for (let i = 0; i < sortedString.length - 1; i++) {
    if (sortedString[i] !== sortedString[i + 1]) {
      const charArray = sortedString.split("");
      
      //? To swap
      [charArray[i], charArray[i + 1]] = [charArray[i + 1], charArray[i]];
      return charArray.join("");
    }
  }

  return "-1";
}

//? Test cases
console.log(unlockVault("aabb"));
console.log(unlockVault("aaa")); 
console.log(unlockVault("aab")); 
