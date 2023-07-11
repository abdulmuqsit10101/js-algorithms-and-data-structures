
function sameFrequency(num1, num2) {
    let lookup = {};
    const str1 = num1.toString();
    const str2 = num2.toString();

    if(str1.length !== str2.length){
        return false;
    }
    
    for(let elm of str1) {
        if(lookup[elm]){
            lookup[elm] = lookup[elm] + 1;
        } else {
            lookup[elm] = 1;
        }
    }

    for(let i = 0; i < str2.length; i++) {
        const elm = str2[i];
        if(!lookup[elm]) {
            return false;
        } else {
            lookup[elm] = lookup[elm] - 1;
        }
    }

    return true;
}


console.log(sameFrequency(22,222));
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false