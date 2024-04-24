let h1 = document.getElementById('h1');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let min1 = document.getElementById('input1');
    let max1 = document.getElementById('input2');
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1));
    }
    h1.innerHTML = getRndInteger(min1.value, max1.value);
    // console.log(getRndInteger(min1.value, max1.value));
})