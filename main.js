/**
 * Map takes each element from the array, does something to it, and returns a new array
 * 
 */


const myMap = (array, callback) => {

    const startArray = []
    for(let i=0; i < array.length; i++) {
       let value = array[i];
       startArray.push(callback(value));
    } 
    return startArray;

}

const double = (num) => {
    return num * 2;

}

const myArray = [6, 12, 24, 48];

console.log(myMap(myArray, double))


// building array.reduce from scratch



