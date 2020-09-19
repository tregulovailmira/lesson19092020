'use strict';

console.time('timeout');
logNumbersWithTimeout();

console.time('interval')
logNumbersWithInterval();

function logNumbersWithTimeout() {
    let i = 1;
    let timeoutId = setTimeout(function logNumbers() {
        console.log(i);
        i++;
        timeoutId = setTimeout(logNumbers, 100);
        if (i > 20) {
            clearInterval(timeoutId);
            console.timeEnd('timeout');
        }
    }, 100);
}

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