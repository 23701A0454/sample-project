
function pickEvenNumber(min, max) {
  if (min % 2 !== 0) min++;
  let range = Math.floor((max - min) / 2) + 1;
  let randomIndex = Math.floor(Math.random() * range);
  return min + randomIndex * 2;
}
console.log("Picked Even Number:", pickEvenNumber(2, 20));
