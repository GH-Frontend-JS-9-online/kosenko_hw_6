// Tasl 6.3.
// Create a function that will replace all number dividing three with ‘foo’, 
// dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.

const firstNum = 0;
const lastNum = 21;
const arr = [];

function replaceNumbers() {
    for(let i = firstNum; i <= lastNum; i++) {
        if ((i%3 === 0) && (i%7 === 0))  {
            arr.push("foobar");
        } else if (i%7 === 0) {
            arr.push("bar");
        } else if (i%3 === 0) {
            arr.push("foo");
        } else arr.push(i);
    }
    console.log(arr);
}
replaceNumbers();