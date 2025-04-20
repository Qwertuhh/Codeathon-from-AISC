function countWaysToSum(n, X) {
  const dp = Array.from({ length: n + 1 }, () => Array(X + 1).fill(0));
  dp[0][0] = 1;

  for (let rolls = 1; rolls <= n; rolls++) {
    for (let sum = 1; sum <= X; sum++) {
      for (let face = 1; face <= 6; face++) {
        if (sum - face >= 0) {
          dp[rolls][sum] += dp[rolls - 1][sum - face];
        }
      }
    }
  }

  return dp[n][X];
}

//* Testcase
console.log(countWaysToSum(2, 7)); 
console.log(countWaysToSum(3, 10)); 
console.log(countWaysToSum(1, 4)); 
