class Ship:
    x = 2
    def __init__(self, x):
        # x = center pixel on the x dimension
        self.x = x

    def plot_ship(self):
        # Plot the ship
        # Input: x (center x dimension pixel of ship)
        if(self.x < 1):
            self.x = 1
            return
        elif(self.x > 3):
            self.x = 3
            return
        else:
            basic.clear_screen()
            led.plot(self.x, 4)
            led.plot(self.x, 3)
            led.plot(self.x+1, 4)
            led.plot(self.x-1, 4)

class Laser:
    x = 2
    y = 2
    def __init__(self, x):
        self.x = x


def on_forever():
    ship = Ship(0)
    while(True):
        ship.x = 1
        ship.plot_ship()
        basic.pause(500)

        ship.x = 2
        ship.plot_ship()
        basic.pause(500)

        ship.x = 3
        ship.plot_ship()
        basic.pause(250)
        
        ship.x = 2
        ship.plot_ship()
        basic.pause(300)

def plot_laser(x):
    pass

# Main program
led.set_brightness(1)
led.enable(True)
basic.forever(on_forever)
