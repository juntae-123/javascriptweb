const colorList = document.querySelector("#countryList");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");
const country = [
  { capital: "london", nation: "England" },
  { capital: "paris", nation: "france" },
  { capital: "tokyo", nation: "japan" },
  { capital: "seoul", nation: "korea" },
  { capital: "newdelhi", nation: "India" },
  { capital: "beijing", nation: "China" },
  { capital: "canberra", nation: "Australia" },
];

country.forEach((v) => {
  const li = document.createElement("li");
  li.innerHTML = v.capital;
  li.addEventListener("click", () => {
    capital.innerHTML = v.capital;
    desc.innerHTML = `${v.capital} is the capital city of ${v.nation}`;
  });
  countryList.appendChild(li);
});
