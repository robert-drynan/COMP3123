// Robert Drynan - 101460767

// function gretter(myArray, counter){
//     var greetText = 'Hello ';
//     for (var index = 0; index < myArray.length; index++){
//         console.log(greetText + myArray[index]);
//     }
// }
//1
const gretter = (myArray) => {
    const greetText = 'Hello ';
    for (const name of myArray){
        console.log(`${greetText}${name}`);
    }
};
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//2
const capitalize = (str) => {
    const [firstChar, ...rest] = str;
    return `${firstChar.toUpperCase()}${rest.join('')}`
};
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//3
const colors = ['red', 'green', 'blue']
const capitalizeColours = colors.map(capitalize)
console.log(capitalizeColours)

//4
var values = [1, 60, 34, 30, 20, 5]
const filteredNUmbers = (arr) => {
    return arr.filter(number => number >= 20);
};
const filterLessThan20 = filteredNUmbers(values)
console.log(filterLessThan20)

//5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const calculateProduct =  array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(calculateSum);
console.log(calculateProduct);

//6
class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} ${this.year}.`;
    }
}
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of ${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());