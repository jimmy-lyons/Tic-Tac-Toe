const Game = require('../../lib/game.js')
const mockTile = jest.createMockFromModule('../../lib/tile.js')
mockTile.value = jest.fn(() => null)

const mockBoard = jest.fn().mockImplementation(() => {
  return {
    tiles: [
      [mockTile, mockTile, mockTile],
      [mockTile, mockTile, mockTile],
      [mockTile, mockTile, mockTile]
    ]
  }
})

describe('Game', () => {
  beforeEach (() => {
    mockTile.mockClear()
    mockBoard.mockClear()
  })
  it('initialises with an instance of board', () => {
    const game = new Game(mockBoard)
    expect(game.board).toBe(mockBoard)
    const tile = game.board().tiles[0][0]
    expect(tile.value()).toBe(null)
  })
})