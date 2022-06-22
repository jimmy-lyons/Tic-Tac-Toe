const Tile = require('./tile')

class Board {
  constructor (tile = new Tile()) {
    this.tiles = [
      [tile, tile, tile],
      [tile, tile, tile],
      [tile, tile, tile]
    ]
  }
}
module.exports = Board
