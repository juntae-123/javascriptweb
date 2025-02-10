const id = document.querySelector("#id");
const img = document.querySelector("img");
const img1 = document.querySelector("img1");

img.addEventListener("click", () => {
  id.type = "text";
  img1.display = "none";
});

img1.addEventListener("click", () => {
  id.type = "password";
  img1.display = "inline";
  img.display = "none";
});
