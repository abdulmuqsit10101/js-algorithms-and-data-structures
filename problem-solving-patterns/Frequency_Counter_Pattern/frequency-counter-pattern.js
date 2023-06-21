// ! This is to replace the noob method / nested loops and the decrease the complexity from O(n^2) to O(n);

// * 1. create an object (frequencyCounter1);
// * 2. create another object (frequencyCounter2);

// * 3. map through first array and make them a key of frequencyCounter1 with value number of times it's repeating in the array;
// * 4. map through second array and make them a key of frequencyCounter2 with value number of times it's repeating in the array;

// * 5. map through frequencyCounter1's keys
// * 6. check if the frequencyCounter1's key is also present in frequencyCounter2, if not return false
// * 7. check if the frequencyCounter1's key's value is same to frequencyCounter2's key's value, if not return false

// ! Note: In Point 7 we are doing this to make sure the repeated value frequencyCounter1 is equal to repeated value of frequencyCounter2

const ARR_1 = [1, 5, 2, 6, 5, 8];
const ARR_2 = [25, 1, 64, 36, 4, 25];

function same(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (num of arr1) {
        const squaredKey = num ** 2;
        frequencyCounter1[squaredKey] = (frequencyCounter1[squaredKey] || 0) + 1;
    }

    for (num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
    }

    for (const key in frequencyCounter1 ) {
        if(!frequencyCounter2.hasOwnProperty(key) || frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same(ARR_1, ARR_2));
