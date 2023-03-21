class Ship {
    static x: number
    private ___x_is_set: boolean
    private ___x: number
    get x(): number {
        return this.___x_is_set ? this.___x : Ship.x
    }
    set x(value: number) {
        this.___x_is_set = true
        this.___x = value
    }
    
    public static __initShip() {
        Ship.x = 2
    }
    
    constructor(x: number) {
        //  x = center pixel on the x dimension
        this.x = x
    }
    
    public plot_ship() {
        //  Plot the ship
        //  Input: x (center x dimension pixel of ship)
        if (this.x < 1) {
            this.x = 1
            return
        } else if (this.x > 3) {
            this.x = 3
            return
        } else {
            basic.clearScreen()
            led.plot(this.x, 4)
            led.plot(this.x, 3)
            led.plot(this.x + 1, 4)
            led.plot(this.x - 1, 4)
        }
        
    }
    
}

Ship.__initShip()

class Laser {
    static x: number
    private ___x_is_set: boolean
    private ___x: number
    get x(): number {
        return this.___x_is_set ? this.___x : Laser.x
    }
    set x(value: number) {
        this.___x_is_set = true
        this.___x = value
    }
    
    static y: number
    private ___y_is_set: boolean
    private ___y: number
    get y(): number {
        return this.___y_is_set ? this.___y : Laser.y
    }
    set y(value: number) {
        this.___y_is_set = true
        this.___y = value
    }
    
    public static __initLaser() {
        Laser.x = 2
        Laser.y = 2
    }
    
    constructor(x: number) {
        this.x = x
    }
    
}

Laser.__initLaser()

function plot_laser(x: any) {
    
}

//  Main program
led.setBrightness(1)
led.enable(true)
basic.forever(function on_forever() {
    let ship = new Ship(0)
    while (true) {
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
    }
})
