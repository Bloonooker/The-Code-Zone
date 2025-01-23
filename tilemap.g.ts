// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`100008000000000000000000000100010001000100000000000000000001010100010101000000000000000000010101000101010000000000000000000101010001010100000000000000000001010100010101000000000000000000010101000101010000000000000000000101010001010102020202020202020202020202020202`, img`
. . . . . . . . . 2 . 2 . 2 . 2 
. . . . . . . . . 2 2 2 . 2 2 2 
. . . . . . . . . 2 2 2 . 2 2 2 
. . . . . . . . . 2 2 2 . 2 2 2 
. . . . . . . . . 2 2 2 . 2 2 2 
. . . . . . . . . 2 2 2 . 2 2 2 
. . . . . . . . . 2 2 2 . 2 2 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath2], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001030103010000000000000000000000010101010100000000000000000000000001000100000000000000000000000000010101000002020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . 2 . 2 . 
. . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . . 2 . 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath2,myTiles.tile2], TileScale.Sixteen);
            case "level0":
            case "level4":return tiles.createTilemap(hex`100008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level5":
            case "level3":return tiles.createTilemap(hex`100008000000000000000000000000000003000000000000000000000000000001010100000000000000000404040001010101010000000000000004040400010301030100000000000000040404000101010101000000000000000404040000010001000000000000000004040400000101010002020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 . 
. . . . . . . 2 2 2 . 2 2 2 2 2 
. . . . . . . 2 2 2 . 2 . 2 . 2 
. . . . . . . 2 2 2 . 2 2 2 2 2 
. . . . . . . 2 2 2 . . 2 . 2 . 
. . . . . . . 2 2 2 . . 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath2,myTiles.tile2,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "wall":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "ghost spawn":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
