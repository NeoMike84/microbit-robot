function robotTourneGauche (vitesse: number) {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, vitesse / 2, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, vitesse, 67)
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
function robotRecule (vitesse: number) {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 25, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 25, 67)
}
function robotAvance (vitesse: number) {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, vitesse, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, vitesse, 67)
}
function robotTourneDroite (vitesse: number) {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, vitesse, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, vitesse / 2, 67)
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
let obtsDroite = 0
let obstGauche = 0
PCA9685.init(67, 0)
let anneauLED = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
let anneauDroite = anneauLED.range(0, 9)
let anneauGauche = anneauLED.range(9, 9)
let radar = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    radar = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    obstGauche = pins.digitalReadPin(DigitalPin.P2)
    obtsDroite = pins.digitalReadPin(DigitalPin.P11)
    anneauLED.clear()
    if (obtsDroite == 0) {
        anneauDroite.showColor(neopixel.colors(NeoPixelColors.Blue))
        anneauLED.show()
        robotTourneGauche(30)
    } else if (obstGauche == 0) {
        anneauGauche.showColor(neopixel.colors(NeoPixelColors.Violet))
        anneauLED.show()
        robotTourneDroite(30)
    } else if (radar > 20 && radar < 45) {
        anneauLED.showColor(neopixel.colors(NeoPixelColors.Green))
        anneauLED.show()
        robotStop()
    } else if (radar < 20) {
        anneauLED.showColor(neopixel.colors(NeoPixelColors.Red))
        anneauLED.show()
        robotRecule(25)
    } else if (radar > 45) {
        robotAvance(25)
        anneauLED.showColor(neopixel.colors(NeoPixelColors.Indigo))
        anneauLED.show()
    } else {
        anneauLED.showColor(neopixel.colors(NeoPixelColors.Green))
        anneauLED.show()
    }
})
