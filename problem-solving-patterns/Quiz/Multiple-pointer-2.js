// ? We can make 2 pointers 1 will move from left to right and one will move from right to left in the array until leftPointer < rightPointer
// ? We will take average of values ( what's on the pointer ) 
// ? If the average is less than average We need to move the left pointer to right by 1 ( leftPointer++ )
// 



function averagePair(arr, targetAverage){
    
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        const tempAverage = (arr[leftPointer] + arr[rightPointer]) / 2;

        if (tempAverage === targetAverage) {
            return true
        } else if (tempAverage < targetAverage) {
            leftPointer++
        } else if (tempAverage > targetAverage) {
            rightPointer--
        }
    }
    
    return false
}



// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false


console.log(averagePair([2, 6],4));



// 1,3,3,5,6,7,10,12,19

// (1 + 19) / 2 = 10 which is greater than the target array so we will move the right pointer to the left so that next time we can get less average value
// (1 + 12) / 2 = 6.5 which is less than the target array so we will increment the left pointer 
// (3 + 12) / 2 = 7.5 which is still less than the target to will move the leftPointer to right again.
// (3 + 12) / 2 = 7.5 which is still less than the target to will move the leftPointer to right again.
// (5 + 12) / 2 = 8.5 which is greater than the target so we will move rightPointer to the left now 
// (5 + 10) / 2 = 7.5 which is less then targets os we will move left pointer to the right and so 
// (6 + 10) / 2 = 8 true
