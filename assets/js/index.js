'use strict';

fetch('../../user.json')
    .then((res) => res.json())
    .then((users) => {
        const list = document.createElement("ul");
        const [body] = document.getElementsByTagName('body');
        body.append(list);
        const listItems = users.map((user) => {
            const userInfo = [];
            for(const [key, value] of Object.entries(user)){
                userInfo.push(` ${key}: ${value}`);
            }

            const li = document.createElement('li');
            li.textContent = userInfo.toString();
            return li;
        });

        list.append(...listItems);
    })
    .catch(console.error);


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
            clearTimeout(timeoutId);
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