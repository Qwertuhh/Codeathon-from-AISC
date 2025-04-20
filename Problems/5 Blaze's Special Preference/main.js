function main(s) {
  const char = s.split("").sort()[0];
  return char.repeat(s.length);
}

//* Test case
console.log(main("blaze"));
