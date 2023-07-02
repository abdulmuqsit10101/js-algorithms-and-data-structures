// ! This a noob way ( pattern ) because here we are using the nested loops so the time complexity is O(n^2)

const SAMPLE_1 = [-3,-2,-1,0,1,4,3,4, 5];
const SAMPLE_2 = [-2, 0, 1, 3];
const SAMPLE_3 = [1, 2, 3];

const inputSample = SAMPLE_1;

const sort = (array) => {
    return array.sort(function(a,b) {return a - b});
}

const sumZero = (unsortedArr) => {
    const array = sort(unsortedArr);
    
    for(let  i = 0; i < array.length; i++) {
        // * selectedNum is the selected element from left side of the array one by one
        const selectedNum = array[i];

        // * If the selectedElement has been through all other negative nums it will get to 0 so there is no need to continue
        if(selectedNum === 0) return;

        // * this is the nested loop and this is working in the reverse pattern ( descending order )
        for(let j = array.length - 1; j >= 0; j--) {

            // * pointer is the selected element from right to left in array one by one
            const pointer = array[j];

            // * when the sum of selected left number and the moving index's number ( pointer ) is 0 we have our pair.
            if(selectedNum + pointer === 0) {
                return [selectedNum, pointer];
            }
        }
    }
}

console.log(sumZero(inputSample));