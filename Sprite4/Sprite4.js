/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 38,
        y: 38
      }),
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 38,
        y: 38
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
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
          this.visible = false;
          this.broadcast("message1");
        }
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.size += 25;
      yield* this.wait(1);
      this.size += -25;
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveMessage1() {
    yield* this.fadeOut();
  }

  *fadeOut() {
    for (let i = 0; i < 10; i++) {
      yield* this.wait(1);
      this.effects.ghost += -10;
      yield;
    }
  }

  *whenGreenFlagClicked3() {}
}
