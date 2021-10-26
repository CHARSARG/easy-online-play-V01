
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="EasyOnlinePlay"
namespace easyOnlinePlay {
    let MultiPlayerTrue = 0
    let Online = 0
    controller.player4.onEvent(ControllerEvent.Connected, function () {
        if (MultiPlayerTrue == 1) {
            Online += 1
        }
    })
    controller.player3.onEvent(ControllerEvent.Disconnected, function () {
        if (MultiPlayerTrue == 1) {
            Online += -1
        }
    })
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
    /**
     * Connect A sprite to a player
     */
    //% block
    export function ConnectPlayerToSprite(Sprite2: Sprite, Player: number) {
        if (Player == 1) {
            controller.player1.moveSprite(Sprite2)
        } else if (Player == 2) {
            controller.player2.moveSprite(Sprite2)
        } else if (Player == 3) {
            controller.player3.moveSprite(Sprite2)
        } else if (Player == 4) {
            controller.player4.moveSprite(Sprite2)
        } else {
            console.log("Error." + "There is no player " + convertToText(Player) + ".")
        }

    }

    /**
     * Start MultiPlayer
     */
    //% block
    export function StartMultiPlayer() {
        MultiPlayerTrue = 1
    }
    /**
    * Stop MultiPlayer
    */
    //% block
    export function EndMultiPlayer() {
        MultiPlayerTrue = 0
    /**
    * See Who Is Online
    */
    //% block
    }
    export function CurrentlyOnline() {
        return Online
    }
    /**
    * Check If Your Game Is Online
    */
    //% block
    export function IsOnline() {
        if (MultiPlayerTrue == 1) {
            return true
        } else {
            return false
        }
    }
    /**
    * Check If A Player Is Pressing A
    */
    //% block
    export function PlayerPressingA(Player2: number) {
        if (Player2 == 1) {
            if (controller.player1.isPressed(ControllerButton.A)) {
                return true
            } else {
                return false
            }
        } else if (Player2 == 2) {
            if (controller.player2.isPressed(ControllerButton.A)) {
                return true
            } else {
                return false
            }
        } else if (Player2 == 3) {
            if (controller.player3.isPressed(ControllerButton.A)) {
                return true
            } else {
                return false
            }
        } else if (Player2 == 4) {
            if (controller.player4.isPressed(ControllerButton.A)) {
                return true
            } else {
                return false
            }
        } else {
            console.log("Error")
            return false
        }
    }
}
