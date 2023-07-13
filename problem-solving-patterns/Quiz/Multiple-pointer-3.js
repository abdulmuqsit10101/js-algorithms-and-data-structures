function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let lastPointer = 0;
    for (let i = 0; i < str2.length; i++){
        let strChar = str1[i];
        
        if(strChar === str2[i]) {
            lastPointer = i;
        }


    }
}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false 

console.log(isSubsequence('abc', 'abracadabra'))


// loop through for the length of 2nd array
// make pointe


// 