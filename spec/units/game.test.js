const Game = require('../../lib/game.js')

const MockTile = require('../../lib/tile.js')
jest.mock('../../lib/tile.js')

const MockBoard = require('../../lib/board.js')
jest.mock('../../lib/board.js')

describe('Game', () => {
  beforeEach(() => {
    MockTile.mockClear()
    MockBoard.mockClear()
  })

  it('initialises with an instance of board', () => {
    let mockedBoard = new MockBoard(MockTile)
    const game = new Game(mockedBoard)
    expect(game.board).toBe(mockedBoard)
  })
  it('can set the value of a tile', () => {
    let mockedBoard = new MockBoard(MockTile)
    let mockedTile = new MockTile
    mockedBoard.getTiles.mockImplementation(() => {
      return [
        [mockedTile, "mockTile", "mockTile"],
        ["mockTile", "mockTile", "mockTile"],
        ["mockTile", "mockTile", "mockTile"]
      ]
    })
    const game = new Game(mockedBoard)
    game.makeMove()
    expect(mockedTile.setValue).toHaveBeenCalledTimes(1)
  })
})
