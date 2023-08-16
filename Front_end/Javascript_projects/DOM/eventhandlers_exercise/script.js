let btn = document.getElementById('mybutton');

btn.addEventListener('click', function(){
    alert('Button clicked');
})

let btn2 = document.getElementById('mysecondbutton');

const body = document.getElementById('blue');
body.classList.add('blue-background');


btn2.addEventListener('click', function(){
    body.classList.toggle('red-background');
})