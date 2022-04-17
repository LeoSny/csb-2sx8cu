/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class X extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./X/costumes/costume1.svg", { x: 41, y: 45.5 })
    ];

    this.sounds = [new Sound("pop", "./X/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "credits" },
        this.whenIReceiveCredits
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "X credits" },
        this.whenIReceiveXCredits
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCredits() {
    yield* this.wait(1);
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("X credits");
  }

  *whenIReceiveXCredits() {
    this.visible = false;
  }
}
