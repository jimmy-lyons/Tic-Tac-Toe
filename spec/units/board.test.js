const Board = require('../../lib/board.js')

describe('Board', () => {
  it('initialises with 2D array of tile', () => {
    const board = new Board()
    expect(board.tiles.length).toEqual(3)
  })
})
