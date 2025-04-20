function main(s){
    let obj = {};
    let ret = 0;
    for(const c of new Set(s)){
        obj[c] = 0;
    }
    for(const c of s){
        obj[c] += 1;
    }
    for(const c in obj){
        ret += obj[c] - 1;
    }

    return ret
}

//* Testcase

console.log(main("aabbcc"))