/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GhostAiii extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GhostAiii/costumes/costume1.svg", {
        x: 37.5,
        y: 37.599320000000006
      }),
      new Costume("costume2", "./GhostAiii/costumes/costume2.svg", {
        x: 37.8125,
        y: 43.5
      })
    ];

    this.sounds = [new Sound("pop", "./GhostAiii/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.size = 50;
    this.visible = true;
    while (true) {
      if (40 < this.stage.vars.points) {
        this.costume = "costume2";
      }
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.OuiyGjlouiyutyhgjhkjlouiyutmgj += 1;
        this.broadcast("Almostthere2");
        this.visible = false;
        this.size = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(108, -58);
      yield* this.glide(1, 109, -56);
      yield* this.wait(1);
      yield* this.glide(1, 143, -56);
      yield* this.wait(1);
      yield* this.glide(1, 145, -116);
      yield* this.wait(1);
      yield* this.glide(1, -24, -123);
      yield* this.wait(1);
      yield* this.glide(1, -21, -156);
      yield* this.wait(1);
      yield* this.glide(1, -212, -159);
      yield* this.wait(1);
      yield* this.glide(1, -211, -108);
      yield* this.wait(1);
      yield* this.glide(1, -112, -108);
      yield* this.wait(1);
      yield* this.glide(1, -212, -108);
      yield* this.wait(1);
      yield* this.glide(1, -209, -150);
      yield* this.wait(1);
      yield* this.glide(1, -23, -152);
      yield* this.wait(1);
      yield* this.glide(1, -20, -2);
      yield* this.wait(1);
      yield* this.glide(1, -20, -2);
      yield* this.wait(1);
      yield* this.glide(1, -23, -116);
      yield* this.wait(1);
      yield* this.glide(1, 140, -85);
      yield* this.wait(1);
      yield;
    }
  }
}
