'use strict';

const list = document.getElementById('list');
fetch('../../user.json')
    .then((res) => res.json())
    .then((users) => {
        users.forEach((user) => {
            setUserToList(user);
        })
    })
    .catch(console.error);


function createListItem(value) {
    const li = document.createElement('li');
    list.append(li);
    li.append(value);
    return li;
}

function setUserToList(user) {
    const userInfo = [];
    for(const [key, value] of Object.entries(user)){
        userInfo.push(` ${key}: ${value}`);
    }
    createListItem(userInfo);
}