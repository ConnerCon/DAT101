"use strict";
import { EGameStatusType, spawnColorButton } from "./SimonSays.mjs";

let colorButton = null;
let sequence = [];
let round = 0;
let seqIndex = 0;

export function addRandomButton(aColorButtons){
    const index = Math.floor(Math.random() * aColorButtons.length);
    colorButton = aColorButtons[index];
    sequence.push(colorButton);
    colorButton.onMouseDown();
    seqIndex = 0;
    colorButton = sequence[0];
    setTimeout(setButtonUp, 500); // This is the wait time before seq. starts.
};

export function testOfUserInput(aColorButton){
    if(aColorButton === colorButton){
        console.log("YES");
        seqIndex++;
        if(seqIndex < sequence.length){
            // We have not reached the end of the sequence.
            colorButton = sequence[seqIndex];
        }else{
            // We have reached the end of the sequence.
            round++;
            spawnColorButton();
        }
    }else{
        console.log("NO");
    }   
};

function setButtonDown(){
    colorButton.onMouseDown();
    setTimeout(setButtonDown, 500);
};
function setButtonUp(){
    colorButton.onMouseUp();
    seqIndex++;
    if(seqIndex < sequence.length){
        colorButton = sequence[seqIndex];
        setTimeout(setButtonDown, 500);
    }else{
    EGameStatusType.state = EGameStatusType.Gamer;
    }
};