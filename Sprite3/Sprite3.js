/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 25,
        y: 25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *startAsClone() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["Course"].andClones())) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
    for (let i = 0; i < 140; i++) {
      this.createClone();
      yield;
    }
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        0;
      }
      yield;
    }
  }
}
