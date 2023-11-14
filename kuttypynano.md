---
layout: semantic
title: "KuttyPy Nano"
tagline: "ATMEGA328p Microcontroller Training Utility"
show-navigation: false
show-toc: true
share-img: assets/images/kuttypy/robot.jpeg
banner: /assets/images/kuttypy/cover.jpg
---


[Read The Docs](https://kuttypy.readthedocs.io/en/latest/)



<div class="ui blue segment raised" >
<p>The kuttyPy (/kʊtipʌɪ/) Microcontroller training utility allows real-time manipulation of the registers in microcontrollers via a connected computer containing its python library.  setReg and getReg function calls act as a real-time debugging and monitoring utility, and combined with Python's visualization and analytical utilities, this approach has immense pedagogical potential for beginners. </p>
<p markdown="1">The kuttyPy Nano hardware is an ATMEGA328p microcontroller development board </p>
</div>

## Android Application
---

Supports a variety of tasks such as IO manipulation, ADC reading, I2C sensor data logging, 
C compile and upload IDE, blockly based graphical programming etc

[Download from the Play Store](https://play.google.com/store/apps/details?id=com.cspark.kuttypy&hl=en_IN&gl=US)

## Uploading firmware

+ Download the [hex file](/assets/kuttypy/kuttypynano328p/kuttyboot_atmega328p.hex)

+ Flash the bootloader hex file using USBASP

```bash
avrdude -B10 -c usbasp -patmega328p -U flash:w:kuttyboot_atmega328p.hex 
```

+ Connect the board to an android phone via an OTG cable, and check that I/O pins , ADC etc can be read


## Compiling regular code

avr-gcc  -Wall -O2 -mmcu=atmega328p -Wl,-Map,blink328.map -o blink328 blink328.c
avr-objcopy -j .text -j .data -O ihex blink328 blink328.hex

## Uploading via bootloader

avrdude -b 57600 -P /dev/ttyUSB0 -pm328p -c arduino -U flash:w:blink328

## Usage with Arduino IDE

Select board Arduino-> Diecimilia
Select processor -> 328p

![](/assets/images/kuttypy/ide_select_board.png){:class="ui image fluid"}

+ Sample Upload output

```bash
sketch uses 930 bytes (3%) of program storage space. Maximum is 30720 bytes.
Global variables use 9 bytes (0%) of dynamic memory, leaving 2039 bytes for local variables. Maximum is 2048 bytes.
/usr/bin/avrdude -C/etc/avrdude.conf -v -patmega328p -carduino -P/dev/ttyUSB0 -b57600 -D -Uflash:w:/tmp/arduino_build_618935/Blink.ino.hex:i 

avrdude: Version 6.3-20171130
         Copyright (c) 2000-2005 Brian Dean, http://www.bdmicro.com/
         Copyright (c) 2007-2014 Joerg Wunsch

         System wide configuration file is "/etc/avrdude.conf"
         User configuration file is "/home/jithin/.avrduderc"
         User configuration file does not exist or is not a regular file, skipping

         Using Port                    : /dev/ttyUSB0
         Using Programmer              : arduino
         Overriding Baud Rate          : 57600
         AVR Part                      : ATmega328P
         Chip Erase delay              : 9000 us
         PAGEL                         : PD7
         BS2                           : PC2
         RESET disposition             : dedicated
         RETRY pulse                   : SCK
         serial program mode           : yes
         parallel program mode         : yes
         Timeout                       : 200
         StabDelay                     : 100
         CmdexeDelay                   : 25
         SyncLoops                     : 32
         ByteDelay                     : 0
         PollIndex                     : 3
         PollValue                     : 0x53
         Memory Detail                 :

                                  Block Poll               Page                       Polled
           Memory Type Mode Delay Size  Indx Paged  Size   Size #Pages MinW  MaxW   ReadBack
           ----------- ---- ----- ----- ---- ------ ------ ---- ------ ----- ----- ---------
           eeprom        65    20     4    0 no       1024    4      0  3600  3600 0xff 0xff
           flash         65     6   128    0 yes     32768  128    256  4500  4500 0xff 0xff
           lfuse          0     0     0    0 no          1    0      0  4500  4500 0x00 0x00
           hfuse          0     0     0    0 no          1    0      0  4500  4500 0x00 0x00
           efuse          0     0     0    0 no          1    0      0  4500  4500 0x00 0x00
           lock           0     0     0    0 no          1    0      0  4500  4500 0x00 0x00
           calibration    0     0     0    0 no          1    0      0     0     0 0x00 0x00
           signature      0     0     0    0 no          3    0      0     0     0 0x00 0x00

         Programmer Type : Arduino
         Description     : Arduino
         Hardware Version: 3
         Firmware Version: 5.0
         Vtarget         : 0.3 V
         Varef           : 0.3 V
         Oscillator      : 28.800 kHz
         SCK period      : 3.3 us

avrdude: AVR device initialized and ready to accept instructions

Reading | ################################################## | 100% 0.00s

avrdude: Device signature = 0x1e950f (probably m328p)
avrdude: reading input file "/tmp/arduino_build_618935/Blink.ino.hex"
avrdude: writing flash (930 bytes):

Writing | ################################################## | 100% 0.27s

avrdude: 930 bytes of flash written
avrdude: verifying flash memory against /tmp/arduino_build_618935/Blink.ino.hex:
avrdude: load data flash data from input file /tmp/arduino_build_618935/Blink.ino.hex:
avrdude: input file /tmp/arduino_build_618935/Blink.ino.hex contains 930 bytes
avrdude: reading on-chip flash data:

Reading | ################################################## | 100% 0.24s

avrdude: verifying ...
avrdude: 930 bytes of flash verified

avrdude done.  Thank you.


```

# Blog Posts for KuttyPy

{% assign allposts = site.categories.kuttypy %}

<div class="ui clearing hidden divider"></div>	
<div class="ui container">
	<div class="ui relaxed divided items">
	{% for post in allposts %}
	<div class="item link">
	  <a class="ui medium image raised red segment" href="{{post.url}}">
		<img src="/assets/images/300x170.png" class="ui image lazy" data-src="{{ post.cover }}">
	  </a>
	  <div class="content">
		<h1 class="ui header small" id="{{post.title}}"><a href="{{post.url}}" class="ui dividing header teal"><i class="settings icon"></i>{{post.title}}</a></h1>
		<div class="meta">
			    {% for cat in post.category %}<a>{{cat}}/</a>{% endfor %}
		</div>
		<div class="description">
		  {{post.summary}}
		</div>
		<div class="extra">
		  <div>{{ post.date | date: '%B %d, %Y' }}</div>
			{% assign author = site.data.authors[post.author] %}
			<!--
			<a class="ui basic image large label right floated">
			  <img src="{{author.photo}}">
			  {{author.name}}
			</a>
			-->
		</div>
	  </div>
	</div>
	<div class="ui clearing hidden divider"></div>	
	{% endfor %}
	</div>
</div>



## Using with Python
---

Connect the hardware, and import the library. Import will throw an error if the hardware is not detected


```python
from kuttyPy import *
getReg('PINC')
readADC(0)
```

To view the full list of ATMEGA32 registers
```
print(REGISTERS.ATMEGA32_REGISTERS)
```



## Installation from pypi (License: MIT)
---

### Windows
```shell
py -3 -m pip install kuttypy
kuttypy
```
### Linux
```shell
pip3 install kuttypy
kuttypy
```


### Installation from source (License: MIT)
---

+ Install dependencies (Ubuntu 18.04)

```shell
sudo apt-get install python3 python3-serial python3-pyqt5 python3-pyqt5.qtsvg
```
+ Clone the repository, and run the file

```shell
git clone https://github.com/csparkresearch/kuttypy-gui
cd kuttypy-gui
python3 KuttyPyGUI.py
```

### Add to the arduino IDE

+ Open preferences, and add the following line to `Addition Boards Manager URL`

`https://scischool.in/kuttypy_arduino.json`

+ Go to Boards Manager, and Select Kuttypyplus from the KuttyPy menu.
+ Compile, upload . :)





---
Developed by Jithin B.P @CSpark Research, 2018.  
Special thanks to Georges Khazanadar for Debianizing efforts.
