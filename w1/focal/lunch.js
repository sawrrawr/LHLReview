const whatToDoForLunch = function(hungry, time) {
  if (hungry === true) {
    if (time < 20) {
      console.log("grab a quick snack!");
    } else if (time >= 20 && time < 30) {
      console.log("take a break, you've earned it!");
    } else {
      console.log("if you've got this much time... keep coding!");
    }
  } else {
    console.log("if you aren't hungry, it's not lunch time!");
  }
};


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);