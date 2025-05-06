input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 85)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    input.setSoundThreshold(SoundThreshold.Quiet, 70)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
})
