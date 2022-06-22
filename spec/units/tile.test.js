const Tile = require('../../lib/tile')

describe('Tile', () => {
  it('Initialises with an emty value', () => {
    const tile = new Tile()
    expect(tile.value).toBe(null)
  })
  describe('setValue', () => {
    it('can change the value of a tile to "O"', () => {
      const tile = new Tile()
      tile.setValue('O')
      expect(tile.value).toBe('O')
    })
    it('can change the value of a tile to "X"', () => {
      const tile = new Tile()
      tile.setValue('X')
      expect(tile.value).toBe('X')
    })
  })
})
