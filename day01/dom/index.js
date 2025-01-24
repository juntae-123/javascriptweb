const hello = document.createElement("h1");
hello.innerText = "고기쌀롱 어서오고";
hello.style.color = "red";
document.body.appendChild(hello);

const meats = [
  "삼겹",
  "목",
  "돼지",
  "양념",
  "항정",
  "갈매기",
  "꼬들",
  "냉삼",
  "뽈살",
  "껍데기",
];

meats.forEach((x, i) => {
  const btn = document.createElement("button");
  btn.innerText = `${i}번째` + x;
  btn.style.backgroundColor = i % 2 ? "skyblue" : "yellow";
  btn.addEventListener("click", () => {
    alert(`${x} 고기`);
  });
  document.body.appendChild(btn);
});
