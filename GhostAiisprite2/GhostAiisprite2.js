/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GhostAiisprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GhostAiisprite2/costumes/costume1.svg", {
        x: 37.8125,
        y: 43.5
      }),
      new Costume("costume2", "./GhostAiisprite2/costumes/costume2.svg", {
        x: 37.8125,
        y: 43.5
      })
    ];

    this.sounds = [new Sound("pop", "./GhostAiisprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      )
    ];
  }

  *whenIReceiveMessage1() {
    this.size = 50;
    this.visible = true;
    this.costume = "costume1";
    while (true) {
      this.goto(108, -58);
      yield* this.glide(1, 150, -60);
      yield* this.wait(1);
      yield* this.glide(1, 143, -121);
      yield* this.wait(1);
      yield* this.glide(1, -18, -106);
      yield* this.wait(1);
      yield* this.glide(1, -18, -68);
      yield* this.wait(1);
      yield* this.glide(1, -145, -63);
      yield* this.wait(1);
      yield* this.glide(1, -141, 21);
      yield* this.wait(1);
      yield* this.glide(1, -145, 117);
      yield* this.wait(1);
      yield* this.glide(1, -37, 117);
      yield* this.wait(1);
      yield* this.glide(1, 88, 116);
      yield* this.wait(1);
      yield* this.glide(1, 95, 25);
      yield* this.wait(1);
      yield* this.glide(1, 44, 19);
      yield* this.wait(1);
      yield* this.glide(1, 44, 62);
      yield* this.wait(1);
      yield* this.glide(1, -83, 64);
      yield* this.wait(1);
      yield* this.glide(1, 36, 67);
      yield* this.wait(1);
      yield* this.glide(1, 46, 23);
      yield* this.wait(1);
      yield* this.glide(1, 103, 22);
      yield* this.wait(1);
      yield* this.glide(1, 110, -61);
      yield;
    }
  }

  *whenIReceiveMessage2() {
    while (true) {
      if (this.stage.vars.points > 40) {
        this.costume = "costume2";
        if (this.touching(this.sprites["Sprite1"].andClones())) {
          this.size = 0;
          this.stage.vars.OuiyGjlouiyutyhgjhkjlouiyutmgj += 1;
          this.visible = false;
        }
      }
      yield;
    }
  }
}
