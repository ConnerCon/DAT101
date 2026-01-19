"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let regnstykke = 2+3*2-4*6;
let regnstykke2 = 2+3*(2-4)*6;
printOut("2 + 3 * 2 - 4 * 6 = " + regnstykke);
printOut("2 + 3 * (2 - 4) * 6 = " + regnstykke2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meter = 25;
let centimeter = 34;
let inch = 25.4;

let toMilimeter = (meter * 1000 + centimeter * 10); //first make m and cm to mm
let toInch = (toMilimeter / inch);

printOut("25 meters and 34 centimeters = " + toInch.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;

let toMinutes = (days * 1440 + (hours * 60) + minutes + seconds / 60); //convert everthing to minutes and sums it

printOut("3 days, 12 hours, 14 minutes, and 45 seconds = " + toMinutes + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalmin = 6322.52

let days1 = (totalmin - totalmin % 1440) /1440;
let leftover1 = totalmin % 1440;

let hours1 = (leftover1 - leftover1 % 60) / 60;
let leftover2 = leftover1 % 60;

let minutes1 = leftover2 - leftover2 % 1;
let seconds1 = (leftover2 % 1) * 60;

printOut("6322.52 minutes is: " + days1 + " days, " + hours1 + " hours, " + minutes1 + " minutes, and " + seconds1.toFixed(0) + " seconds." );
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let usd = 54;

let nokPerUsd = 76 / 8.6;
let nok = usd * nokPerUsd;
let totalNok = nok - (nok % 1);

printOut(usd + " USD = " + totalNok + " NOK" );
printOut(totalNok + " NOK = " + usd + " USD" );
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";

let length = text.length;
let character19 = text[19];
let part = text.substring(35,43);
let index = text.indexOf("earth");

printOut(text);
printOut(newLine);
printOut("This text has " + length + " characters.");
printOut("The character at position 19 is: " + character19);
printOut("The substring of 35 and 8 places is: " + part);
printOut("The word 'earth' starts at pos " + index);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Is 5 greater than 3?
printOut("5 > 3 is " + (5 > 3));

//Is 7 greater than or equal to 7?
printOut("7 >= 7 is " + (7 >= 7));

//Is "a" greater than "b"?
printOut("\"a\" > \"b\" is " + ("a" > "b"));

//Is "1" less than "a"?
printOut("\"1\" > \"a\" is " + ("1" > "a"));

//Is "2500" less than "abcd"?
printOut("\"2500\" < \"abcd\" is " + ("2500" < "abcd"));

//"arne" is not equal to "thomas".
printOut("\"arne\" != \"thomas\" is " + ("arne" != "thomas"));

//(2 equals 5) is this statement true?
printOut("(2 === 5) === true is " + ((2 === 5) === true));

//("abcd" is greater than "bcd") is this statement false?
printOut("(\"abcd\" > \"bdc\") === false is " + (("abcd" > "bdc") === false));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text1 = "254";
let text2 = "57.23";
let text3 = "25 kroner";

let number1 = +text1;
let number2 = +text2;

printOut('"' + text1 + '"' + ' = ' + number1);
printOut('"' + text2 + '"' + ' = ' + number2);
printOut('"' + text3 + '" = ' + parseInt(text3));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;
printOut('"r" = ' + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totaldays = 131;
let weeks = Math.floor(totaldays / 7);
let extraDays = totaldays % 7;

printOut("131 days = " + weeks + " weeks and " + extraDays + " days.");

printOut(newLine);