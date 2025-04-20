function main(H, A) {
    let h = H;
    let ret = 0;
    while(h>0){
        h-=A;
        ret++;
    }
    return ret;
}
console.log(main(10, 4));
