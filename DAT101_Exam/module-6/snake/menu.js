"use strict";
import { EGameStatus, GameProps, newGame } from "./game.mjs"; // See the current score
import { TSpriteNumber, ESpriteNumberJustifyType, TSprite, TSpriteButton, TSpriteButtonHaptic } from "libSprite";

export class TMenu {
    #spGameScore;
    #spPlay;
    #spResume;
    #spGameOver;
    #spGameOverScore;
    #spHome;
    #spRetry;


    constructor(aSpcvs, aSPI) {


        // SCORE DISPLAY
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.Number, 1, 1, 0, 0);
        this.#spGameScore.justify = ESpriteNumberJustifyType.Left;
        this.#spGameScore.visible = true;

        // PlAY BUTTON
        // Center the button
        const playX = 355;
        const playY = 241;

        this.#spPlay = new TSpriteButtonHaptic(aSpcvs, aSPI.Play, playX, playY);
        this.#spPlay.animated = true;
        this.#spPlay.visible = true; // Visible at start

        // RESUME BUTTON
        this.#spResume = new TSpriteButtonHaptic(aSpcvs, aSPI.Resume, 355, 241);
        this.#spResume.animated = true;
        this.#spResume.visible = false; // Hidden at start

        // HOME BUTTON
        this.#spHome = new TSpriteButton (aSpcvs, aSPI.Home, 95, 378);
        this.#spHome.visible = false;

        // RETRY BUTTON
        this.#spRetry = new TSpriteButton (aSpcvs, aSPI.Retry, 645, 378);
        this.#spRetry.visible = false;

        // GAME OVER SCREEN & TOTAL SCORE
        this.#spGameOver = new TSprite(aSpcvs, aSPI.GameOver, 30, 30);
        this.#spGameOver.visible = false;

        this.#spGameOverScore = new TSpriteNumber(aSpcvs, aSPI.Number, 530, 235, 0, 0, ESpriteNumberJustifyType.Left);
        this.#spGameOverScore.visible = false;
        
        
        // EVENTLISTENERS
        this.#spPlay.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.Idle) {
        GameProps.gameStatus = EGameStatus.Playing;
        this.#spPlay.visible = false;
        }
        });
        
        this.#spResume.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        } else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        }
        });

        this.#spHome.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.GameOver) {
        newGame();
        GameProps.gameStatus = EGameStatus.Idle; // Go back to idle state
        this.#spPlay.hidden = false;
        }
        });

        this.#spRetry.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.GameOver) {
        newGame(); // Reset the game state
        GameProps.gameStatus = EGameStatus.Playing; // Start playing immediately
        this.#spPlay.visible = false; // Keep play button hidden
        }
        });

    }

    draw() {
        // Update the visible score to match the real score
        this.#spGameScore.value = GameProps.score; // Reads GameProps.score
        this.#spGameScore.draw();
        if(GameProps.gameStatus === EGameStatus.Pause, EGameStatus.Playing){
            this.#spGameScore.visible = true}
        if(GameProps.gameStatus === EGameStatus.GameOver){
            this.#spGameScore.visible = false;
        }

        this.#spPlay.draw();
        this.#spResume.visible = GameProps.gameStatus === EGameStatus.Pause; // Resume shows based on GameStatus
        this.#spResume.draw();

        this.#spGameOver.visible = GameProps.gameStatus === EGameStatus.GameOver; // GameOver screen shows
        this.#spGameOver.draw();
        this.#spGameOverScore.value = GameProps.score;
        this.#spGameOverScore.visible = GameProps.gameStatus === EGameStatus.GameOver;
        this.#spGameOverScore.draw();


        this.#spHome.visible = GameProps.gameStatus === EGameStatus.GameOver; // Home button shows on GameOver
        this.#spHome.draw();
        this.#spRetry.visible = GameProps.gameStatus === EGameStatus.GameOver; // Retry button shows on GameOver
        this.#spRetry.draw();

        
    }


}

/* Use this file to create the menu for the snake game. */

