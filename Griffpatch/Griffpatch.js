/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Griffpatch extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Griffpatch/costumes/costume1.svg", {
        x: 52,
        y: 45.5
      })
    ];

    this.sounds = [new Sound("pop", "./Griffpatch/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    if (/* no username */ "" == "griffpatch") {
      this.visible = true;
      yield* this.sayAndWait("YOUR GRIFFPATCH!!!", 2);
      yield* this.sayAndWait(
        "If you are viewing this, I must be getting better at coding!",
        2
      );
      yield* this.sayAndWait("Thank you Sir, LEOSNY", 2);
      this.visible = false;
    }
  }
}
