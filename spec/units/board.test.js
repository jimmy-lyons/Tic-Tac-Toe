const Board = require('../../lib/board.js')

describe('Board', () => {
  it('initialises with 2D array of tile', () => {
    const mockTile = null
    const board = new Board(mockTile)
    expect(board.tiles.length).toEqual(3)
  })
  it('each row contains 3 instances', () => {
    const mockTile = null
    const board = new Board(mockTile)
    board.tiles.forEach(
      row => expect(row.length).toEqual(3)
    )
  })
})
