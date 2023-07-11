const SAMPLE_1 = [1,1,1,1,1,2]; // 2
const SAMPLE_2 = [1,2,3,4,4,4,7,7,12,13]; // 7
const SAMPLE_3 = []; // 0
const SAMPLE_4 = [-2, -1,-1,0,1]; // 4


// both pointers are at the same point

// rigth will move until we have a different number in the array;
// when we will get a different number left will become same to right and 


const countUniqueValue = (arr) => {
    let leftPointer = 0;
    let rightPointer = 0;
    const uniqueValueObj = {}

    if(arr.length === 0) {
        return 0;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[leftPointer] !== arr[rightPointer]) {
            leftPointer = rightPointer;
        } 
        const elm = arr[leftPointer];
        uniqueValueObj[elm] = (uniqueValueObj[elm] || 0) + 1;
        rightPointer++;
        
    }

    return Object.keys(uniqueValueObj).length;
}

console.log(countUniqueValue(SAMPLE_4))