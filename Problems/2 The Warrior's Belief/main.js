function main(n, lifeForces) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (lifeForces[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

//* Example Output
console.log(main(5, [1, 2, 3, 4, 5]));
