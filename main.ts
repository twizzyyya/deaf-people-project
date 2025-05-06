input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
})
