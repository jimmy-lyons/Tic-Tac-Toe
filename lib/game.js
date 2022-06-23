const Board = require('./board')
const Tile = require('./tile')

class Game {
  constructor (board = new Board()) {
    this.board = board
  }

  makeMove () {
    let boardTiles = this.board.getTiles()
    boardTiles[0][0].setValue('X')
    return 'X'
  }
}
module.exports = Game