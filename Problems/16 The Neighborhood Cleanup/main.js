function canDistributeBags(N, C) {
  const totalCapacity = C.reduce((sum, capacity) => sum + capacity, 0);
  console.log(totalCapacity, N)
  return totalCapacity >= N ? "YES" : "NO";
}

//? Testcase
console.log(canDistributeBags(10, [5, 3, 2])); 
console.log(canDistributeBags(15, [4, 5, 6])); 
