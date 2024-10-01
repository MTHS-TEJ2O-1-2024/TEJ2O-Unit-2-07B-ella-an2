/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella
 * Created on: Oct 2024
 * This program shows the number of cookies for each click
*/


basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookieClickNumber: number
cookieClickNumber = 0

input.onButtonPressed(Button.A, function () {
    cookieClickNumber = cookieClickNumber + 1
    pause(1)
    basic.showNumber(cookieClickNumber)
})

input.onButtonPressed(Button.B, function () {
    cookieClickNumber = 0
    basic.showNumber(cookieClickNumber)
})