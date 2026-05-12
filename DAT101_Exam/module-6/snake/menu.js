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
        // aspi controls positions
        this.#spPlay = new TSpriteButtonHaptic(aSpcvs, aSPI.Play, 355, 241);
        this.#spPlay.animated = true;
        this.#spPlay.visible = true; // Visible at start

        // RESUME BUTTON
        this.#spResume = new TSpriteButtonHaptic(aSpcvs, aSPI.Resume, 355, 241);
        this.#spResume.animated = true;
        this.#spResume.visible = false; // Hidden at start

        // HOME BUTTON
        this.#spHome = new TSpriteButton (aSpcvs, aSPI.Home, 95, 378);
        this.#spHome.visible = false; // Hidden at start

        // RETRY BUTTON
        this.#spRetry = new TSpriteButton (aSpcvs, aSPI.Retry, 645, 378);
        this.#spRetry.visible = false; // Hidden at start

        // GAME OVER SCREEN & TOTAL SCORE
        this.#spGameOver = new TSprite(aSpcvs, aSPI.GameOver, 30, 30);
        this.#spGameOver.visible = false; // Hidden at start

        this.#spGameOverScore = new TSpriteNumber(aSpcvs, aSPI.Number, 530, 235, 0, 0, ESpriteNumberJustifyType.Left);
        this.#spGameOverScore.visible = false; // Hidden at start
        
        
        // EVENTLISTENERS
        // PLAY button, game start & button dissapears
        this.#spPlay.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.Idle) {
        GameProps.gameStatus = EGameStatus.Playing;
        this.#spPlay.visible = false;
        }
        });
        
        // RESUME button, the game continues/unpauses
        this.#spResume.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        }
        });

        // HOME button, it starts new game with playbutton
        this.#spHome.addEventListener("click", () => {
        if (GameProps.gameStatus === EGameStatus.GameOver) {
        newGame();
        GameProps.gameStatus = EGameStatus.Idle; // Go back to idle state
        this.#spPlay.hidden = false;
        }
        });

        // RETRY is same as home, but it starts right away
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
        this.#spGameScore.draw(); // Shows score during game
        if(GameProps.gameStatus === EGameStatus.Pause, EGameStatus.Playing){
            this.#spGameScore.visible = true}
        if(GameProps.gameStatus === EGameStatus.GameOver){
            this.#spGameScore.visible = false;
        }

        this.#spPlay.draw();
        this.#spResume.visible = GameProps.gameStatus === EGameStatus.Pause; // Resume shows based on GameStatus
        this.#spResume.draw();

        this.#spGameOver.visible = GameProps.gameStatus === EGameStatus.GameOver;
        this.#spGameOver.draw();
        this.#spGameOverScore.value = GameProps.score;
        this.#spGameOverScore.visible = GameProps.gameStatus === EGameStatus.GameOver;
        this.#spGameOverScore.draw();


        this.#spHome.visible = GameProps.gameStatus === EGameStatus.GameOver;
        this.#spHome.draw();
        this.#spRetry.visible = GameProps.gameStatus === EGameStatus.GameOver;
        this.#spRetry.draw();

        
    }


}

/* Use this file to create the menu for the snake game. */

