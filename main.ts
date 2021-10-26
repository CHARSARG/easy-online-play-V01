let MultiPlayerTrue = 0
let Online = 0
controller.player4.onEvent(ControllerEvent.Disconnected, function () {
    if (MultiPlayerTrue == 1) {
        Online += -1
    }
})
controller.player1.onEvent(ControllerEvent.Disconnected, function () {
    if (MultiPlayerTrue == 1) {
        Online += -1
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    if (MultiPlayerTrue == 1) {
        Online += 1
    }
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    if (MultiPlayerTrue == 1) {
        Online += -1
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    if (MultiPlayerTrue == 1) {
        Online += 1
    }
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    if (MultiPlayerTrue == 1) {
        Online += 1
    }
})
