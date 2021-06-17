//JAVAscript
console.log("Hello");
var text1 = "Hello";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';
var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';
console.log (text1, text2, escapedText1);

  var numberInteger = 456;
  var numberInteger2 = -345; // This is negative integer
  var numberFloat = 50.25;

console.log (numberInteger);

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //This is just the string "false", not false!

console.log (notABoolean);


var emptyVariable = null;
var notNullButAString = "null";
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!


var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};

console.log (personParent);

personParent.name = "Anne"; // Set the name property to "Anne"
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output "Sara" to the console

console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age

var shortObject = { name: "John", age: 31};
var emptyObject = {}; // Objects can be empty. You can add properties later
delete shortObject.name; // Will remove the "name" property
console.log(shortObject); // Output "John" and his age to the console

console.log('---------------');

var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];
shortArray[0] = 100; // Overwrites the prior value, 1, with 100
console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"


var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]

for (var i = 1; i <= 3; i++) {
  console.log(i);
}

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
