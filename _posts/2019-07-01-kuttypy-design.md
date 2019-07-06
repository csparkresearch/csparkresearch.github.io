---
layout: blog
title: KuttyPy Design and GUI
description: Design Considerations behind the KuttyPy, and its Python based UI 
cover: /assets/blog/screenshots/kpy_layout.png
author: jithin
summary: A pictorial walkthrough of the KuttyPy Layout, CAD Render, Graphical Application design, and Coding Interface
show-toc: true
tags: [KuttyPy, KiCAD, CERN, Robotics, Python, Arduino]
category: [kuttypy]
---


## What is the KuttyPy

The kuttyPy (/kʊtipʌɪ/) Microcontroller training utility allows real-time manipulation of the registers in microcontrollers via a connected computer containing its python library. 

setReg and getReg function calls serve the purpose of a live debugging and monitoring utility, and combined with Python's visualization and analytical utilities, this approach has immense pedagogical potential for beginners.

The kuttyPy hardware is an ATMEGA32 microcontroller development board developed by the [ExpEYES](http://expeyes.in) project, and is currently supported by this software. It contains the kuttyPy firmware, but can also be used to run other programs via its bootloader.

## The beginning : Board Design

The kuttyPy hardware in itself is quite elementary. It has only the following components
+ Atmega32 microcontroller (DIP40) : The Main processor and brains.
+ A Serial to USB adapter IC : Because the ATMEGA32 does not support USB, and we need to link this to a computer somehow
+ An 8 MHz crystal oscillator
+ 4 berg sockets of 10 pins each, for PORTA,B,C,D, including 5V and GND pin on each.
+ An RGB LED with Red Green and Blue anodes connected to PB3, PD5, and PD7.
+ A PCB to hold everything together 

All of this was designed with KiCAD, an open-source EDA tool supported by CERN
![](/assets/blog/screenshots/kpy_layout.png){:class="ui image fluid centered lightbox" alt="KuttyPy Layout"}

KiCAD is incredibly powerful, allowing multi-layer board design with no space restrictions. It can also generate 3D CAD renders which can also be exported in common formats such as wrl and stp .
![](/assets/blog/screenshots/kpy_cad.png){:class="ui image fluid centered lightbox" alt="CAD Design made with KiCAD"}


<div class="ui clearing divider"></div>

## Software Design

The KuttyPy is supposed to allow the user to control the microcontroller's functions via a connected laptop, but without the hassle of compiling and uploading
code. This is achieved with a code running on the kuttyPy which listens to incoming commands via the serial port, and changes pin states, reads ADCs, sets PWM
values etc .

Originally, only a Python library was envisioned for the KuttyPy . However, with a powerful PyQt toolkit at our disposal, we decided to make
a kid friendly graphical interface which resembled the hardware, but with buttons to directly toggle and read pins.

Furthermore, analog gauge widgets, and plots were added to enhance the usability. All thanks to the powerful free and open source python modules
available such as PyQtgraph.

The source code has been uploaded on 
<a class="ui inverted red tiny button" href="https://github.com/csparkresearch/KuttyPy-GUI" target="_blank"><i class="github icon"></i>Github</a>, 
and is also included in 
<a class="ui inverted blue tiny button" href="https://packages.debian.org/sid/kuttypy-gui" target="_blank"><i class="linux outline icon"></i>Debian</a> sid. 

![](/assets/blog/screenshots/kpy_gui.png){:class="ui image fluid centered lightbox" alt="KuttyPy Graphical Interface"}

### An 8 Channel voltmeter!

In addition to having 32 I/O pins at your disposal , you can also view the readings from 8 analog inputs in the form of fancy guages. In effect,
it can act as an 8-channel, 10-bit, 0-5000mV voltmeter. Excellent for debugging your Arduino Projects!

### An I2C Sensor Logger

The kuttyPy also supports I2C sensors such as MPU6050 , BMP180, TSL2561 in a plug and play format. The code has already been written for you.
Simply plug in the sensors to VCC,GND,SCL,SDA , click on `scan`, and select the sensor which is automatically detected.

Gauges and sliders magically appear and display the readings. Excellent utility for Physics students.

![](/assets/images/kuttypy/mcp4725dac.gif){:class="ui image large centered lightbox" alt="MCP4725 I2C DAC controlled and Monitored with KuttyPy"}

### And robots, of course!

<div class="ui center aligned container" style="max-width: 600px !important;">

<video preload='none' poster='/assets/images/kuttypy/robot.jpeg' width="100%" controls loop playsinline autoplay>
	<source src='/assets/images/kuttypy/robot.mp4' type="video/mp4">
	<p>Your Browser does not support HTML5 videos. Please try viewing on a different one</p>
</video>
</div>

## You can still upload code!

The standalone operation feature is not lost. The kuttyPy interpreter code is actually a part of the bootloader, so
the users can compile C code with avr-gcc, and upload it to the kuttyPy. The user uploaded code will be frozen only when
the KuttyPy graphical utility takes over for real time control of the pins. In all other scenarious, if a power supply
of 5V is provided to the kuttyPy, it will execute the user uploaded code.

![](/assets/blog/screenshots/kpy_code.png){:class="ui image fluid centered lightbox" alt="KuttyPy C Code"}

The graphical interface clearly shows the register operation associated with each click. For example, if PD0 was changed from
input to output, and all other PD1-PD7 are inputs, the the log window will show

```
DDRD = 1 .    0b00000001 . 0x01
```
This is for students to grasp quickly, the idea of registers.

## Python Scripts

A fully equipped Python Library is also part of the package, and you can combine with other powerful modules such as Numpy, Matplotlib, and OpenCV to create
automatation prototypes!

### Code to log data from the ADC and plot it with matplotlib
```python
# Read ADC Values and plot them
import time
from kuttyPy import *
from matplotlib import pyplot as plt

setReg(ADMUX, (1<<6) | 5) #REF_AVCC | Channel 5
for a in range(50): 
    setReg(ADCSRA, 196)
    cl = getReg(ADCL)
    ch = getReg(ADCH)
    plt.scatter(a, (ch<<8)|cl ,s=5)
    plt.pause(0.01) #Wait 10 mS
```
