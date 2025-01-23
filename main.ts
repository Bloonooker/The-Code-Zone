namespace SpriteKind {
    export const Mouse = SpriteKind.create()
}
function get_angle (rock: Sprite) {
    return spriteutils.radiansToDegrees(spriteutils.angleFrom(rock, mouse_sprite)) * -1
}
function spawn_ghosts () {
    for (let value of tiles.getTilesByType(myTiles.tile2)) {
        ghost = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
        tiles.placeOnTile(ghost, value)
        tiles.setTileAt(ghost.tilemapLocation(), image.create(16, 16))
        ghost.ay = 300
    }
}
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    rock = make_rock()
    while (browserEvents.MouseLeft.isPressed()) {
        rock.angle = get_angle(rock)
        rock.pow = get_power(rock)
        pause(1)
    }
    scene.cameraFollowSprite(rock)
    rock.throwDart()
    info.changeLifeBy(-1)
})
function on_start () {
    slingshot.setPosition(8, 106)
    info.setScore(0)
    scene.setBackgroundColor(9)
    setup_level()
}
function get_power (rock: Sprite) {
    return spriteutils.distanceBetween(rock, mouse_sprite) * 2
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.vy > 100) {
        info.changeScoreBy(2000)
        sprites.destroy(sprite)
    }
})
function setup_level () {
    if (randint(1, 2) == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        shots = tiles.getTilesByType(myTiles.tile1).length * 1.5
        info.setLife(shots)
        spawn_ghosts()
    } else {
        tiles.setCurrentTilemap(tilemap`level5`)
        shots = tiles.getTilesByType(myTiles.tile1).length * 1.5
        shots += 10
        info.setLife(shots)
        spawn_ghosts()
    }
}
function make_rock () {
    rock = darts.create(assets.image`rock`, SpriteKind.Projectile)
    rock.gravity = gravity
    rock.setFlag(SpriteFlag.AutoDestroy, true)
    rock.setPosition(slingshot.left, slingshot.y)
    rock.setTrace(true)
    return rock
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (!(sprites.readDataBoolean(sprite, "hit wall"))) {
        sprites.setDataBoolean(sprite, "hit wall", true)
        rock.lifespan = 2000
    }
    if (tiles.tileAtLocationEquals(location, myTiles.tile1)) {
        if (spriteutils.speed(rock) > 100) {
            tiles.setTileAt(location, image.create(8, 8))
            tiles.setWallAt(location, false)
            info.changeScoreBy(100)
            if (tiles.getTilesByType(myTiles.tile1).length < 1) {
                game.over(true)
            }
        }
    }
    if (tiles.tileAtLocationEquals(location, sprites.builtin.brick)) {
        if (spriteutils.speed(rock) > 35) {
            tiles.setTileAt(location, image.create(16, 16))
            tiles.setWallAt(location, false)
            info.changeScoreBy(50)
        }
    }
})
function rock_destroyed () {
    scene.centerCameraAt(0, 0)
}
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    rock_destroyed()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1000)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let shots = 0
let rock: Dart = null
let ghost: Sprite = null
let mouse_sprite: Sprite = null
let slingshot: Sprite = null
let gravity = 0
gravity = 100
slingshot = sprites.create(assets.image`slingshot`, SpriteKind.Player)
mouse_sprite = sprites.create(image.create(1, 1), SpriteKind.Mouse)
on_start()
game.onUpdate(function () {
    mouse_sprite.setPosition(browserEvents.getMouseCameraX(), browserEvents.getMouseCameraY())
})
