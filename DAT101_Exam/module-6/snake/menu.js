"use strict";
import { GameProps } from "./game.mjs"; // See the current score
import { TSpriteNumber, ESpriteNumberJustifyType } from "libSprite";

export class TMenu {
    #spGameScore;

    constructor(aSpcvs, aSPI) {
        // aSPI.Number shows to the numbers in the sprite sheet
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.Number, 20, 20);
        this.#spGameScore.justify = ESpriteNumberJustifyType.Left;
        this.#spGameScore.visible = true;
    }

    draw() {
        // Update the visible score to match the real score
        this.#spGameScore.value = GameProps.score; // Reads GameProps.score
        this.#spGameScore.draw();
    }
}

/* Use this file to create the menu for the snake game. */

