/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 240.48948948948947,
        y: 182.68168168168165
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.OuiyGjlouiyutyhgjhkjlouiyutmgj = 0;
    this.visible = false;
    while (true) {
      if (
        this.stage.vars.OuiyGjlouiyutyhgjhkjlouiyutmgj == 2 &&
        this.stage.vars.points > 50
      ) {
        this.visible = true;
      }
      yield;
    }
  }
}
