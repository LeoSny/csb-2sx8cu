/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WallX176 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./WallX176/costumes/costume1.svg", {
        x: 8.25,
        y: 26.75
      })
    ];

    this.sounds = [new Sound("pop", "./WallX176/sounds/pop.wav")];

    this.triggers = [];
  }
}
