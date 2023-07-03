const SAMPLE_1 = [1,1,1,1,1,2]; // 2
const SAMPLE_2 = [1,2,3,4,4,4,7,7,12,13]; // 7
const SAMPLE_3 = []; // 0
const SAMPLE_4 = [-2, -1,-1,0,1]; // 4

const inputSample = SAMPLE_4;

const sort = (array) => {
    return array.sort(function(a,b) {return a - b});
}

// Multiple Pointers Pattern
const countUniqueValues = (unsortedArr) => {
    // * InCase the array is not sorted, So we are sorting
    const array = sort(unsortedArr);
    const uniqueValuedArray = [];
    
    let firstPointer = 0;
    let secondPointer = 0;

    if(array.length > 0) {
        uniqueValuedArray[0] = array[firstPointer];
    }

    while(secondPointer < array.length) {
        // * if the first pointed number is same as 2nd continue to increase the secondpointerValue untill the value doesn't match anymore (until else runs )
        if(array[firstPointer] === array[secondPointer]) {
            secondPointer++;
        } else {
            // * when the value differes just move the current 2nd pointer's value to the uniqueValuedArray and jump the first --
            // -- pointer to the same index and then increase the 2nd pointer value to change it and so the process restarts in the while.
            const nextValue = array[secondPointer];
            uniqueValuedArray.push(nextValue);
            firstPointer = secondPointer;
            secondPointer++;
        }
    }

    return uniqueValuedArray.length;
    
}

console.log(countUniqueValues(inputSample));