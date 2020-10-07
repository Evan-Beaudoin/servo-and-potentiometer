// Created by: Evan
// Created on: Oct.2020
// 
// This program controls a servo motor with a potentiometer
let Potentiometer = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Potentiometer = pins.analogReadPin(AnalogPin.P1)
    robotbit.Servo(robotbit.Servos.S1, pins.map(
    Potentiometer,
    0,
    1023,
    0,
    180
    ))
    basic.pause(10)
})
