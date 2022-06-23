const Game = require('../../lib/game.js')

describe('Game', () => {
  it('initialises with an instance of board', () => {
    const game = new Game()
    expect(game.board).not.toBeUndefined()
  })
})