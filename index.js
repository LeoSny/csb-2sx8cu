import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Course from "./Course/Course.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import WallX176 from "./WallX176/WallX176.js";
import Wallx3319 from "./Wallx3319/Wallx3319.js";
import GhostAiisprite2 from "./GhostAiisprite2/GhostAiisprite2.js";
import GhostAiii from "./GhostAiii/GhostAiii.js";
import Menu from "./Menu/Menu.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Credits from "./Credits/Credits.js";
import X from "./X/X.js";
import Griffpatch from "./Griffpatch/Griffpatch.js";
import ControlStick from "./ControlStick/ControlStick.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Winner from "./Winner/Winner.js";
import Lose from "./Lose/Lose.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 102,
    y: 96,
    direction: 90,
    costumeNumber: 5,
    size: 17,
    visible: true
  }),
  Course: new Course({
    x: -20.203658418858538,
    y: -7.23676042526148,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: -215.9883576920952,
    y: 96.00421109100353,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true
  }),
  WallX176: new WallX176({
    x: -230.00805053206182,
    y: 35.998926584646156,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Wallx3319: new Wallx3319({
    x: 331.0091342575317,
    y: -9.001527552618935,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  GhostAiisprite2: new GhostAiisprite2({
    x: 69.65299999999999,
    y: 22.018,
    direction: 90,
    costumeNumber: 2,
    size: 6.666666666666667,
    visible: false
  }),
  GhostAiii: new GhostAiii({
    x: -23,
    y: -152,
    direction: 90,
    costumeNumber: 2,
    size: 6.666666666666667,
    visible: false
  }),
  Menu: new Menu({
    x: 19,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 110.00000000000001,
    visible: false
  }),
  Sprite4: new Sprite4({
    x: -13,
    y: -95,
    direction: 90,
    costumeNumber: 2,
    size: 175,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: 150,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 140,
    visible: false
  }),
  Credits: new Credits({
    x: 40,
    y: 31,
    direction: 90,
    costumeNumber: 1,
    size: 0.9437078063136494,
    visible: false
  }),
  X: new X({
    x: -199,
    y: -131,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Griffpatch: new Griffpatch({
    x: 7,
    y: 34,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ControlStick: new ControlStick({
    x: 146.88235294117646,
    y: -91.4705882352941,
    direction: -96.10108711615442,
    costumeNumber: 1,
    size: 150,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: -136,
    y: 34,
    direction: 90,
    costumeNumber: 1,
    size: 85,
    visible: true
  }),
  Sprite6: new Sprite6({
    x: -8,
    y: -4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Winner: new Winner({
    x: -7,
    y: -25,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Lose: new Lose({
    x: 7,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
