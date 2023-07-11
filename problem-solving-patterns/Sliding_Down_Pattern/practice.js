
function maxSubArraySum(arr, num) {
    // console.log('arr => ', arr);
    let sum = 0;
    for(let i = 0; i < num; i++) {
        sum += arr[i];
    }
    let temp = sum;
    for(let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];
        sum = Math.max(temp, sum);
    }
    return sum;
}


console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))