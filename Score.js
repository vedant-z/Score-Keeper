let input = document.querySelector('#num');

input.value = 1;

let x = 0;
let y = 0;

const b1 = document.getElementById("first");
const b2 = document.getElementById("second");
const b3 = document.getElementById("res");

let h2 = document.querySelector('h2');

b1.addEventListener("click", function () {
    x += 1;
    h2.innerHTML = `${x} to ${y}`;
    if (x == input.value) {
        h2.innerText = "PLAYER-1 WON";
        b1.disabled = true;
        b2.disabled = true;
    }
});

b2.addEventListener("click", function () {
    y += 1;
    h2.innerHTML = `${x} to ${y}`;
    if (y == input.value) {
        h2.innerText = "PLAYER-2 WON";
        b2.disabled = true;
        b1.disabled = true;
    }
});

b3.addEventListener("click", function () {
    h2.innerText = "0 to 0";
    x = 0;
    y = 0;
    b1.disabled = false;
    b2.disabled = false;
    input.value = 1;
});