
// ! this is a pro because the complexity here is O(n) instead of O(n^2)

// * If length of WORD_1 is not equals to WORD_2 lenght ( return false )

// * loop through the arr1 to push keys into frequencyCounter1;
// * loop through the arr2 to push keys into frequencyCounter2;

// * loop through the frequencyCounter1 keys
// * If frequencyCounter1 key is not in the frequencyCounter2 object return false;
// * If frequencyCounter1 key's value is not in the frequencyCounter2 key's value return null;

const WORD_1 = "texttwisttime";
const WORD_2 = "timetwisttext";

function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(char of arr1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for(char of arr2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    for(const key in frequencyCounter1){
        if(!frequencyCounter2.hasOwnProperty(key) || frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram(WORD_1, WORD_2));