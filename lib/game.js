const Board = require('./board')

class Game {
  constructor (board = new Board()) {
    this.board = board
  }

  makeMove () {
    tile = this.board.tiles[0][0]
    tile.setValue('X')
    return 'X'
  }
}
module.exports = Game