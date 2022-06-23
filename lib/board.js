const Tile = require('./tile')

class Board {
  constructor (tile = new Tile()) {
    this.tiles = [
      [new Tile(), new Tile(), new Tile()],
      [new Tile(), new Tile(), new Tile()],
      [new Tile(), new Tile(), new Tile()]
    ]
  }
}
module.exports = Board
