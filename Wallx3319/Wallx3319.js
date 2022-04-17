/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wallx3319 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wallx3319/costumes/costume1.svg", {
        x: 125.20834350585938,
        y: 45.58037185668945
      })
    ];

    this.sounds = [new Sound("pop", "./Wallx3319/sounds/pop.wav")];

    this.triggers = [];
  }
}
