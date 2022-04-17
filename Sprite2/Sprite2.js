/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 44.5,
        y: 44.5
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 44.5,
        y: 44.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 150;
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "costume2";
        if (this.mouse.down) {
          this.broadcast("credits");
        }
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.size += -10;
      yield* this.wait(1);
      this.size += 10;
      yield* this.wait(1);
      yield;
    }
  }
}
