var Red = 1;
var Orange = 2;
var Green = 3;

let trafficLight = 1;

if (trafficLight == Red) {
  console.log("Stop"); //will print "stop" if the condition is correct
} else if (trafficLight == Orange) {
  console.log("slow-down"); //will print "slow-down" if the condition is correct
} else {
  console.log("Go"); //will print "Go" if the condition is anything else from the previous two.
}

var a = 5;
var b = 10;

if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else if (a != b) {
  console.log("confsion");
} else console.log(a, b);

//---------------------------------------------------------------------------

24 > 23; // True
24 > 24; // False
24 >= 24; // True 24 < 25 // True
24 < 24; // False
24 <= 24; // True

24 === 24; // True
24 !== 24; // False

"24" === 24; // False
"24" == 24; // True '24' !== 24 // True
"24" != 24; // False                                 i need to say why this is false

const aString = "Some string";
const aNumber = 123;
const aBoolean = true;

"24" === 24; // False
"24" !== 24; // True

"24" == 24; // True
"24" != 24; // False

0 == false; // True
1 == true; // True
2 == true; // False

//------------------------------------------------------------

const ab = { isHavingFun: true };
const bb = ab; //{ isHavingFun: true } ;
console.log(ab === bb); //
console.log(ab == bb); //

const hasApples = "true";
if (hasApples) {
  // Eat apple
} else {
  // Buy apples
}

function test(t) {
  if (t === undefined) {
    return "Undefined";
  }
  return t;
}
let x;
console.log(test(x));

var item = "";
console.log("");

// const str = '' if (str {
//     console.log("this bitch empty yeet!!");
// }
// else{
//     console.log("this bitch full, glug glug");
// }
//----------------------------------------------------------------------------------

/* const person = "Joe";
switch (person) {
  case "Jane":
    console.log("Hi Jane");
    break;
  case "John":
    console.log("Hi John");
    break;
  case "Joe":
    console.log("Hi Joe");
    break;
  case "Mary":
    console.log("Hi Mary");
    break;
  default:
    console.log("stinky");
    break;
}

    */

//-----------------------------------------------------------------------------------

/*
const person = 'Joe';
switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  default:
    console.log('Hi');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
}
*/
//------------------------------------------------------------------------------------

/*
const foo = 1;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("I like this number");
    break;
  case -1:
  case -2:
    console.log("I love this number");
    break;
  default:
    console.log("I don't like this number.");
}
*/

const foo = 1;
let output = '';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}