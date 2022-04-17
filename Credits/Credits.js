/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Credits extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Credits/costumes/costume1.svg", {
        x: 345,
        y: 234.75
      })
    ];

    this.sounds = [new Sound("pop", "./Credits/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "credits" },
        this.whenIReceiveCredits
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "X credits" },
        this.whenIReceiveXCredits
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenIReceiveCredits() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
  }

  *whenIReceiveXCredits() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.size = 0;
  }
}
