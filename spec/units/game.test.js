const Game = require('../../lib/game.js')

const mockTile = jest.createMockFromModule('../../lib/tile.js')
mockTile.value = jest.fn(() => null)
mockTile.setValue = jest.fn(() => 'X')

const mockBoard = {
  tiles: [
    [mockTile, mockTile, mockTile],
    [mockTile, mockTile, mockTile],
    [mockTile, mockTile, mockTile]
  ]
}

describe('Game', () => {
  it('initialises with an instance of board', () => {
    const game = new Game(mockBoard)
    expect(game.board).toBe(mockBoard)
  })
  it('can set the value of a tile', () => {
    const game = new Game(mockBoard)
    game.makeMove()
    expect(mockTile.setValue).toHaveBeenCalledTimes(1)
  })
})