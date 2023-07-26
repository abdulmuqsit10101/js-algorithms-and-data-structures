// function countDown(num) {
//     if(num <= 0) {
//         console.log('All done!');
//         return;
//     }
//     console.log(num);
//     num--
//     countDown(num);
// }

// countDown(5);



// function sumRange(num) {
//     if(num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// console.log(sumRange(4));


function fictorial(num) {
    // if(num === 1) return;
    if(num === 1) return 1;
    return num * fictorial(num - 1);
        // let say num is 4, this is how it will work
        // 4 * (3 * (2 * 1))   
        // 4 * (3 * 2)
        // 4 * 6
        // 24, which is the return value of this recursion after the base point is reached.
        
}

console.log('fictorial => ', fictorial(4));
console.log('fictorial => ', fictorial(5));
console.log('fictorial => ', fictorial(10));
console.log('fictorial => ', fictorial(12));

// 1 * ( 1 - 1 ) 