// ? We are using this approach to reduce the time complexity to O(n)

// Calculate maxSubArraySum

// 2,6,9,2,1,8,5,6,3

// first loop will run for setLength (3) Times and will sum the first subset elements and store them in a max variable

// 2nd loop will start from setLength (3) and will run until it reaches the (array length - 1)
// We will add the indexed Element value to sum and will remove the (i - (setLength)) (3 - 3) 1 

// so it will go like this 

// first maxSum value is 2+6+9 = 17 
// now as mentioned for th 2nd loop we will start from setLenght (3) so i is setLenght and will run aaray lengh - 1t ( array.length - 1 ( 8 ) )
// inside of the 2nd loop we will add the indexed value array[i] to the max and will remove previous from start like array[i - num] which will be 0 for first loop and then 1 and so on and this will create the tempSum
// then we will put a Math.max and will update the maxSum with tempSum | maxSum like Math.max(tempSum, maxSum)
// return maxSum

const maxSubArraySum = (array, subsetLength) => {

    if(subsetLength > array.length) {
        return null;
    }

    let maxSum = 0;

    for(let i = 0; i < subsetLength; i++) {
        maxSum += array[i];
    }

    let tempSum = maxSum;

    for(let i = subsetLength; i < array.length; i++) {
        tempSum = tempSum + array[i] - array[i - subsetLength];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))