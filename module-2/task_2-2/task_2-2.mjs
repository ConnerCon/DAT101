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

printOut("6322.52 minutes is: " + days1 + " days" + hours1 + " hours" + minutes1 + "minutes and " + seconds1 "seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);