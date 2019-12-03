// Task 6.4.
// Create function with 2 string params. 
// It must check if letters in the first correspond to the number of matches in second and return %.

function checkLetters(firstParam, secondParam) {
    console.log(firstParam, secondParam);

    let firstArr = firstParam.toLowerCase().split('');
    let secondArr = secondParam.toLowerCase().split('');
    console.log(firstArr, secondArr);

    let firstLength = firstArr.length;
    let secondLength = secondArr.length;
    console.log(firstLength, secondLength);

    let countArr = [];

    for(let i = 0; i < firstLength; i++) {
        if (firstArr[i] === secondArr[i]) {
            countArr.push(firstArr[i]);
        }
    }
    console.log(countArr);

    let result = countArr.length/firstLength * 100 + "%";        
    
    console.log("Percent of matches:", result);
}
checkLetters("catw", "letr");