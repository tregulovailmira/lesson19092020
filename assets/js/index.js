'use strict';

let i = 1;
console.time('timeout')
let timeOutId = setTimeout(function logNumbersWithTimeout() {
    console.log(i);
    i++;
    timeOutId = setTimeout(logNumbersWithTimeout, 100);
    if (i > 20) {
        clearInterval(timeOutId);
        console.timeEnd('timeout');
    }
}, 100);

console.time('interval')
logNumbersWithInterval();

function logNumbersWithInterval() {
    let i = 1;
    const intervalId = setInterval(() => {
        console.log(i);
        i++;

        if (i > 20) {
            clearInterval(intervalId);
            console.timeEnd('interval');
        }
    }, 100);
}