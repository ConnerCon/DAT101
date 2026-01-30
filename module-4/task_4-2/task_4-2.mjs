"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let p1Text = "";
for (let i = 0; i < p1Array.length; i = i + 1) {
  const value = p1Array[i];
  if (i === p1Array.length - 1) {
    p1Text += value.toString() + ".";
  } else {
    p1Text += value.toString() + ", ";
  }
}
printOut(p1Text);

printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p2Text = p1Array.join(", ");
printOut(p2Text);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p3Hello = "Hello, how are you?";
const p3Array = p3Hello.split(" ");
let p3Text = "";
for (let i = 0; i < p3Array.length; i++) {
  const word = p3Array[i];
  p3Text += "Index: " + i.toString() + " = " + word + newLine;
}
printOut(p3Text);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName) {
    let deleteIndex = -1;
    for (let i = 0; i < aArray.length; i++) {
        const name = aArray[i];
        if (name === aName) {
            deleteIndex = i;
            break;
          }
  }
  if(deleteIndex >= 0){
    printOut(aName + " is found, and deleted.");
    aArray.splice(deleteIndex, 1);
  }else{
    printOut(aName + " is not found!");
  }
}

removeNameFromArray(girlNames, "Hilde");
printOut(girlNames);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = girlNames.concat(boyNames);
printOut(allNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
  #title;
  #author;
  #ISBN;
  constructor(aTitle, aAuthor, aISBN){
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#ISBN = aISBN;
  }
  toString(){
    return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#ISBN}`;
  }
}

const book1 = new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
const book3 = new TBook("1984", "George Orwell", "9780451524935");
const bookArray = [book1, book2, book3];
let p6Text = "";
for (const book of bookArray) {
  p6Text += book.toString() + "<br>";
}
printOut(p6Text);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
  WeekDay1: {value: 0x01, name: "Monday"},
  WeekDay2: {value: 0x02, name: "Tuesday"},
  WeekDay3: {value: 0x04, name: "Wednesday"},
  WeekDay4: {value: 0x08, name: "Thursday"},
  WeekDay5: {value: 0x10, name: "Friday"},
  WeekDay6: {value: 0x20, name: "Saturday"},
  WeekDay7: {value: 0x40, name: "Sunday"},
  Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays"},
  Weekends: {value: 0x20 + 0x40, name: "Weekends"},
};

const weekDayKeys = Object.keys(EWeekDays);

for (let i = 0; i < weekDayKeys.length; i++) {
  const key = weekDayKeys[i];
  const dayInfo = EWeekDays[key];
  printOut(`${key}: value=${dayInfo.value}, name="${dayInfo.name}"`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p8randomArray = Array.from({length: 35}, () => Math.floor(Math.random() * 20) + 1);

printOut("Original array:");
printOut(p8randomArray.join(", "));

const ascendingArray = [p8randomArray].sort((a, b) => a - b);

printOut("Sorted in ascending order:");
printOut(ascendingArray.join(", "));

const descendingArray = [p8randomArray].sort((a, b) => b - a);

printOut("Sorted in descending order:");
printOut(descendingArray.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const frequency = {};
for(let i = 0; i < p8randomArray.length; i++){
  if(frequency[p8randomArray[i]]){
    frequency[p8randomArray[i]] += 1;
  }else{
    frequency[p8randomArray[i]] = 1;
  }
}

let p9Text1 = "Numbers and their frequency:" + newLine;
for(const number in frequency){
  p9Text1 += `${number}: ${frequency[number]}` + newLine;
}
printOut(p9Text1);
const freqToNums = {};
for(const num in frequency){
  const count = frequency[num];
  if(!freqToNums[count]) freqToNums[count] = [];
  freqToNums[count].push(Number(num));
}

let p9Text2 = "Frequencies and corresponding numbers (most frequent first):" + newLine;
const sortedFreqs = Object.keys(freqToNums).map(Number).sort((a,b) => b-a);
sortedFreqs.forEach(count => {
  const nums = freqToNums[count].sort((a,b) => a-b);
  p9Text2 += `${count}: ${nums.join(", ")}` + newLine;
});
printOut(p9Text2);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const grid = [];

for(let row = 0; row < 5; row++) {
    const currentRow = [];
    for(let col = 0; col < 9; col++) {
        currentRow.push(`Row ${row}, Col ${col}`);
    }
    grid.push(currentRow);
}

for(let row = 0; row < 5; row++) {
    let rowText = "";
    for(let col = 0; col < 9; col++) {
        rowText += grid[row][col];
        if(col < 8) rowText += " | ";
    }
    printOut(rowText);
}

printOut(newLine);

for(let row = 0; row < 5; row++) {
    let rowText = "";
    for(let col = 0; col < 9; col++) {
        rowText += grid[row][col];
        if(col < 8) rowText += " | ";
    }
    printOut(rowText);
}
printOut(newLine);
