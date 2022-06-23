const Board = require('./board')

class Game {
  constructor (board = new Board()) {
    this.board = board
  }
}
module.exports = Game