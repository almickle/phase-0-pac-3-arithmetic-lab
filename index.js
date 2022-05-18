function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(n) {
   return ++n
}

function decrement(n) {
    return --n
}
//let num = "55"
//let base = 10
function makeInt(a) {
    return parseInt(a.toString(), 10);
}

//makeInt();
//console.log(`The parsed number is ${num}`);

//let numo = "63.43"

function preserveDecimal(a) {
    return parseFloat(`${a}`);
}

//preserveDecimal();
//console.log(`My float is ${numo}`);