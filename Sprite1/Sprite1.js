/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 103.95834500000001,
        y: -129.429485
      }),
      new Costume(
        "Screenshot 2022-04-05 9",
        "./Sprite1/costumes/Screenshot 2022-04-05 9.svg",
        { x: 111.5, y: 83.5 }
      ),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 111.5,
        y: 83.5
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.svg", {
        x: 83.77530906380724,
        y: 111.70602360627659
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 84.54765033809213,
        y: 111.68700641682801
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound("buzzer", "./Sprite1/sounds/buzzer.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage3
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 17;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.vars.randomI = this.random(-10, 10);
      this.stage.vars.randomIi = this.random(-10, 10);
      yield;
    }
  }

  *move() {
    if (0.5 < this.stage.vars.stickX || this.keyPressed("right arrow")) {
      this.x += 6;
      this.costume = "Screenshot 2022-04-05 9";
      if (this.touching(this.sprites["Course"].andClones())) {
        yield* this.startSound("buzzer");
        this.x += -6;
      }
    }
    if (-0.5 > this.stage.vars.stickX || this.keyPressed("left arrow")) {
      this.x += -6;
      this.costume = "costume2";
      if (this.touching(this.sprites["Course"].andClones())) {
        yield* this.startSound("buzzer");
        this.x += 6;
      }
    }
    if (0.5 < this.stage.vars.stickY || this.keyPressed("up arrow")) {
      this.costume = "costume4";
      this.y += 6;
      if (this.touching(this.sprites["Course"].andClones())) {
        yield* this.startSound("buzzer");
        this.y += -6;
      }
    }
    if (-0.5 > this.stage.vars.stickY || this.keyPressed("down arrow")) {
      this.costume = "costume3";
      this.y += -6;
      if (this.touching(this.sprites["Course"].andClones())) {
        yield* this.startSound("buzzer");
        this.y += 6;
      }
    }
  }

  *whenIReceiveMessage1() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.stage.vars.points = 0;
    this.visible = true;
    this.goto(0, 0);
    this.stage.vars.points = 0;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    while (true) {
      yield* this.move();
      yield;
    }
  }

  *whenIReceiveMessage2() {
    this.audioEffects.volume = 100;
    while (true) {
      if (this.touching(this.sprites["WallX176"].andClones())) {
        this.goto(184, 0);
      }
      if (this.touching(this.sprites["Wallx3319"].andClones())) {
        this.goto(-194, 0);
      }
      if (
        this.stage.vars.points < 40 &&
        this.touching(this.sprites["GhostAiisprite2"].andClones())
      ) {
        for (let i = 0; i < 10; i++) {
          this.size += -10;
          yield* this.wait(0.15);
          yield;
        }
        this.broadcast("JE&U^HYTGR");
        this.visible = false;
      }
      if (
        this.stage.vars.points < 40 &&
        this.touching(this.sprites["GhostAiii"].andClones())
      ) {
        for (let i = 0; i < 10; i++) {
          this.size += -10;
          yield* this.wait(0.15);
          yield;
        }
        this.broadcast("JE&U^HYTGR");
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveMessage3() {
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.stage.vars.points += 1;
      }
      yield;
    }
  }
}
