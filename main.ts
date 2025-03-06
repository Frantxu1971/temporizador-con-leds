// Si control vale 0 cambio la hora
// Si control vale 1 cambio los minutos de 10 en 10.
// Si control vale 2 cambio los minutos de 1 en 1
// Si control vale 3 cambio de dia
input.onButtonPressed(Button.A, function () {
    if (Control == 0) {
        Hora += 1
        if (Hora == 24) {
            Hora = 0
        }
        basic.showString("H")
        basic.showNumber(Hora)
    } else if (Control == 1) {
        Minutos += 10
        if (Minutos >= 60) {
            Minutos = 0
        }
        basic.showString("M")
        basic.showNumber(Minutos)
    } else if (Control == 2) {
        Minutos += 1
        if (Minutos == 60) {
            Minutos = 0
        }
        basic.showString("M")
        basic.showNumber(Minutos)
    } else if (Control == 3) {
        Dia += 1
        if (Dia > 7) {
            Dia = 1
        }
        basic.showString("D")
        basic.showNumber(Dia)
    }
})
// Apaga todos los leds
function Apagar_leds () {
    j = 0
    for (let j = 0; j <= 13; j++) {
        salidasLED[j] = 0
    }
}
// si es distinto de 4 está en modo configuración y si está en modo 4 es funcionamiento
input.onButtonPressed(Button.AB, function () {
    if (Control != 4) {
        Control = 4
    } else {
        Control = 0
    }
})
// Si control es distinto de 3 se cambia entre 0 y 2 para modificar las hora y el día
input.onButtonPressed(Button.B, function () {
    if (Control != 4) {
        Control += 1
        if (Control == 4) {
            Control = 0
        }
    }
})
let j = 0
let salidasLED: number[] = []
let Minutos = 0
let Hora = 0
let Dia = 0
let Control = 0
Control = 0
Dia = 1
Hora = 0
Minutos = 0
// Mapeo de salidas de la P0 a la P14 como pines digitales
salidasLED = [
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3,
DigitalPin.P4,
DigitalPin.P5,
DigitalPin.P6,
DigitalPin.P7,
DigitalPin.P8,
DigitalPin.P9,
DigitalPin.P10,
DigitalPin.P11,
DigitalPin.P12,
DigitalPin.P13,
DigitalPin.P14
]
let Estado = 0
let i = 0
Apagar_leds()
// Control del tiempo cada minuto se agrega a la variable minuto y la incrementa en 1
loops.everyInterval(60000, function () {
    Minutos += 1
    if (Minutos == 60) {
        Minutos = 0
        Hora += 1
        if (Hora == 24) {
            Hora = 0
            Dia += 1
            if (Dia == 8) {
                Dia = 1
            }
        }
    }
})
basic.forever(function () {
    if (Control == 4) {
        basic.showString("D")
        basic.showNumber(Dia)
        basic.showString("H")
        basic.showNumber(Hora)
        basic.showString("M")
        basic.showNumber(Minutos)
    }
})
