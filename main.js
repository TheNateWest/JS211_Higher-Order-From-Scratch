// .map *************

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

// .reduce ***********

const foodPrices = [
    {name: 'Steak', price: 20.00},
    {name: 'Lobster', price: 27.00},
    {name: 'Salad', price: 10.00},
    {name: 'Chocolate Cake', price: 7.00},
]

let totalPrice = 






