const Board = require('./board')
const Tile = require('./tile')

class Game {
  constructor (board = new Board()) {
    this.board = board
  }

  makeMove () {
    let tile = this.board.tiles[0][0]
    tile.setValue('X')
    return 'X'
  }
}
module.exports = Game