const list = document.querySelector("#li");

btn.addEventListener("click", () => {
  if (list.style.display == "flex") {
    list.style.display = "none";
  } else {
    list.style.display = "flex";
  }
});
