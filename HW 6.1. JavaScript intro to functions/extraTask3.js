function calcCost(days) {
  const costPerDay = 40;
  let totalCost;
  switch (true) {
    case days <= 0 || typeof days !== "number":
      totalCost = "Enter valid days";
      break;
    case days < 3:
      totalCost = costPerDay * days;
      break;
    case days < 7:
      totalCost = costPerDay * days - 20;
      break;
    case days >= 7:
      totalCost = costPerDay * days - 40;
      break;
  }
  return totalCost;
}

console.log(calcCost("-2"));
