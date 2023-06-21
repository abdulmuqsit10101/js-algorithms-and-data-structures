
// ! this is a noob because the complexity here is O(n^2)
// * If length of WORD_1 is not equals to WORD_2 lenght ( return false )

// * loop through WORD_1 string.
// * if (char of WORD_1 is not in the WORD_2) return false;
// * else splice char from WORD_2;

const WORD_1 = "texttwisttime";
const WORD_2 = "timetwisttext";

function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    for(char of arr1) {
        const currentIndex = arr2.indexOf(char);
        if(currentIndex === -1) {
            return false;
        }
        arr2.splice(currentIndex, 1)
    }
    return true;
}

console.log(validAnagram(WORD_1, WORD_2));