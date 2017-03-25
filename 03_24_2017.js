//JavaScript 03/24/2017 

//Learing about types
var myString = 'This is my string';
var myNumber = 5;
var myBoolean = true;


// Do not edit the code under this line
console.log("Name: " + myString);
console.log("Lucky Number: " + myNumber);
console.log("Good joke? " + myBoolean);


//Messing with console.log 
console.log('Cheese', "bacon");

//Running some math statements
console.log(3.5 + 26); //Addition
console.log(2017 - 1969); //Subtraction
console.log(65 / 240); //Divison 
console.log(0.2708333333333333 * 100); //Mult

//Modulus Lesson %
console.log(365 % 27);

//Math Function
console.log(Math.floor(Math.random() * 100));

//Variables
var strength = '50,000 pounds.';
console.log('How heavy am I?', strength);

var strength = '50,000 pounds.';
var age = 26;
console.log(age);

var hasPet = true;
console.log (hasPet);
console.log('How heavy am I?', strength);

var morningAlarm = '6:30AM';
morningAlarm = '7:00AM';
console.log('Morning alarm is set to: ', morningAlarm);

var favoriteAnimal = 'cat';
console.log('My favorite animal: ' +  favoriteAnimal + '.');

var needCoffee = true;
if (needCoffee) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}

var harryPotterFan = true;
if (harryPotterFan) {
  console.log('Mischief managed.');
} else {
  console.log('I lead a muggle\'s life.');
}


var hungerLevel = 5;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}



var hungerLevel = 10;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}


var moonPhase = 'full';
if (moonPhase === 'full') {
  console.log("Howwwwlll!!");
} else {
  console.log("I swear I am not a werewolf...");
}


var moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log("Howwwwlll!!");
} else if (moonPhase === "mostly full"){
  console.log("Arms and legs are getting hairier");
} else if (moonPhase === "mostly new"){
  console.log("Back on two feet");
} else {
  console.log("Invalid moon phase");
}


var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight === true) {
  console.log("Howwwwlll!!");
} else if (moonPhase === "mostly full"){
  console.log("Arms and legs are getting hairier");
} else if (moonPhase === "mostly new"){
  console.log("Back on two feet");
} else {
  console.log("Invalid moon phase");
}


//Switch, Case, Break, Default
var moonPhase = 'full';
// var foggyNight = false;

switch (moonPhase) {
  
  case 'full':
     console.log("Howwwwlll!!");
    break;
 
  case 'mostly full':
     console.log("Arms and legs are getting hairier");
  break;
 
  case "mostly new":
     console.log("Back on two feet");
  break;

  default: 
     console.log("Invalid moon phase");
  break;
        }


//Parameters

function takeOrder(topping) {
  console.log('Order: pizza topped with ' + topping);
}

takeOrder('bacon');



