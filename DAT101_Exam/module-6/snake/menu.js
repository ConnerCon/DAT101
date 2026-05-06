"use strict";
import { EGameStatus, GameProps, SheetData, newGame } from "./game.mjs"; // See the current score
import { TSpriteNumber, ESpriteNumberJustifyType, TSprite } from "libSprite";

export class TMenu {
    #spGameScore;
    #spFinalScore;
    #spPlay;
    #spResume;
    #spGameOver;
    #spHome;
    #spRetry;
    #spcvs;


    constructor(aSpcvs, aSPI) {

        this.#spcvs = aSpcvs; //Save canvas reference for later use
        const cvs = document.getElementById("cvs") //Shortcut to HTML element
        

        // SCORE DISPLAY
        // aSPI.Number shows to the numbers in the sprite sheet
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.Number, 1, 1, 0, 0);
        this.#spGameScore.justify = ESpriteNumberJustifyType.Left;
        this.#spGameScore.visible = true;

        //PlAY BUTTON
        //Center the button
        const playX = 355;
        const playY = 241;

        this.#spPlay = new TSprite(aSpcvs, aSPI.Play, playX, playY);
        this.#spPlay.animated = true;
        this.#spPlay.visible = true;

        //RESUME BUTTON
        this.#spResume = new TSprite(aSpcvs, aSPI.Resume, 355, 241);
        this.#spResume.animated = true;
        this.#spResume.visible = false; // Hidden at start
        
        cvs.addEventListener("click", (e) => {
        if (GameProps.gameStatus === EGameStatus.Idle) {
        GameProps.gameStatus = EGameStatus.Playing;
        this.#spPlay.visible = false;
        } else if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        this.#spResume.visible = true;  // show resume button
        } else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        this.#spResume.visible = false;} // hide resume button
        });


    }

    draw() {
        // Update the visible score to match the real score
        this.#spGameScore.value = GameProps.score; // Reads GameProps.score
        this.#spGameScore.draw();
        this.#spPlay.draw();
        this.#spResume.visible = GameProps.gameStatus === EGameStatus.Pause;
        this.#spResume.draw();
    }


}

/* Use this file to create the menu for the snake game. */

