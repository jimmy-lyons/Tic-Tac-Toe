const Board = require('../../lib/board.js')

const MockTile = require('../../lib/tile.js')
jest.mock('../../lib/tile.js')

describe('Board', () => {
  it('initialises with 2D array of tile', () => {
    const board = new Board(MockTile)
    expect(board.tiles.length).toEqual(3)
  })
  it('each row contains 3 instances', () => {
    const board = new Board(MockTile)
    board.tiles.forEach(
      row => expect(row.length).toEqual(3)
    )
  })
})
