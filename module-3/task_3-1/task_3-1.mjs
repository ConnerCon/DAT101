"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8; // try 6,7,8

printOut("Wake up time = " + wakeUpTime);

if (wakeUpTime == 7) {
   printOut("I can take the bus to school.");
}
else if (wakeUpTime == 8) {
   printOut("I can take the train to school.");
}
else {
   printOut("I have to take the car to school.");
};

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -2; // try -1, 0, 1
printOut("Number = " + number);

if (number == 0) {
   printOut("ZERO");
}
else if (number > 0) { 
   printOut ("POSITIVE");
}
else if (number < 0) { 
   printOut("NEGATIVE");
};

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1; // random integer between 1 and 8
printOut("Uploaded image size: " + imageSize + "MP");

if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Uploaded image size: " + imageSize + "MP");

if (imageSize < 4) {
    printOut("The image is too small");
} else if (imageSize >= 6) {
    printOut("Image is too large");
} else {
    printOut("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r") || monthName.includes("R")) {
   printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}

printOut("Month: " + monthName);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthDays = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

const monthIndex = monthList.indexOf(monthName);
const days = monthDays[monthIndex];

printOut("Days in " + monthName + ": " + days);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let galleryStatus;


if (monthName === "Mars" || monthName === "Mai") {
    galleryStatus = "The gallery is closed for refurbishment.";
} else if (monthName === "April") {
    galleryStatus = "The gallery is open in temporary premises next door.";
} else {
    galleryStatus = "The gallery is open as usual.";
}

printOut("Month: " + monthName);
printOut(galleryStatus);

printOut(newLine);
