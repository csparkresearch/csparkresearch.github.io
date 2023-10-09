## README

For Arduino nano with 328p bootloader

Bootloader BAUD Rate 57600

## Uploading the bootloader hex file
avrdude -B10 -c usbasp -patmega328p -U flash:w:optiboot_atmega328p.hex

##Compiling regular code

avr-gcc  -Wall -O2 -mmcu=atmega328p -Wl,-Map,$1.map -o $1 $1.c
avr-objcopy -j .text -j .data -O ihex $1 $1.hex

## Uploading via bootloader

avrdude -b 57600 -P /dev/ttyUSB0 -pm328p -c arduino -U flash:w:blink328


## Usage with Arduino IDE

Select board Arduino-> Diecimilia
Select processor -> 328p
