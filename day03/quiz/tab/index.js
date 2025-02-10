const box = document.querySelector("#box");
const title = document.querySelector("#title");
const desc = document.querySelector("desc");

const tag = [
  {
    id: "home",
    desc: "foasososo as",
    bg: "red",
  },

  { id: "news", desc: "foasososo as", bg: "blue" },
  { id: "contect", desc: "foasososo as", bg: "green" },
  { id: "abut", desc: "foasososo as", bg: "yello" },
];

tag.forEach((v) => {
  const btn = document.querySelector("#" + v.id);
  btn.addEventListener("click", () => {
    const target = document.querySelector("#" + v.id);
    target.style.backgroundColor = "#efefef";
    target.style.color = "black";
  });
  btn.style.backgroundColor = v.bg;
  btn.style.color = "white";
  box.style.backgroundColor = v.bg;
  title.innerHTML = v.id;
  desc.innerHTML = v.desc;
});
