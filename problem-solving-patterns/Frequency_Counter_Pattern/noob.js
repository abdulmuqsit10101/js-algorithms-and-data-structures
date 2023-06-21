// ! This is the noob way of solving an algorithm cause it make the complexity O(n^2);
// * most people use the nested loop 

const ARR_1 = [1, 3, 4, 5, 7, 4];
const ARR_2 = [9, 25, 1, 16, 49, 16];


// * 1. when the lenght is not matching which means all squared values are not available in the arr2, So we will return false.

// * 2. We will map through each element and then will check that elem's square index is -1, if yes then we will return false. 

// * 3. If the index of arr2's element ( arr1's squared value ) is not -1 then we will remove that element for the 2. ( this will make sure If we have 2 or more same elements it doesn't cause any issue and works fine )


function same (arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        const squaredVal = arr1[i] ** 2;
        const indexOfSquared = arr2.indexOf(squaredVal);
        if(indexOfSquared === -1) {
            return false;
        }
        // We are splicing to remove the visited element from the array to avoid any repeated value issue
        arr2.splice(indexOfSquared, 1); 
    }
    return true;
}

console.log(same(ARR_1, ARR_2));