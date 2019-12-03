// Task 6.2.
// Create function which will return function with callback in arguments

function hello(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function bye() {
    setTimeout ( function() {
        console.log(`Goodbye my dear friend!`);
    }, 1000);
}

hello("Olya", bye);