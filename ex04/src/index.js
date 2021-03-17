// Only change code below this line
function compareDifferentvalues(m, n) {
  if (m === n) {
    return "Equal";
  }
  return "Not equal";
}
compareDifferentvalues(8, "8");

console.log(compareDifferentvalues(8, "8"));
console.log(compareDifferentvalues("8", 8));
console.log(compareDifferentvalues('8', 8));
console.log(compareDifferentvalues("8", "8"));
console.log(compareDifferentvalues(8, 8));
// Only change code above this line
module.exports = compareDifferentvalues;
