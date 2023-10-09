## README

For Arduino nano with 168p bootloader

Bootloader BAUD Rate 115200

## Uploading the bootloader hex file
avrdude -B10 -c usbasp -patmega168p -U flash:w:optiboot_atmega168p.hex

##Compiling regular code

avr-gcc  -Wall -O2 -mmcu=atmega168p -Wl,-Map,$1.map -o $1 $1.c
avr-objcopy -j .text -j .data -O ihex $1 $1.hex

## Uploading via bootloader

avrdude -b 115200 -P /dev/ttyUSB0 -pm168p -c arduino -U flash:w:blink168


## Usage with Arduino IDE

Additional Boards Manager URL

+ https://mcudude.github.io/MiniCore/package_MCUdude_MiniCore_index.json

Select board MiniCore->Atmega168
