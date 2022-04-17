/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Course extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Course/costumes/costume1.svg", {
        x: 237.33909,
        y: 208.41348500000004
      })
    ];

    this.sounds = [new Sound("pop", "./Course/sounds/pop.wav")];

    this.triggers = [];
  }
}
