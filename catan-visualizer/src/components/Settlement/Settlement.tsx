import { SETTLEMENTS, HEXES, VERTICES, VERTEX_STRAIGHT, VERTEX_SKEW_X, VERTEX_SKEW_Y } from '../../data'

import './Settlement.css'

interface SettlementProps {
  position: number;
  player: number;
}

const Settlement = ({ player, position } : SettlementProps) => {
  const image = SETTLEMENTS[player].image;
  const height = VERTICES[position].height;
  const width = VERTICES[position].width;
  const hex = VERTICES[position].hex;
  // 0 is top left, rotate counter-clockwise
  const pos = VERTICES[position].pos;

  const left_op = pos < 2 ? "-" : "+";
  const top_op = pos == 0 || pos > 3 ? "-" : "+";
  const left_amount = VERTEX_SKEW_X;
  const top_amount = pos % 3 == 2 ? VERTEX_STRAIGHT : VERTEX_SKEW_Y;

  const left = `${HEXES[hex].left} ${pos % 3 == 2 ? "" : `${left_op} ${left_amount}`}`;
  const top = `${HEXES[hex].top} ${top_op} ${top_amount}`;

  return (
    <img
      className='settlement-img'
      style={{ "height": height, "width": width, "left": `calc(${left} - ${width}/2)`, "top": `calc(${top} - ${height}/2)`}}
      src={image}
    />
  )
}

export default Settlement;