// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");
// const btn4 = document.createElement("button");
// const btn5 = document.createElement("button");
// const btn6 = document.createElement("button");
// const btn7 = document.createElement("button");
// const btn8 = document.createElement("button");
// const btn9 = document.createElement("button");
// const btn0 = document.createElement("button");

// const hexValu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// btn1.innerText = "";
// btn1.addEventListener("click", change);

// function change() {
//   const hex = "#";

//   for (const i = 0; i < 6; i++) {
//     const aaa = Math.floor(Math.random() * hexValu.length);
//     hex += hexValu(aaa);
//   }
// }

// document.body.appendChild(btn1);
// box.style.backgroundColor = hex;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const colorList = [..."0123456789abcdef"];
const getOneOfHex = () => colorList[getRandom(0, colorList.length)];
const getColor = () =>
  "#" +
  Array(6)
    .fill(0)
    .map((v) => getOneOfHex())
    .join("");

Array(10)
  .fill(0)
  .forEach((v) => {
    const btn = document.createElement("button");
    const color = getColor();
    btn.innerText = color;
    btn.addEventListener("click", () => {
      const box = document.querySelector("#box");
      box.style.backgroundColor = color;
    });
    document.body.appendChild(btn);
  });
