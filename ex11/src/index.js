// Only change code below this line
function switchCase(letter) {
  // Only change code below this line
  var animals = "";

  switch (letter) {
    case "a":
      animals = "antelope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    case "d":
      animals = "stuff";
      break;
    case "4":
      animals = "stuff";
      break;
    default:
      defaultAnimals;
      break;
  }
  // Only change code above this line
  return animals;
}
switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase("4");
console.log(switchCase("a")); // Change this line
console.log(switchCase("b")); // Change this line
console.log(switchCase("c")); // Change this line
console.log(switchCase("d")); // Change this line
console.log(switchCase("4")); // Change this line
module.exports = switchCase;
