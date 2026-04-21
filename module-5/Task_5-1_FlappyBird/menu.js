"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, EGameStatus, soundMuted } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spGetReady;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGameOver;
  #spMedal;
  #spScoreBoardFinal;
  #spScoreBoardHigh;
  #spHighScores;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 200, 100);
    this.#spGetReady.index = 0; 
    this.#spGetReady.hidden = true;
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 200, 150);
    this.#spGameOver.visible = false;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 225, 195);
    this.#spMedal.visible = false;
    this.#spScoreBoardFinal = new TSpriteNumber(aSpcvs, aSPI.numberBig, 320, 160);
    this.#spScoreBoardFinal.visible = false;
    this.#spScoreBoardHigh = new TSpriteNumber(aSpcvs, aSPI.numberBig, 320, 210);
    this.#spScoreBoardHigh.visible = false;
    this.#spHighScores = [0];
    
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  setSoundMute(aIsMuted){
    if(aIsMuted){
      if(this.#sfRunning) this.#sfRunning.stop();
    }else{
      if(this.#sfRunning && EGameStatus.state === EGameStatus.gaming){
        this.#sfRunning.play();
      }
    }
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spGetReady.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spGetReady.hidden = true;
      this.#spTitle.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
      if(!soundMuted) this.#sfRunning.play();
      startGame();
    }
    
  }

  spPlayBtnClick(){
    console.log("Click!");
    EGameStatus.state = EGameStatus.countDown;
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spGetReady.hidden = false;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!soundMuted) {
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }
  showGameOver(aFinalScore, aHighScore) {
    if (this.#sfRunning != null) {this.#sfRunning.stop();}  
    this.#spTitle.hidden = false;
    this.#spGameScore.visible = false;
    this.#spGameOver.visible = true;
    this.#spScoreBoardFinal.value = aFinalScore;
    this.#spScoreBoardFinal.visible = true;
    this.#spPlayBtn.hidden = false;
    this.#sfRunning.stop();
   if (this.#spGameScore.value > this.#spHighScores.at(-1)) {this.#spHighScores.push(this.#spGameScore.value);
   aHighScore = this.#spHighScores.at(-1);} 
    this.#spScoreBoardHigh.value = this.#spHighScores.at(-1);
    this.#spScoreBoardHigh.visible = true;
    if (aFinalScore >= 10) {this.#spMedal.index = 1;} else if (aFinalScore >= 5) {
    this.#spMedal.index = 2;} else if (aFinalScore >= 2) {
    this.#spMedal.index = 3;} else {this.#spMedal.index = 0;}
    this.#spMedal.hidden = false;
  }
}
