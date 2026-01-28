"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Counting Up and Down
let outPut1 = "";
let outPut2 = "";
for (let i = 1; i <= 10; i++) outPut1 += i + (i < 10 ? "," : ",");
for (let i = 10; i >= 1; i--) outPut2 += i + (i > 1 ? "," : "");
printOut(outPut1);
printOut(outPut2);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Number Guessing Game 

let numberToGuess = 45;
let guessedNumber = 0;

while (guessedNumber !== numberToGuess) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}

printOut("tallet er: " + guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Guessing Game - Level Up!

let targetNum = 875432; // the number to guess
let attempt = 0;
let guess = 0;
let startTime = Date.now();

while (guess !== targetNum) {
    guess = Math.floor(Math.random() * 1000000) + 1;
    attempt++;
}

let endTime = Date.now();
let elapsed = endTime - startTime;

printOut("Tallet er " + guess);
printOut("Datamaskinen brukte " + attempt + " runder");
printOut("og det tok " + elapsed + " millisek.");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let resultPrime = "";
for (let num = 1; num < 200; num++) {
  let divisor = num - 1;
  let isPrime = true;
  while (divisor > 1 && isPrime) {
    let rest = num % divisor; 
    isPrime = rest != 0;
    divisor--;
  }
  if (isPrime) {
    resultPrime += " " + num;
  }
}
printOut(resultPrime);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Nested Loops & Patterns

for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + (col < 9 ? " " : "");
    }
    printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Grade Simulator & Sorting Challenge

for (let s = 1; s <= 5; s++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let pct = Math.floor((points / 236) * 100);
    let grade;

    if (pct >= 89) grade = "A";
    else if (pct >= 77) grade = "B";
    else if (pct >= 65) grade = "C";
    else if (pct >= 53) grade = "D";
    else if (pct >= 41) grade = "E";
    else grade = "F";

    printOut("Kandidaten fikk " + points + " poeng, som er " + pct + "%, og gir karakter " + grade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Dice Rolling Extravaganza

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollSixDice() {
    let dice = [];
    for (let i = 0; i < 6; i++) dice.push(rollDice());
    return dice;
}

function countDice(dice) {
    let counts = {};
    for (let d of dice) counts[d] = (counts[d] || 0) + 1;
    return counts;
}

function formatDice(dice) {
    return dice.join(",");
}

// 3 pairs
let throws = 0, dice;
while (true) {
    throws++;
    dice = rollSixDice();
    let counts = Object.values(countDice(dice));
    if (counts.length === 3 && counts.every(c => c === 2)) break;
}
printOut(formatDice(dice));
printOut("3 par");
printOut("På " + throws + " kast!");
printOut(newLine);

// Full straight
throws = 0;
while (true) {
    throws++;
    dice = rollSixDice();
    let uniqueSorted = [...new Set(dice)].sort((a, b) => a - b);
    if (uniqueSorted.length === 6 && uniqueSorted.join("") === "123456") break;
}
printOut(formatDice(dice));
printOut("Full straight");
printOut("På " + throws + " kast!");
printOut(newLine);

// Tower
throws = 0;
while (true) {
    throws++;
    dice = rollSixDice();
    let counts = Object.values(countDice(dice));
    if (counts.includes(4) && counts.includes(2)) break;
}
printOut(formatDice(dice));
printOut("Tårn");
printOut("På " + throws + " kast!");
printOut(newLine);

// Yatzi
throws = 0;
while (true) {
    throws++;
    dice = rollSixDice();
    if (new Set(dice).size === 1) break;
}
printOut(formatDice(dice));
printOut("Yatzi!");
printOut("På " + throws + " kast!");


printOut(newLine);

printOut("---------------------------------------------------------------------------------------------------------");
