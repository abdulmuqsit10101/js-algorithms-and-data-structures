
// ! this is a pro because the complexity here is O(n) instead of O(n^2)

// * If length of WORD_1 is not equals to WORD_2 lenght ( return false )

const WORD_1 = "texttwisttime";
const WORD_2 = "timetwisttext";

function validAnagram(str1, str2) {

    if(str1.length !== str2.length){
        return false;
    }
    
    const lookup = {};

    for(const letter of str1){
        // if letter is on the object increment it by 1 and if not in the object then set it to 1;
        lookup[letter] = (lookup[letter] || 0) + 1;
    }

    for(const letter of str2){
        // If letter is in in the object ( OR if it's 0 ) return false
        if(!lookup[letter]){
            return false;
        } else {
            // If the letter is in the object decrease it by one ( with this it will finally become 0 which will make the if condition true )
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram(WORD_1, WORD_2));