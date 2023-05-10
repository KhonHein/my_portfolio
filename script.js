let profilePP = document.querySelector('.profilePP');
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>{
    item.addEventListener('click', activeLink)
})

let webTitle =document.querySelector('.webTitle');

let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');

let dy = document.getElementById('day');
let mth = document.getElementById('month');
let yrs = document.getElementById('year');
setInterval(()=>{
    let day = new Date();
    //date 

    let d =day.getDate() +' /';
    let mt =day.getMonth() + 1 +' / ';
    let y =day.getFullYear();
    dy.innerHTML = d;
    mth.innerHTML = mt;
    yrs.innerHTML =y;

//digital 

let hours = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let ap = h >= 12 ? "Pm": "Am";

//addin 0 
h = (h < 10) ? "0" + h: h
m = (m < 10) ? "0" + m: m
s = (s < 10) ? "0" + s: s

//12hr method
if(h>12){
    h = h-12;
}


hours.innerHTML = h;
minute.innerHTML = m;
second.innerHTML =s;
ampm.innerHTML =ap;
}) 



