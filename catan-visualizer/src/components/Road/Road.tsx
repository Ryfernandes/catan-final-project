import { ROADS, EDGES, VERTICES, HEXES, ROAD_HEIGHT, ROAD_WIDTH, VERTEX_STRAIGHT, VERTEX_SKEW_X, VERTEX_SKEW_Y } from '../../data'

import './Road.css'

interface RoadProps {
  index: number;
  player: number;
}

const Road = ({ player, index } : RoadProps) => {
  const image = ROADS[player].image;
  const v1 = EDGES[index].v1;
  const v2 = EDGES[index].v2;
  const rot = EDGES[index].rot;
  const deg = rot == 0 ? "0deg" : rot == 1 ? "120deg" : "240deg";

  //Compute location for v1

  const hex1 = VERTICES[v1].hex;
  const pos1 = VERTICES[v1].pos;
  const left_op1 = pos1 < 2 ? "-" : "+";
  const top_op1 = pos1 == 0 || pos1 > 3 ? "-" : "+";
  const left_amount1 = VERTEX_SKEW_X;
  const top_amount1 = pos1 % 3 == 2 ? VERTEX_STRAIGHT : VERTEX_SKEW_Y;
  const left1 = `${HEXES[hex1].left} ${pos1 % 3 == 2 ? "" : `${left_op1} ${left_amount1}`}`;
  const top1 = `${HEXES[hex1].top} ${top_op1} ${top_amount1}`;

  //Compute location for v2

  const hex2 = VERTICES[v2].hex;
  const pos2 = VERTICES[v2].pos;
  const left_op2 = pos2 < 2 ? "-" : "+";
  const top_op2 = pos2 == 0 || pos2 > 3 ? "-" : "+";
  const left_amount2 = VERTEX_SKEW_X;
  const top_amount2 = pos2 % 3 == 2 ? VERTEX_STRAIGHT : VERTEX_SKEW_Y;
  const left2 = `${HEXES[hex2].left} ${pos2 % 3 == 2 ? "" : `${left_op2} ${left_amount2}`}`;
  const top2 = `${HEXES[hex2].top} ${top_op2} ${top_amount2}`;


  const left = `(${left1} + ${left2}) / 2`;
  const top = `(${top1} + ${top2}) / 2`;

  return (
    <img
      className='road-img'
      style={{ "height": ROAD_HEIGHT, "width": ROAD_WIDTH, "left": `calc(${left} - ${ROAD_WIDTH}/2)`, "top": `calc(${top} - ${ROAD_HEIGHT}/2)`, "transform" : `rotate(${deg})`}}
      src={image}
    />
  )
}

export default Road;