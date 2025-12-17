import desert from './assets/tiles/desert.png';
import wood from './assets/tiles/wood.png';
import brick from './assets/tiles/brick.png';
import wheat from './assets/tiles/wheat.png';
import sheep from './assets/tiles/sheep.png';
import ore from './assets/tiles/ore.png';

import red_settlement from './assets/pieces/red_settlement.png';
import blue_settlement from './assets/pieces/blue_settlement.png';
import green_settlement from './assets/pieces/green_settlement.png';
import white_settlement from './assets/pieces/white_settlement.png';
import orange_settlement from './assets/pieces/orange_settlement.png';

import red_road from './assets/pieces/red_road.png';
import blue_road from './assets/pieces/blue_road.png';
import green_road from './assets/pieces/green_road.png';
import white_road from './assets/pieces/white_road.png';
import orange_road from './assets/pieces/orange_road.png';

import num_blank from './assets/numbers/blank.png';
import num_2 from './assets/numbers/2.png';
import num_3 from './assets/numbers/3.png';
import num_4 from './assets/numbers/4.png';
import num_5 from './assets/numbers/5.png';
import num_6 from './assets/numbers/6.png';
import num_8 from './assets/numbers/8.png';
import num_9 from './assets/numbers/9.png';
import num_10 from './assets/numbers/10.png';
import num_11 from './assets/numbers/11.png';
import num_12 from './assets/numbers/12.png';

import _marker from './assets/misc/marker.png';
import _marker_green from './assets/misc/marker_green.png';
import _marker_yellow from './assets/misc/marker_yellow.png';

export const MARKER = _marker;
export const MARKER_GREEN = _marker_green;
export const MARKER_YELLOW = _marker_yellow;

export const TILES = [
  {
    name: "Desert",
    index: 0,
    image: desert,
  },
  {
    name: "Wood",
    index: 1,
    image: wood,
  },
  {
    name: "Brick",
    index: 2,
    image: brick,
  },
  {
    name: "Wheat",
    index: 3,
    image: wheat,
  },
  {
    name: "Sheep",
    index: 4,
    image: sheep,
  },
  {
    name: "Ore",
    index: 5,
    image: ore,
  },
]

const HEX_HEIGHT = "20%";
const SIDE_LENGTH = `(${HEX_HEIGHT} / 2)`;
const ALT_LENGTH = `(sqrt(3) * ${HEX_HEIGHT} / 4)`
const BUFFER = "0.2%";

export const HEXES = [
  {
    index: 0,
    height: HEX_HEIGHT,
    left: `(50% - 2 * ${ALT_LENGTH} - ${BUFFER})`,
    top: `(50% - 3 * ${SIDE_LENGTH} - ${BUFFER})`
  },
  {
    index: 1,
    height: HEX_HEIGHT,
    left: `(50% - 3 * ${ALT_LENGTH} - 3 * ${BUFFER} / 2)`,
    top: `(50% - 3 * ${SIDE_LENGTH} / 2  - ${BUFFER} / 2)`,
  },
  {
    index: 2,
    height: HEX_HEIGHT,
    left: `(50% - 4 * ${ALT_LENGTH} - 2 * ${BUFFER})`,
    top: `(50%)`,
  },
  {
    index: 3,
    height: HEX_HEIGHT,
    left: `(50% - 3 * ${ALT_LENGTH} - 3 * ${BUFFER} / 2)`,
    top: `(50% + 3 * ${SIDE_LENGTH} / 2  + ${BUFFER} / 2)`,
  },
  {
    index: 4,
    height: HEX_HEIGHT,
    left: `(50% - 2 * ${ALT_LENGTH} - ${BUFFER})`,
    top: `(50% + 3 * ${SIDE_LENGTH} + ${BUFFER})`
  },
  {
    index: 5,
    height: HEX_HEIGHT,
    left: `(50%)`,
    top: `(50% + 3 * ${SIDE_LENGTH} + ${BUFFER})`,
  },
  {
    index: 6,
    height: HEX_HEIGHT,
    left: `(50% + 2 * ${ALT_LENGTH} + ${BUFFER})`,
    top: `(50% + 3 * ${SIDE_LENGTH} + ${BUFFER})`
  },
  {
    index: 7,
    height: HEX_HEIGHT,
    left: `(50% + 3 * ${ALT_LENGTH} + 3 * ${BUFFER} / 2)`,
    top: `(50% + 3 * ${SIDE_LENGTH} / 2  + ${BUFFER} / 2)`,
  },
  {
    index: 8,
    height: HEX_HEIGHT,
    left: `(50% + 4 * ${ALT_LENGTH} + 2 * ${BUFFER})`,
    top: `(50%)`,
  },
  {
    index: 9,
    height: HEX_HEIGHT,
    left: `(50% + 3 * ${ALT_LENGTH} + 3 * ${BUFFER} / 2)`,
    top: `(50% - 3 * ${SIDE_LENGTH} / 2  - ${BUFFER} / 2)`,
  },
  {
    index: 10,
    height: HEX_HEIGHT,
    left: `(50% + 2 * ${ALT_LENGTH} + ${BUFFER})`,
    top: `(50% - 3 * ${SIDE_LENGTH} - ${BUFFER})`
  },
  {
    index: 11,
    height: HEX_HEIGHT,
    left: `(50%)`,
    top: `(50% - 3 * ${SIDE_LENGTH} - ${BUFFER})`,
  },
  {
    index: 12,
    height: HEX_HEIGHT,
    left: `(50% - ${ALT_LENGTH} - ${BUFFER} / 2)`,
    top: `(50% - 3 * ${SIDE_LENGTH} / 2  - ${BUFFER} / 2)`,
  },
  {
    index: 13,
    height: HEX_HEIGHT,
    left: `(50% - 2 * ${ALT_LENGTH} - ${BUFFER})`,
    top: `(50%)`,
  },
  {
    index: 14,
    height: HEX_HEIGHT,
    left: `(50% - ${ALT_LENGTH} - ${BUFFER} / 2)`,
    top: `(50% + 3 * ${SIDE_LENGTH} / 2  + ${BUFFER} / 2)`
  },
  {
    index: 15,
    height: HEX_HEIGHT,
    left: `(50% + ${ALT_LENGTH} + ${BUFFER} / 2)`,
    top: `(50% + 3 * ${SIDE_LENGTH} / 2  + ${BUFFER} / 2)`
  },
  {
    index: 16,
    height: HEX_HEIGHT,
    left: `(50% + 2 * ${ALT_LENGTH} + ${BUFFER})`,
    top: `(50%)`,
  },
  {
    index: 17,
    height: HEX_HEIGHT,
    left: `(50% + ${ALT_LENGTH} + ${BUFFER} / 2)`,
    top: `(50% - 3 * ${SIDE_LENGTH} / 2  - ${BUFFER} / 2)`,
  },
  {
    index: 18,
    height: HEX_HEIGHT,
    left: "50%",
    top: "50%",
  }
]

export const SETTLEMENTS = [
  {
    name: "Red",
    index: 0,
    image: red_settlement
  },
  {
    name: "Blue",
    index: 1,
    image: blue_settlement
  },
  {
    name: "Green",
    index: 2,
    image: green_settlement
  },
  {
    name: "Orange",
    index: 3,
    image: orange_settlement
  }
]

const SETTLEMENT_HEIGHT = "4%";
const SETTLEMENT_ASPECT_RATIO = "47 / 37";
const SETTLEMENT_WIDTH = `${SETTLEMENT_HEIGHT} * ${SETTLEMENT_ASPECT_RATIO}`;

export const VERTEX_STRAIGHT = SIDE_LENGTH;
export const VERTEX_SKEW_X = ALT_LENGTH;
export const VERTEX_SKEW_Y = `${SIDE_LENGTH} / 2`;

export const VERTICES = [
  {
    index: 0,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 0,
    pos: 0,
  },
  {
    index: 1,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 0,
    pos: 1,
  },
  {
    index: 2,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 1,
    pos: 0,
  },
  {
    index: 3,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 1,
    pos: 1,
  },
  {
    index: 4,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 2,
    pos: 0,
  },
  {
    index: 5,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 2,
    pos: 1,
  },
  {
    index: 6,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 2,
    pos: 2,
  },
  {
    index: 7,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 3,
    pos: 1,
  },
  {
    index: 8,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 3,
    pos: 2,
  },
  {
    index: 9,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 4,
    pos: 1,
  },
  {
    index: 10,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 4,
    pos: 2,
  },
  {
    index: 11,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 4,
    pos: 3,
  },
  {
    index: 12,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 5,
    pos: 2,
  },
  {
    index: 13,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 5,
    pos: 3,
  },
  {
    index: 14,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 6,
    pos: 2,
  },
  {
    index: 15,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 6,
    pos: 3,
  },
  {
    index: 16,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 6,
    pos: 4,
  },
  {
    index: 17,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 7,
    pos: 3,
  },
  {
    index: 18,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 7,
    pos: 4,
  },
  {
    index: 19,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 8,
    pos: 3,
  },
  {
    index: 20,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 8,
    pos: 4,
  },
  {
    index: 21,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 8,
    pos: 5,
  },
  {
    index: 22,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 9,
    pos: 4,
  },
  {
    index: 23,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 9,
    pos: 5,
  },
  {
    index: 24,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 10,
    pos: 4,
  },
  {
    index: 25,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 10,
    pos: 5,
  },
  {
    index: 26,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 10,
    pos: 0,
  },
  {
    index: 27,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 11,
    pos: 5,
  },
  {
    index: 28,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 11,
    pos: 0,
  },
  {
    index: 29,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 0,
    pos: 5,
  },
  {
    index: 30,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 12,
    pos: 0,
  },
  {
    index: 31,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 12,
    pos: 1,
  },
  {
    index: 32,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 13,
    pos: 0,
  },
  {
    index: 33,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 13,
    pos: 1,
  },
  {
    index: 34,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 13,
    pos: 2,
  },
  {
    index: 35,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 14,
    pos: 1,
  },
  {
    index: 36,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 14,
    pos: 2,
  },
  {
    index: 37,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 14,
    pos: 3,
  },
  {
    index: 38,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 15,
    pos: 2,
  },
  {
    index: 39,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 15,
    pos: 3,
  },
  {
    index: 40,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 15,
    pos: 4,
  },
  {
    index: 41,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 16,
    pos: 3,
  },
  {
    index: 42,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 16,
    pos: 4,
  },
  {
    index: 43,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 16,
    pos: 5,
  },
  {
    index: 44,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 17,
    pos: 4,
  },
  {
    index: 45,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 17,
    pos: 5,
  },
  {
    index: 46,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 17,
    pos: 0,
  },
  {
    index: 47,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 12,
    pos: 5,
  },
  {
    index: 48,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 18,
    pos: 0,
  },
  {
    index: 49,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 18,
    pos: 1,
  },
  {
    index: 50,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 18,
    pos: 2,
  },
  {
    index: 51,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 18,
    pos: 3,
  },
  {
    index: 52,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 18,
    pos: 4,
  },
  {
    index: 53,
    height: SETTLEMENT_HEIGHT,
    width: SETTLEMENT_WIDTH,
    hex: 18,
    pos: 5,
  },
]

export const ROADS = [
  {
    name: "Red",
    index: 0,
    image: red_road
  },
  {
    name: "Blue",
    index: 1,
    image: blue_road
  },
  {
    name: "Green",
    index: 2,
    image: green_road
  },
  {
    name: "Orange",
    index: 3,
    image: orange_road
  }
]

export const ROAD_HEIGHT = `7%`;
const ROAD_ASPECT_RATIO = "11 / 92";
export const ROAD_WIDTH = `${ROAD_HEIGHT} * ${ROAD_ASPECT_RATIO}`;

export const EDGES = [
  {
    index: 0,
    v1: 0,
    v2: 1,
    rot: 0,
  },
  {
    index: 1,
    v1: 1,
    v2: 2,
    rot: 2,
  },
  {
    index: 2,
    v1: 2,
    v2: 3,
    rot: 0,
  },
  {
    index: 3,
    v1: 3,
    v2: 4,
    rot: 2,
  },
  {
    index: 4,
    v1: 4,
    v2: 5,
    rot: 0,
  },
  {
    index: 5,
    v1: 5,
    v2: 6,
    rot: 1,
  },
  {
    index: 6,
    v1: 6,
    v2: 7,
    rot: 0,
  },
  {
    index: 7,
    v1: 7,
    v2: 8,
    rot: 1,
  },
  {
    index: 8,
    v1: 8,
    v2: 9,
    rot: 0,
  },
  {
    index: 9,
    v1: 9,
    v2: 10,
    rot: 1,
  },
  {
    index: 10,
    v1: 10,
    v2: 11,
    rot: 2,
  },
  {
    index: 11,
    v1: 11,
    v2: 12,
    rot: 1,
  },
  {
    index: 12,
    v1: 12,
    v2: 13,
    rot: 2,
  },
  {
    index: 13,
    v1: 13,
    v2: 14,
    rot: 1,
  },
  {
    index: 14,
    v1: 14,
    v2: 15,
    rot: 2,
  },
  {
    index: 15,
    v1: 15,
    v2: 16,
    rot: 0,
  },
  {
    index: 16,
    v1: 16,
    v2: 17,
    rot: 2,
  },
  {
    index: 17,
    v1: 17,
    v2: 18,
    rot: 0,
  },
  {
    index: 18,
    v1: 18,
    v2: 19,
    rot: 2,
  },
  {
    index: 19,
    v1: 19,
    v2: 20,
    rot: 0,
  },
  {
    index: 20,
    v1: 20,
    v2: 21,
    rot: 1,
  },
  {
    index: 21,
    v1: 21,
    v2: 22,
    rot: 0,
  },
  {
    index: 22,
    v1: 22,
    v2: 23,
    rot: 1,
  },
  {
    index: 23,
    v1: 23,
    v2: 24,
    rot: 0,
  },
  {
    index: 24,
    v1: 24,
    v2: 25,
    rot: 1,
  },
  {
    index: 25,
    v1: 25,
    v2: 26,
    rot: 2,
  },
  {
    index: 26,
    v1: 26,
    v2: 27,
    rot: 1,
  },
  {
    index: 27,
    v1: 27,
    v2: 28,
    rot: 2,
  },
  {
    index: 28,
    v1: 0,
    v2: 29,
    rot: 2,
  },
  {
    index: 29,
    v1: 28,
    v2: 29,
    rot: 1,
  },
  {
    index: 30,
    v1: 1,
    v2: 30,
    rot: 1,
  },
  {
    index: 31,
    v1: 30,
    v2: 31,
    rot: 0,
  },
  {
    index: 32,
    v1: 3,
    v2: 32,
    rot: 1,
  },
  {
    index: 33,
    v1: 31,
    v2: 32,
    rot: 2,
  },
  {
    index: 34,
    v1: 6,
    v2: 33,
    rot: 2,
  },
  {
    index: 35,
    v1: 32,
    v2: 33,
    rot: 0,
  },
  {
    index: 36,
    v1: 33,
    v2: 34,
    rot: 1,
  },
  {
    index: 37,
    v1: 8,
    v2: 35,
    rot: 2,
  },
  {
    index: 38,
    v1: 34,
    v2: 35,
    rot: 0,
  },
  {
    index: 39,
    v1: 11,
    v2: 36,
    rot: 0,
  },
  {
    index: 40,
    v1: 35,
    v2: 36,
    rot: 1,
  },
  {
    index: 41,
    v1: 36,
    v2: 37,
    rot: 2,
  },
  {
    index: 42,
    v1: 13,
    v2: 38,
    rot: 0,
  },
  {
    index: 43,
    v1: 37,
    v2: 38,
    rot: 1,
  },
  {
    index: 44,
    v1: 16,
    v2: 39,
    rot: 1,
  },
  {
    index: 45,
    v1: 38,
    v2: 39,
    rot: 2,
  },
  {
    index: 46,
    v1: 39,
    v2: 40,
    rot: 0,
  },
  {
    index: 47,
    v1: 18,
    v2: 41,
    rot: 1,
  },
  {
    index: 48,
    v1: 40,
    v2: 41,
    rot: 2,
  },
  {
    index: 49,
    v1: 21,
    v2: 42,
    rot: 2,
  },
  {
    index: 50,
    v1: 41,
    v2: 42,
    rot: 0,
  },
  {
    index: 51,
    v1: 42,
    v2: 43,
    rot: 1,
  },
  {
    index: 52,
    v1: 23,
    v2: 44,
    rot: 2,
  },
  {
    index: 53,
    v1: 43,
    v2: 44,
    rot: 0,
  },
  {
    index: 54,
    v1: 26,
    v2: 45,
    rot: 0,
  },
  {
    index: 55,
    v1: 44,
    v2: 45,
    rot: 1,
  },
  {
    index: 56,
    v1: 45,
    v2: 46,
    rot: 2,
  },
  {
    index: 57,
    v1: 28,
    v2: 47,
    rot: 0,
  },
  {
    index: 58,
    v1: 30,
    v2: 47,
    rot: 2,
  },
  {
    index: 59,
    v1: 46,
    v2: 47,
    rot: 1,
  },
  {
    index: 60,
    v1: 31,
    v2: 48,
    rot: 1,
  },
  {
    index: 61,
    v1: 34,
    v2: 49,
    rot: 2,
  },
  {
    index: 62,
    v1: 48,
    v2: 49,
    rot: 0,
  },
  {
    index: 63,
    v1: 37,
    v2: 50,
    rot: 0,
  },
  {
    index: 64,
    v1: 49,
    v2: 50,
    rot: 1,
  },
  {
    index: 65,
    v1: 40,
    v2: 51,
    rot: 1,
  },
  {
    index: 66,
    v1: 50,
    v2: 51,
    rot: 2,
  },
  {
    index: 67,
    v1: 43,
    v2: 52,
    rot: 2,
  },
  {
    index: 68,
    v1: 51,
    v2: 52,
    rot: 0,
  },
  {
    index: 69,
    v1: 46,
    v2: 53,
    rot: 0,
  },
  {
    index: 70,
    v1: 48,
    v2: 53,
    rot: 2,
  },
  {
    index: 71,
    v1: 52,
    v2: 53,
    rot: 1,
  }
]

export const NUMBERS = [
  {
    value: 0,
    image: num_blank,
  },
  {
    value: 1,
    image: num_blank,
  },
  {
    value: 2,
    image: num_2,
  },
  {
    value: 3,
    image: num_3,
  },
  {
    value: 4,
    image: num_4,
  },
  {
    value: 5,
    image: num_5,
  },
  {
    value: 6,
    image: num_6,
  },
  {
    value: 7,
    image: num_blank,
  },
  {
    value: 8,
    image: num_8,
  },
  {
    value: 9,
    image: num_9,
  },
  {
    value: 10,
    image: num_10,
  },
  {
    value: 11,
    image: num_11,
  },
  {
    value: 12,
    image: num_12,
  },
]

export const NUMBER_HEIGHT = "8%";
export const MARKER_HEIGHT = "3.5%";