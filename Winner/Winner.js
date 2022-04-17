/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Winner extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Winner/costumes/costume1.svg", {
        x: 53,
        y: 53
      })
    ];

    this.sounds = [new Sound("pop", "./Winner/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      yield* this.win();
      yield;
    }
  }

  *win() {
    this.visible = false;
    while (true) {
      if (
        this.stage.vars.OuiyGjlouiyutyhgjhkjlouiyutmgj == 2 &&
        50 < this.stage.vars.points
      ) {
        this.visible = true;
        yield* this.sayAndWait("You win", 2);
      }
      yield;
    }
  }
}
