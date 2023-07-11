// ! Here the time compexity is O(n^2)

// * Calculate maxSubArraySum


const maxSubArraySum = (array, setLenght) => {

    if(setLenght > array.length) {
        return null;
    }

    let maximumNum = -Infinity;
    
    for(let i = 0; i < array.length; i++) {
        const subSet = [];
        let sum = 0;
        
        if((array.length) - i >= setLenght) {
            for(let j = i ; j < setLenght + i; j++) {
                sum += array[j];
                subSet.push(array[j]);
            }
            if(sum > maximumNum){
                maximumNum = sum;
            }
        }
    }

    return maximumNum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))

