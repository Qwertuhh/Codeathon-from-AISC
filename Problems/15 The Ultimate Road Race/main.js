function main(v){
    totalrace = v.reduce((d,sum) => d + sum);
    return totalrace - Math.max(...v);
}

console.log(main([5, 10, 2, 6, 7]));
console.log(main([1, 1, 1, 1, 1]));