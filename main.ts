basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
            basic.pause(500)
        }
    }
})
