const SAMPLE_1 = [-3,-2,-1,0,1,4,3,4, 5];
const SAMPLE_2 = [-2, 0, 1, 3];
const SAMPLE_3 = [1, 2, 3];
const SAMPLE_4 = [1, -34, 3, 0, 0, 1, -1,  34, 2, 4, 898 ];

const sortArr = (arr) => {
    return arr.sort(function(a, b){return a - b})
}

const sortedArr = sortArr(SAMPLE_4);
const sumZero = (sortedArr) => {
    let left = 0;
    let right = sortedArr.length - 1;
    while(left < right){
        const sum = sortedArr[left] + sortedArr[right];
        if(sum === 0){
            return [sortedArr[left], sortedArr[right]]
        } else if (sum > 0){
            right -= 1
        } else if (sum < 0) {
            left += 1
        }
    }
}

console.log('sortedArr => ', sumZero(sortedArr))