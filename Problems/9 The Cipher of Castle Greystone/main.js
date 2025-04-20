function main(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let oddCount = 0;
  for (const count of freq.values()) {
    if (count % 2 !== 0) oddCount++;
  }

  return oddCount <= 2 ? "YES" : "NO";
}

//* Testcase
console.log(main("abca"));
console.log(main("abcd"));
