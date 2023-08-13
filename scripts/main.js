/*Created with love by Michael Martins*/
var disp1 = document.querySelector('#disp1'),
disp2 = document.querySelector('#disp2'),
displayBtn = document.querySelector('#displayBtn'),
theme = document.querySelector('#theme'),
start = document.querySelector('#start'),
reset = document.querySelector('#reset'),
_theme = document.querySelector('#t'),
button = document.querySelectorAll('button');
let dark = true,
  inProgress = false;
window.onload = () => {
  timeReset();
  time();
  theme.innerHTML = '🌙';
  displayBtn.style.fontSize='3.5rem';
}

start.addEventListener('click', inProgressCheck);

displayBtn.addEventListener('click', inProgressCheck);

reset.addEventListener('click',()=>{
  timeReset();
  time();
  inProgress=true;
  inProgressCheck();
})
function inProgressCheck(){
  switch (inProgress) {
    case false:
      play();
      break;
    default:
      pause();
      break;
  } 
}
function play(){
  st = setInterval(time,10);
  inProgress = true;
  button[2].innerHTML='PAUSE';
}
function pause(){
  clearInterval(st);
  inProgress = false;
  button[2].innerHTML='START';
}
function timeReset(){
var dateArr = [0, 0, 0, 0, 0, 0, 0];
d = new Date(...dateArr);
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
ms = d.getMilliseconds();
cs = ms * 10;
disp2.style.fontSize='3.5rem';
}
function time() {
  S = JSON.stringify(s),
    M = JSON.stringify(m),
    H = JSON.stringify(h), cS = JSON.stringify(cs);

  modifyDisplay();
  if (h > 0) {
    disp1.innerHTML = `${h}:${m}:${s}`;
    disp2.innerHTML = `${cs}`;
  }
  else if (m > 0) {
    disp1.innerHTML = `${m}:${s}`;
    disp2.innerHTML = `${cs}`;
  }
  else if (s > 0) {
    disp1.innerHTML = `${s}`;
    disp2.innerHTML = `${cs}`;
  }
  else {
    disp1.innerHTML='';
    disp2.innerHTML = `${cs}`;
  }
  //(cs+=1) != (cs++);
  cs++;
  clockEng();
}

function clockEng() {
  if (cs == 100) {
    s++;
    cs = 0;
    disp2.style.fontSize = '2rem';
  }
  if (s == 60) {
    m++;
    s = 0;
  }
  if (m == 60) {
    h++;
    m = 0;
  }
}

function modifyDisplay() {
  if (cS[1] == null) {
    cs = `0${cs}`;
  }
  if (S[1] == null) {
    s = `0${s}`;
  }
  if (M[1] == null) {
    m = `0${m}`;
  }
  if (H[1] == null) {
    h = `0${h}`;
  }
}

theme.addEventListener('click', () => {
  switch (dark) {
    case true:
      lightTheme();
      break;
    default:
      darkTheme();
  }
})
function darkTheme(){
  document.body.style.background = 'black';
  //document.body.style.color = 'white';
  theme.innerHTML = '🌙';
  _theme.style.borderColor = 'white';
  butStyle('white');
  dark = true;
}
function lightTheme(){
  document.body.style.background = 'white';
  document.body.style.color = 'black';
  theme.innerHTML = '🌞';
  _theme.style.borderColor = 'grey';
  butStyle('black');
  dark = false;
}
function butStyle(val) {
  for (i = 0; i < 4; i++) {
    button[i].style.color = val;
  }
}
