const Tile = require("../../lib/tile");

describe("Tile", () => {

  it("Initialises with an emty value", () => {
    const tile = new Tile;
    expect(tile.value).toBe(null);
  })

})