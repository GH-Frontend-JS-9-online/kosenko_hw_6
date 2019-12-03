// Task 6.1. 
// Find in array: sum, min and max, replace min and max - create custom functions

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Main array =", arr);

// Find SUM in array
function sum() {
    let result = arr.reduce((sum, current) => sum + current, 0);
    console.log("sum =", result);
}
sum();

// Find MIN in array
function min() {
    let result = Math.min(...arr);
    console.log("min =", result);
}
min();

// Find MAX in array
function max() {
    let result = Math.max(...arr);
    console.log("max =", result);
}
max();

// Replace MIN and MAX
const newArr = arr.slice();
function replaceMinMax() {
    let minArr = Math.min(...arr);
    let maxArr = Math.max(...arr);

    for(let i = 0; i < newArr.length; i++) {
        if (newArr[i] === minArr) {
            newArr[i] = maxArr;
        } else if (newArr[i] === maxArr) {
            newArr[i] = minArr;
        }
    }
    console.log("New array with replace MIN and MAX =", newArr);
}
replaceMinMax();
console.log("Main array =", arr);