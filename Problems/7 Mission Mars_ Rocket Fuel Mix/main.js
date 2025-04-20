function main(n, k, concentrations) {
  concentrations.sort((a, b) => a - b);

  let low = 0,
    high = n - 1;
  if (concentrations[high] - concentrations[low] <= k) {
    return 0; 
  }

  if (
    concentrations[high - 1] - concentrations[low] <= k ||
    concentrations[high] - concentrations[low + 1] <= k
  ) {
    return 1; 
  }

  return -1; 
}


//* Testcase
console.log(main(5, 5, [4, 7, 8, 10, 6])); 
