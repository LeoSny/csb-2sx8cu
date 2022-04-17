/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.power = 0;
    this.vars.stickDirection = -90;
    this.vars.stickX = 0;
    this.vars.stickY = 0;
    this.vars.randomI = 9;
    this.vars.randomIi = 4;
    this.vars.points = 81;
    this.vars.speed = 0;
    this.vars.OuiyGjlouiyutyhgjhkjlouiyutmgj = 2;
  }
}
