"""
Created by: Ella
Created on: Oct 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *
from time import sleep

display.clear
display.show(Image.HAPPY)

cookie_click_number: int
cookie_click_number = 0

while True:
    if button_a.is_pressed():
        cookie_click_number += 1
        sleep(1)
        display.scroll(str(cookie_click_number))
    if button_b.is_pressed():
        cookie_click_number = 0
        sleep(1)
        display.scroll(str(cookie_click_number))
