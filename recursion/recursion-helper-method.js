function collectOddValues(arr) {
    let result = [];

    function helper(array) {
        if(array.length === 0) {
            return;
        } 
        else if (array[0] % 2 !== 0) {
            result.push(array[0])
        }
        helper(array.splice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));