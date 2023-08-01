let count = 0;
let counter = document.getElementById("text-result");
let reset = document.getElementById("reset-button");
let increment = document.getElementById("increment-button");
let decrement = document.getElementById("decrement-button");

reset.addEventListener('click', ()=>{
    count = 0;
    displayCount()
});

console.log(counter);
increment.addEventListener('click', ()=>{
    count++;
    displayCount()
});

console.log(counter);
decrement.addEventListener('click', ()=>{
    count--;
    displayCount()
});

function displayCount() {
    counter.innerHTML = "値：" + count;
}

