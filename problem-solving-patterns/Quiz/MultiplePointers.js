function areThereDuplicates () {
    const arr = Object.values(arguments);
    const lookup = {};
    let left = 0;
    let right = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[left] !== arr[right]) {
            left = right;
        } 

        const elm = arr[left];
        if(lookup[elm]) {
            return true
        } else {
            lookup[elm] = 1;
        }
        right++;
    }

    return false;
}


console.log(areThereDuplicates(1, 1, 3));

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // 