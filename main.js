const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

console.log(scale(100, 0, 100, 30, 0));

// ჩემი მეთოდით
// 30-30*a/100

// const container = document.querySelector(".container ");
// const h1 = document.querySelector("h1");

// let i = 100;
// let interval = setInterval(() => {
//   h1.innerHTML = 100 - i + "%";
//   h1.style.opacity = `${i / 100}`;
//   container.style.filter = `blur(${i}px)`;
//   i -= 1;

//   if (i < 0) {
//     clearInterval(interval);
//   }
// }, 30);
