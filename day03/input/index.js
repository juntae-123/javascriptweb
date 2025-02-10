const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (btn.innerHTML == "..") {
    btn.innerHTML = ",,,,";
    input.type = "password";
  } else {
    btn.innerHTML = "..";
    input.type = "text";
  }
});
