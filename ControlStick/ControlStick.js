/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ControlStick extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Base", "./ControlStick/costumes/Base.svg", {
        x: 42.500000000000085,
        y: 42
      }),
      new Costume("Stick", "./ControlStick/costumes/Stick.svg", {
        x: 18.306119999999936,
        y: 17
      })
    ];

    this.sounds = [new Sound("pop", "./ControlStick/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];

    this.vars.baseSprite = "Control stick";
    this.vars.maxStick = 37.5;
  }

  *whenGreenFlagClicked() {
    this.size = 150;
    this.vars.maxStick = this.size / 4;
    this.vars.baseSprite = "Control stick";
    this.costume = "Base";
    this.effects.ghost = 60;
    this.createClone();
  }

  *startAsClone() {
    this.costume = "Stick";
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    this.effects.ghost = 25;
    while (true) {
      this.stage.vars.power = 0;
      this.stage.vars.stickX = 0;
      this.stage.vars.stickY = 0;
      while (!this.mouse.down) {
        this.goto(this.sprites[undefined].x, this.sprites[undefined].y);
        yield;
      }
      if (
        Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) <
        this.size * 0.6
      ) {
        yield* this.stickDrag();
      } else {
        while (!!this.mouse.down) {
          yield;
        }
      }
      yield;
    }
  }

  *stickDrag() {
    while (!!this.mouse.down) {
      this.goto(this.mouse.x, this.mouse.y);
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites[undefined].y - this.y,
          this.sprites[undefined].x - this.x
        )
      );
      this.direction += 180;
      this.stage.vars.stickDirection = this.direction;
      this.stage.vars.power = Math.hypot(
        this.sprites[undefined].x - this.x,
        this.sprites[undefined].y - this.y
      );
      if (this.stage.vars.power > this.vars.maxStick) {
        this.move(this.vars.maxStick - this.stage.vars.power);
        this.stage.vars.power = this.vars.maxStick;
      }
      this.stage.vars.power = this.stage.vars.power / this.vars.maxStick;
      this.stage.vars.stickX =
        this.stage.vars.power *
        Math.sin(this.scratchToRad(this.stage.vars.stickDirection));
      this.stage.vars.stickY =
        this.stage.vars.power *
        Math.cos(this.scratchToRad(this.stage.vars.stickDirection));
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.visible = true;
  }
}
