controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Female_Character,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c f f . 
        . f f c c c c c c c c f f . 
        . f f c c c c c c f f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . . e f f f f f f f f 4 e . 
        . . 4 f 3 3 3 3 3 e d d 4 . 
        . . e f f f f f f e e 4 . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f f c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f f c c c c c c f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f e . . 
        . 4 d d e 3 3 3 3 3 f 4 . . 
        . . 4 e e f f f f f f e . . 
        . . . . . . . . f f f . . . 
        `],
    200,
    true
    )
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    scene.cameraFollowSprite(Female_Character)
    scene.cameraShake(2, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile28`, function (sprite, location) {
    music.powerDown.play()
    tiles.setWallAt(tiles.getTileLocation(22, 14), false)
    tiles.setWallAt(tiles.getTileLocation(22, 13), false)
    tiles.setWallAt(tiles.getTileLocation(26, 13), false)
    tiles.setWallAt(tiles.getTileLocation(26, 14), false)
    tiles.setWallAt(tiles.getTileLocation(19, 15), false)
    tiles.setWallAt(tiles.getTileLocation(20, 15), false)
    tiles.setTileAt(tiles.getTileLocation(22, 13), assets.tile`tile22`)
    tiles.setTileAt(tiles.getTileLocation(22, 14), assets.tile`tile26`)
    tiles.setTileAt(tiles.getTileLocation(26, 13), assets.tile`tile22`)
    tiles.setTileAt(tiles.getTileLocation(26, 14), assets.tile`tile26`)
    tiles.setTileAt(tiles.getTileLocation(19, 15), assets.tile`tile20`)
    tiles.setTileAt(tiles.getTileLocation(20, 15), assets.tile`tile24`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile14`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    Oxygen_Levels.value += 20
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myMinimap = minimap.minimap()
    minimap.includeSprite(myMinimap, Female_Character)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Female_Character,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile18`, function (sprite, location) {
    music.powerDown.play()
    tiles.setWallAt(tiles.getTileLocation(12, 10), false)
    tiles.setWallAt(tiles.getTileLocation(12, 11), false)
    tiles.setWallAt(tiles.getTileLocation(15, 9), false)
    tiles.setWallAt(tiles.getTileLocation(15, 10), false)
    tiles.setTileAt(tiles.getTileLocation(12, 10), assets.tile`tile22`)
    tiles.setTileAt(tiles.getTileLocation(12, 11), assets.tile`tile26`)
    tiles.setTileAt(tiles.getTileLocation(15, 9), assets.tile`tile22`)
    tiles.setTileAt(tiles.getTileLocation(15, 10), assets.tile`tile26`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile16`, function (sprite, location) {
    music.powerDown.play()
    tiles.setWallAt(tiles.getTileLocation(2, 3), false)
    tiles.setWallAt(tiles.getTileLocation(3, 3), false)
    tiles.setWallAt(tiles.getTileLocation(7, 3), false)
    tiles.setWallAt(tiles.getTileLocation(8, 3), false)
    tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`tile20`)
    tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`tile24`)
    tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`tile20`)
    tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`tile24`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.splatter)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Female_Character,
    [img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f e e d d d f . . . 
        . . . f 4 d d e 4 e f . . . 
        . . . f e d d e 3 3 f . . . 
        . . f f f e e f 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Female_Character,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . 3 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d 4 e f e . 
        . f e f f b b b e d d 4 e . 
        . e 4 f b 3 3 3 e d d e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . e f e 4 d d d d d f f . . 
        . e 4 d d e b b b f f e f . 
        . . e d d e 3 3 b e f 4 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    Oxygen_Levels.value += 100
})
let moving = false
let myMinimap: minimap.Minimap = null
let Oxygen_Levels: StatusBarSprite = null
let Female_Character: Sprite = null
game.splash("Escape the facility")
game.splash("Your oxygen levels are low")
game.splash("Find more o2 before you run out")
game.splash("use computers to unlock doors")
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
Female_Character = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
Oxygen_Levels = statusbars.create(10, 3, StatusBarKind.Health)
Oxygen_Levels.attachToSprite(Female_Character)
Oxygen_Levels.value = 20
Oxygen_Levels.setColor(9, 2)
controller.moveSprite(Female_Character)
tiles.placeOnRandomTile(Female_Character, assets.tile`tile7`)
game.onUpdate(function () {
    moving = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || (controller.right.isPressed() || (controller.A.isPressed() || controller.B.isPressed()))))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Female_Character)
    }
})
game.onUpdateInterval(500, function () {
    Oxygen_Levels.value += -1
})
