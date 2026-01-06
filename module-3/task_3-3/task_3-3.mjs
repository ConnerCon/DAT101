"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printToday() {
    let today = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    printOut(today.toLocaleDateString("no-NB", options));
}

printToday();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getToday() {
    let today = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    printOut("I dag er: " + today.toLocaleDateString("no-NB", options));
    return today;
}

function daysUntilRelease() {
    let today = getToday();
    let release = new Date(2025, 4, 14); // Months are 0-based, so May = 4
    let diffMs = release - today;
    let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    printOut("Det er " + diffDays + " dager igjen til 2XKO-slippet!");
}

daysUntilRelease();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleStats(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}

circleStats(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleStats(rect) {
    let circumference = 2 * (rect.width + rect.height);
    let area = rect.width * rect.height;

    printOut("Rectangle width: " + rect.width + ", height: " + rect.height);
    printOut("Circumference is " + circumference.toFixed(2));
    printOut("Area is " + area.toFixed(2));
}

rectangleStats({ width: 4, height: 3 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temp, type) {
    let c, f, k;

    if (type === "C") {
        c = temp;
        f = Math.round(c * 9 / 5 + 32);
        k = Math.round(c + 273.15);
        printOut("Convert " + c + " Celsius");
    } else if (type === "F") {
        f = temp;
        c = Math.round((f - 32) * 5 / 9);
        k = Math.round(c + 273.15);
        printOut("Convert " + f + " Fahrenheit");
    } else if (type === "K") {
        k = temp;
        c = Math.round(k - 273.15);
        f = Math.round(c * 9 / 5 + 32);
        printOut("Convert " + k + " Kelvin");
    } else {
        printOut("Invalid type! Use 'C', 'F', or 'K'.");
        return;
    }

    printOut("Celsius = " + c);
    printOut("Fahrenheit = " + f);
    printOut("Kelvin = " + k);
    printOut(""); // blank line for separation
}

convertTemperature(47, "C");
convertTemperature(100, "F");
convertTemperature(300, "K");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function priceWithoutVAT(gross, vatGroup) {
    let vatPercent;

    switch (vatGroup.toLowerCase()) {
        case "normal":
            vatPercent = 25;
            break;
        case "food":
            vatPercent = 15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            vatPercent = 10;
            break;
        default:
            printOut(vatGroup + " is unknown tax-group!");
            return NaN;
    }

    let net = (100 * gross) / (vatPercent + 100);
    printOut(gross + " is " + net.toFixed(2) + " without tax");
    return net;
}

priceWithoutVAT(100, "normal");
priceWithoutVAT(150, "food");
priceWithoutVAT(50, "hotel");
priceWithoutVAT("Textile", "goblins");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function motion(distance, time, speed) {
    let missing = [distance, time, speed].filter(x => x === undefined).length;

    if (missing > 1) {
        printOut("Speed = undefined km/h");
        printOut("Distance = " + (distance !== undefined ? distance : "NaN") + " km");
        printOut("Time = " + (time !== undefined ? time : "NaN") + " h");
        printOut(newLine);
        return NaN;
    }

    if (speed === undefined) {
        speed = distance / time;
    } else if (distance === undefined) {
        distance = speed * time;
    } else if (time === undefined) {
        time = distance / speed;
    }

    printOut("Speed = " + (speed !== undefined ? speed.toFixed(2) : "undefined") + " km/h");
    printOut("Distance = " + (distance !== undefined ? distance.toFixed(2) : "NaN") + " km");
    printOut("Time = " + (time !== undefined ? time.toFixed(2) : "NaN") + " h");
    printOut(newLine);
}

motion(50, 0.67, undefined);
motion(120, 2, undefined);
motion(105, undefined, 70);
motion(50, undefined, undefined);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`"${adjustedText}"`);
  return adjustedText;
}
AdjustString("Hello", 50, "&nbsp;", true);
AdjustString("This is a right aligned text.", 50, "&nbsp;", false);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function MathExpression(lines) {
  let currentNumber = 1;

  for (let line = 1; line <= lines; line++) {
    let leftNums = [];
    let rightNums = [];

    for (let i = 0; i < line + 1; i++) {
      leftNums.push(currentNumber++);
    }

    for (let i = 0; i < line; i++) {
      rightNums.push(currentNumber++);
    }

    const leftStr = leftNums.join(" ").padEnd(25, " ");
    const rightStr = rightNums.join(" ");

    printOut(`${leftStr} = ${rightStr}`);
  }

  printOut("Mathematics is fun!");
}

MathExpression(7);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

let n = 9;
let result = factorial(n);
printOut('Factorial (' + n + ') is ' + result);

printOut(newLine);
