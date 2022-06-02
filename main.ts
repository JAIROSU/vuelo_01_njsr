function VALIDAR_COORDENADAS () {
    if (COORDENAD_X <= 4 && COORDENADA_Y <= 4) {
        COORDENADAS = game.createSprite(COORDENAD_X, COORDENADA_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    COORDENAD_X += 1
    basic.showNumber(COORDENAD_X)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    COORDENADA_Y += 1
    basic.showNumber(COORDENADA_Y)
    basic.pause(2000)
})
let COORDENADAS: game.LedSprite = null
let COORDENADA_Y = 0
let COORDENAD_X = 0
COORDENAD_X = 0
COORDENADA_Y = 0
let VUELOS = 0
basic.forever(function () {
    if (!(VALIDAR_COORDENADAS())) {
        basic.showIcon(IconNames.No)
    }
})
