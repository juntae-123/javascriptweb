const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const thr = document.querySelector("#thr");
const fo = document.querySelector("#fo");
const fiv = document.querySelector("#fiv");
const six = document.querySelector("#six");

const list = ["#one", "#two", "#thr", "#fo", "#fiv", "#six"];

list.forEach((v) => {
  const target = document.querySelector(v);
  target.addEventListener("click", () => {
    list.forEach((v) => {
      const button = document.querySelector(v1);
      button.style.backgroundColor = "white";
    });
    target.style.backgroundColor = "#3498db";
  });
});

one.addEventListener("click", () => {
  one.style.backgroundColor = "blue";
  two.style.backgroundColor = "white";
  thr.style.backgroundColor = "white";
  fo.style.backgroundColor = "white";
  fiv.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
});
two.addEventListener("click", () => {
  two.style.backgroundColor = "blue";
  one.style.backgroundColor = "white";
  thr.style.backgroundColor = "white";
  fo.style.backgroundColor = "white";
  fiv.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
});
thr.addEventListener("click", () => {
  thr.style.backgroundColor = "blue";
  two.style.backgroundColor = "white";
  one.style.backgroundColor = "white";
  fo.style.backgroundColor = "white";
  fiv.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
});
fo.addEventListener("click", () => {
  fo.style.backgroundColor = "blue";
  two.style.backgroundColor = "white";
  thr.style.backgroundColor = "white";
  one.style.backgroundColor = "white";
  fiv.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
});
fiv.addEventListener("click", () => {
  fiv.style.backgroundColor = "blue";
  two.style.backgroundColor = "white";
  thr.style.backgroundColor = "white";
  fo.style.backgroundColor = "white";
  one.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
});
six.addEventListener("click", () => {
  six.style.backgroundColor = "blue";
  two.style.backgroundColor = "white";
  thr.style.backgroundColor = "white";
  fo.style.backgroundColor = "white";
  fiv.style.backgroundColor = "white";
  one.style.backgroundColor = "white";
});
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "gray";
  btn1.style.backgroundColor = "white";
});
btn1.addEventListener("click", () => {
  btn1.style.backgroundColor = "gray";
  btn.style.backgroundColor = "white";
});
