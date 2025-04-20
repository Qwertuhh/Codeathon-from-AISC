function main(str) {
    const strArr = str.split("");
    let n = str.toUpperCase().length;
    let ret = 0;
    if(strArr[n-1] !== "T"){
        ret++;
    } 
    if(strArr[n-2] !== "R"){
        ret++;
    } 
    if(strArr[n-3] !== "A"){
        ret++;
    } 
    return ret;
}

//* Test
console.log(main("THEGREATBOOK"));
console.log(main("MASTERPIECEART"));
console.log(main("POETRYBARK"));