/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Menu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Menu/costumes/costume1.svg", {
        x: 239.75,
        y: 182.25
      })
    ];

    this.sounds = [new Sound("pop", "./Menu/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveMessage1() {
    for (let i = 0; i < 10; i++) {
      yield* this.wait(0.1);
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    /* TODO: Implement looks_gotofrontback */ null;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }
}
