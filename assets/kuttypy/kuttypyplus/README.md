## README

For Arduino nano with 328p bootloader

Bootloader BAUD Rate 38400

## Uploading the bootloader hex file
avrdude -B10 -c usbasp -patmega32 -U flash:w:optiboot_atmega32.hex

##Compiling regular code

avr-gcc  -Wall -O2 -mmcu=atmega32 -Wl,-Map,$1.map -o $1 $1.c
avr-objcopy -j .text -j .data -O ihex $1 $1.hex

## Uploading via bootloader

avrdude -b 38400 -P /dev/ttyUSB0 -pm32 -c arduino -U flash:w:blink


## Usage with Arduino IDE

Additional Boards Manager URL

+ https://scischool.in/kuttypy_arduino.json

Select board Arduino-> Kuttypyplus
