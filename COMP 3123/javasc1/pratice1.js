//Robert Drynan

//#1
function capFirstLetter(str){
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
let text = "the quick brown fox jumps over the lazy dog";
console.log(capFirstLetter(text))

//#2
function lgNumber(num){
    return Math.max(...num)
}

let numbers = [2, 11, 5, 7, 7, 9, 12]
console.log("The largest number in the set given is",lgNumber(numbers))

//#3
function lastThreeFront(str){
    if (str.length <= 3) {
        return "The string must be longer than 3 characters";
    }
    let lThree = str.slice(-3);
    let rest = str.slice(0, -3);
    return lThree + rest;
}

console.log(lastThreeFront("Python"))
console.log(lastThreeFront("the"))

//#4
function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
}}

console.log(angleType(23));
console.log(angleType(90));
console.log(angleType(102));
console.log(angleType(180));