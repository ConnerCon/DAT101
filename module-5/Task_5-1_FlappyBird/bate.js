"use strict";
// lag en klasse som heter TBate
// Denne skal arve fra TSprite
// Skal ha en konsktruktor som har paramentere (aSpcvs, aSPI)
// Rope på super på din konstruktør med (aSpcvs, aSPI, 200, 100)

import { TSprite } from "libSprite";

export class TBate extends TSprite {
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 200, 100);
  }
}

//heloooooo please