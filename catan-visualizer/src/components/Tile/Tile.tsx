import { TILES, HEXES, NUMBERS, NUMBER_HEIGHT } from '../../data'

import './Tile.css'

interface TileProps {
  hex: number;
  type: number;
  number?: number;
}

const Tile = ({ hex, type, number } : TileProps) => {
  const image = TILES[type].image;
  const height = HEXES[hex].height;
  const left = HEXES[hex].left;
  const top = HEXES[hex].top;

  return (
    <>
      <img
        className='tile-img'
        style={{ "height": height, "left": `calc(${left} - ${height}/2)`, "top": `calc(${top} - ${height}/2)`}}
        src={image}
      />

      {(number && number != 7) ? (
        <img
          className='number-img'
          style={{ "height": NUMBER_HEIGHT, "left": `calc(${left} - ${NUMBER_HEIGHT}/2)`, "top": `calc(${top} - ${NUMBER_HEIGHT}/2)`}}
          src={NUMBERS[number].image}
        />
      ) : (
        <>
        </>
      )}
    </>
  )
}

export default Tile;