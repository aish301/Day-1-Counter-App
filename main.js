let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");
let reset = document.getElementById("reset");
let count = document.getElementById("count");

let counter = 0;

inc.addEventListener("click", function () {
    counter++;
    count.innerText = counter;
});

dec.addEventListener("click", function(){
    counter--;
    count.innerText = counter;
});

reset.addEventListener("click", function(){
    counter = 0;
    count.innerText = counter;
});
