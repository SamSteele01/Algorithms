// Write a function that takes a string as an input and returns an object.
// Example:
//      Input = "aabcadbcb";
//      Output = {a:3, b:3, c:2, d:1};

function stringLetterCounter(input) {
    let inputArray = input.split("");
    let resultsObject = {};
    let key = "";
    for (i = 0; i < inputArray.length; i++) {
        key = inputArray[i];
        if (!(resultsObject.hasOwnProperty(key))) {
            resultsObject[key] = 1;
        }
        if (resultsObject.hasOwnProperty(key)) {
            resultsObject[key] += 1;
        }
    }
    return resultsObject;
}

// tests

let input = "aabcadbcb";
console.log(stringLetterCounter(input));
input = "arabjcakjdbkcbz";
console.log(stringLetterCounter(input));