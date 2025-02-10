import { changeLight } from "./func.js";

input.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  changeLight(charLength, isLengthValid);
  changeLight(special, isSpecialValid);
  changeLight(checkButton, isLengthValid && isSpecialValid);
});
