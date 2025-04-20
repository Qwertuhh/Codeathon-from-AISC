function maxRunsInConsecutiveOvers(N, K, runs) {
  let maxRuns = 0;
  let currentWindowSum = 0;

  for (let i = 0; i < K; i++) {
    currentWindowSum += runs[i];
  }
  maxRuns = currentWindowSum;

  for (let i = K; i < N; i++) {
    currentWindowSum += runs[i] - runs[i - K];
    maxRuns = Math.max(maxRuns, currentWindowSum);
  }

  return maxRuns;
}

//? Testcases
const N = 8,
  K = 3;
const runs = [4, 10, 8, 2, 15, 6, 20, 3];
console.log(maxRunsInConsecutiveOvers(N, K, runs)); 
