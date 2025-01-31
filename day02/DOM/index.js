// const red = document.querySelector(".red");
// red.addEventListener("click", () => {
//   alert("빨강");
// });
// const blue = document.querySelector(".blue");
// blue.addEventListener("click", () => {
//   alert("파랑");
// });
// const green = document.querySelector(".green");
// green.addEventListener("click", () => {
//   alert("초록");
// });

const redbtn = document.querySelector(".red");
const blubtn = document.querySelector(".blue");
const greebtn = document.querySelector(".green");
const squarebt = document.querySelector(".square");
const softbtn = document.querySelector(".soft");
const hardbtn = document.querySelector(".hard");
const smalbtn = document.querySelector(".small");
const midbtn = document.querySelector(".mid");
const lazbtn = document.querySelector(".laz");
const box = document.querySelector(".box");

redbtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
blubtn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

greebtn.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});

squarebt.addEventListener("click", () => (box.style.borderRadius = "0px"));
softbtn.addEventListener("click", () => (box.style.borderRadius = "20px"));
hardbtn.addEventListener("click", () => (box.style.borderRadius = "9999px"));

smalbtn.addEventListener("click", () => {
  box.width = "100px";
  box.heught = "100px";
});
midbtn.addEventListener("click", () => {
  box.width = "200px";
  box.heught = "200px";
});
lazbtn.addEventListener("click", () => {
  box.width = "300px";
  box.heught = "300px";
});
