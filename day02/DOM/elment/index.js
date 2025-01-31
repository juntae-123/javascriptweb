const redbtn = document.querySelector("#red");
const blubtn = document.querySelector("#blue");
const greebtn = document.querySelector("#green");
const squarebt = document.querySelector("#square");
const softbtn = document.querySelector("#soft");
const hardbtn = document.querySelector("#hard");
const smalbtn = document.querySelector("#small");
const midbtn = document.querySelector("#mid");
const lazbtn = document.querySelector("#laz");
const box = document.querySelector("#box");

const colorBox = ["red", "blue", "green"];
const raBox = ["squarebt", "softbtn", "hardbtn"];
redbtn.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("red");
});
blubtn.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("blue");
});
greebtn.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("green");
});

squarebt.addEventListener("click", () => {
  box.classList.remove(...raBox);
  box.classList.add("square");
});
soft.addEventListener("click", () => {
  box.classList.remove(...raBox);
  box.classList.add("soft");
});
hardbtn.addEventListener("click", () => {
  box.classList.remove(...raBox);
  box.classList.add("hard");
});
smalbtn.addEventListener("click", () => {
  box.classList.remove("mid");
  box.classList.remove("laz");
  box.classList.add("small");
});
midbtn.addEventListener("click", () => {
  box.classList.remove("small");
  box.classList.remove("laz");
  box.classList.add("mid");
});
lazbtn.addEventListener("click", () => {
  box.classList.remove("mid");
  box.classList.remove("small");
  box.classList.add("laz");
});
