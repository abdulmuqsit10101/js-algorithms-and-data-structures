// ? Reducing the time complexity from O(n^2) to O(n).

// * We are going to get rid of the nested loop.
// * We will have follow the multiple pointers pattern approach.

// ? MULTIPLE POINTERS Pattern

// TODO: 1. First of all we will sort the array to make sure the smallest numbers is on the start and the largest if on the end of the array.

// TODO: 2. We have two pointers 1 for the rigth side and 1 for the left.

// NOTE: Here we will play with the indexes instead of the direct numbers/elements of the array. 

// TODO: 3. We will select the 0 as the leftPointer and array's length - 1 as the rightPointer

// TODO: 4. We will make a while loop to run until the left pointer side is less than the rigth pointer.
// * Inside of the loop we will calculate the sum of the pointed numbers 
// * If sum is 0 we will return the pointed numbers pair.

// * If sum is less than 0 it means our left pointer has bigger value so we will increase the left pointer value ( i.e. leftPointer++ ). 

// NOTE: We are doing this to get more close to the 0. as  -4, 2 is -2 so If we increase the left pointer --
// -- to the next number maybe -3 is going to make the result more closer to 0 and then -2 will make it a 0.


// * If sum is greater than 0 it means our right pointer has bigger value so we will decrease the right pointer value ( i.e. rightPointer-- ). 

// NOTE: We are doing this to get more close to the 0. as  -2, 4 is 2 so If we decrease the right pointer to the next number maybe 3 is going to make the result more closer to 0 and then 2 will make it a 0.


const SAMPLE_1 = [-3,-2,-1,0,1,4,3,4, 5];
const SAMPLE_2 = [-2, 0, 1, 3];
const SAMPLE_3 = [1, 2, 3];
const SAMPLE_4 = [1, -34, 3, 0, 0, 1, -1,  34, 2, 3, 898 ];

const inputSample = SAMPLE_4;

const sort = (array) => {
    return array.sort(function(a,b) {return a - b});
}

const sumZero = (unsortedArr) => {
    const array = sort(unsortedArr);
    
    let leftPointer = 0;
    let rightPointer = array.length - 1;

    while(leftPointer < rightPointer) {
        const sum = array[leftPointer] + array[rightPointer];
        if(sum === 0){
            return [array[leftPointer], array[rightPointer]]
        }
        else if (sum < 0) {
            leftPointer++;
        }
        else {
            rightPointer--;
        }
    }
}

console.log(sumZero(inputSample));