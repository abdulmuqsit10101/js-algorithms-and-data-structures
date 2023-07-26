// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
    if (array.length === 1) return array[0];
    return array[0] * productOfArray(array.splice(1));
}

console.log(productOfArray([1,2,3]))