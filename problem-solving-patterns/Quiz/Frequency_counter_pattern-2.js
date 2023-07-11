function areThereDuplicates () {
    const arr = Object.values(arguments);
    let lookup = {};
    
    for(const num of arr) {
        if(lookup[num]) {
            return true;
        } else {
            lookup[num] = 1;
        }
    }

    return false;

}


console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // 