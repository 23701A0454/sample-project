
function filterWordsByLength(words, minLength, maxLength) {
  return words.filter(word => {
    return word.length >= minLength && word.length <= maxLength;
  });
}
const words = ["apple", "banana", "kiwi", "grape", "watermelon", "fig"];
const filtered = filterWordsByLength(words, 4, 6);

console.log(filtered); 

