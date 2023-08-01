let count = 0;
let counter = document.getElementById("text-result");
let reset = document.getElementById("reset-button");
let increment = document.getElementById("increment-button");
let decrement = document.getElementById("decrement-button");

reset.addEventListener('click', ()=>{
    count = 0;
    counter.innerHTML = "値：" + count;
});

console.log(counter);
increment.addEventListener('click', ()=>{
    count++;
    counter.innerHTML = "値：" + count;
});

console.log(counter);
decrement.addEventListener('click', ()=>{
    count--;
    counter.innerHTML = "値：" + count;
});

