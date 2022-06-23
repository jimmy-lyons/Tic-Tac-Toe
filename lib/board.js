const Game = require('./game')
const Tile = require('./tile')

class Board {
  constructor (tile = Tile) {
    this.tiles = [
      [new tile, new tile, new tile],
      [new tile, new tile, new tile],
      [new tile, new tile, new tile]
    ]
  }

  getTiles () {
    return this.tiles
  }
}
module.exports = Board
