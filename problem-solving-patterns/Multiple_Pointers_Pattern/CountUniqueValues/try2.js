const SAMPLE_1 = [1,1,1,1,1,2]; // 2
const SAMPLE_2 = [1,2,3,4,4,4,7,7,12,13]; // 7
const SAMPLE_3 = []; // 0
const SAMPLE_4 = [-2, -1,-1,0,1]; // 4

const inputSample = SAMPLE_4;

const sort = (array) => {
    return array.sort(function(a,b) {return a - b});
}


// Solution 2 ( Multiple Pointers pattern )
const countUniqueValues = (unsortedArr) => {
    const array = sort(unsortedArr);
    let recentPointedNumber;
    let uniqueValuedArray = [];

    for(let i = 0; i < array.length; i++) {
        const num = array[i];

        if(num !== recentPointedNumber) {
            uniqueValuedArray.push(num);
        } 
        
        recentPointedNumber = num;
    }

    return uniqueValuedArray.length;
    
}

console.log(countUniqueValues(inputSample));