function robotTourneGauche () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 25, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
}
function robotTourneSpin () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
}
function robotTourneGaucheSurPlace () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
}
function robotRecule () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 25, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 25, 67)
}
function robotAvance () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
}
function robotTourneDroite () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 25, 67)
}
function robotStop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)
}
function robotTourneDroiteSurPlace () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
}
PCA9685.init(67, 0)
basic.forever(function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
