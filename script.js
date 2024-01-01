let total = 0   ;
let number = [];
let use;
let count = 0;
let co = 1;
let lastop;

let num0 = document.querySelector('.num0');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let num7 = document.querySelector('.num7');
let num8 = document.querySelector('.num8');
let num9 = document.querySelector('.num9');
let doot = document.querySelector('.dot');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let mod = document.querySelector('.mod');
let equal = document.querySelector('.equal');
let cle = document.querySelector('.ac');
let tclick = document.querySelector('.no-sign');
let text = document.querySelector('.text');

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

cle.onclick = rem;
tclick.onclick = trem ;
num0.onclick = zero;
num1.onclick = one;
num2.onclick = two;
num3.onclick = three;
num4.onclick = four;
num5.onclick = five;
num6.onclick = six;
num7.onclick = seven;
num8.onclick = eight;
num9.onclick = nine;
doot.onclick = dot;
add.onclick = sum;
subtract.onclick =  subraction;
multiply.onclick = mult;
divide.onclick = division;
mod.onclick = modulus;
equal.onclick = displayTotal;

function rem() {
    text.innerText = "";
    total = 0;
    number = [];
    use = 0; 
    count = 0;
}

function trem() {
    text.innerText = "";
    number = [];
}

function counti(num) {
    if (co == 0) {
        text.innerText = "";
        text.innerText += num;
        number.push(num);
    }else{
        text.innerText += num;
        number.push(num);
    }
}

function zero() {
    counti(0);
    co ++;
}

function one() {
    counti(1);
    co ++;
}

function two() {
    counti(2);
    co ++;
}

function three() {
    counti(3);
    co ++;
}

function four() {
    counti(4);
    co ++;
}

function five() {
    counti(5);
    co ++;
}
function six() {
    counti(6);
    co ++;
}

function seven() {
    counti(7);
    co ++;
}

function eight() {
    counti(8);
    co ++;
}

function nine() {
    counti(9);
    co ++;
}

function dot() {
    counti('.');
    co ++;
}

function calc (op){
    lastop = op;
    use = +(number.join(""));
    if(op == '+'){
        total += use;
    }else if(op == '-') {
        if(count == 0){
            total += use
        }else{
            total -= use;
        }
    }else if(op == '*') {
        if(count == 0){
            total = use;
        }else{
            total *= use;
        }
    }else if(op == '/') {
        if(count == 0){
            total = use
        }else{
            total /= use;
        }
    } else if(op == '%') {
        // if (count == 0) {
        //     total = use;
        // }else {
        //     total = total % use;
        // }
    }
    count ++;
    co = 0;
    text.innerText = total;
    number = [];
}

function displayTotal() {
    if(number.length == 0){
        text.innerText = total;
    }else{
        calc(lastop);
        text.innerText = total;
    }
}

function sum(){
    calc('+');
}

function subraction(){
    calc('-');
}
function mult() {
    calc ('*');
}
function division() {
    calc('/');
}

function modulus() {
    calc('%');
}