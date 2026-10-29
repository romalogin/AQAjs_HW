const car1 = {
  brand: "Audi",
  model: "TT",
  year: 2000,
};

const car2 = {
  brand: "Porsche",
  model: "Panamera",
  owner: "Stas",
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
