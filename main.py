MultiPlayerTrue = 0
Online = 0

def on_player4_connected():
    global Online
    if MultiPlayerTrue == 1:
        Online += 1
controller.player4.on_event(ControllerEvent.CONNECTED, on_player4_connected)

def on_player3_disconnected():
    global Online
    if MultiPlayerTrue == 1:
        Online += -1
controller.player3.on_event(ControllerEvent.DISCONNECTED, on_player3_disconnected)

def on_player4_disconnected():
    global Online
    if MultiPlayerTrue == 1:
        Online += -1
controller.player4.on_event(ControllerEvent.DISCONNECTED, on_player4_disconnected)

def on_player1_disconnected():
    global Online
    if MultiPlayerTrue == 1:
        Online += -1
controller.player1.on_event(ControllerEvent.DISCONNECTED, on_player1_disconnected)

def ConnectPlayerToSprite(Sprite2: Sprite, Player: number):
    if Player == 1:
        controller.player1.move_sprite(Sprite2)
    elif Player == 2:
        controller.player2.move_sprite(Sprite2)
    elif Player == 3:
        controller.player3.move_sprite(Sprite2)
    elif Player == 4:
        controller.player4.move_sprite(Sprite2)
    else:
        print("Error." + "There is no player " + convert_to_text(Player) + ".")
def StartMultiPlayer():
    global MultiPlayerTrue
    MultiPlayerTrue = 1

def on_player3_connected():
    global Online
    if MultiPlayerTrue == 1:
        Online += 1
controller.player3.on_event(ControllerEvent.CONNECTED, on_player3_connected)

def CurrentlyOnline():
    return Online
def IsOnline():
    if MultiPlayerTrue == 1:
        return True
    else:
        return False
def PlayerPressingA(Player2: number):
    if Player2 == 1:
        if controller.player1.is_pressed(ControllerButton.A):
            return True
        else:
            return False
    elif Player2 == 2:
        if controller.player2.is_pressed(ControllerButton.A):
            return True
        else:
            return False
    elif Player2 == 3:
        if controller.player3.is_pressed(ControllerButton.A):
            return True
        else:
            return False
    elif Player2 == 4:
        if controller.player4.is_pressed(ControllerButton.A):
            return True
        else:
            return False
    else:
        print("Error")
        return False

def on_player2_disconnected():
    global Online
    if MultiPlayerTrue == 1:
        Online += -1
controller.player2.on_event(ControllerEvent.DISCONNECTED, on_player2_disconnected)

def EndMultiPlayer():
    global MultiPlayerTrue
    MultiPlayerTrue = 0

def on_player2_connected():
    global Online
    if MultiPlayerTrue == 1:
        Online += 1
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

def on_player1_connected():
    global Online
    if MultiPlayerTrue == 1:
        Online += 1
controller.player1.on_event(ControllerEvent.CONNECTED, on_player1_connected)
