---
layout: e17page
title: "ExpEYES-17"
tagline: "&mdash; Your Lab @ Home .  List of Experiments &mdash;"
active: apps
---

{% include row_gallery.html 
imagelist = site.data.expeyes-row-gallery
%}


* A tool for learning science by exploring and experimenting.
* 50 documented experiments and easy to add more.
* Wide range: High school and above.
* 4 channel Oscilloscope, 1Msps, +/-16V input range. Programmable voltage ranges
* Sine/Triangular Wave Generator, 5Hz to 5kHz
* Programmable voltage sources, +/5V and +/-3.3V
* Frequency Counter and time measurements.
* Supports I2C standard sensors
* 12-bit analog resolution.
* Open Hardware and Free Software.
* Software in Python programming language.
* Requires USB port and Python 


## External Connections
___

The function of the external connections is briefly explained below. All the black coloured terminals are
at ground potential,all other voltages are measured with respect to it.

### Outputs 
___
- **Constant Current Source(CSS)** : the constant current source can be switched ON and OFF under software control.
The nominal value is 1mA but may vary from unit to unit,due to component tolerances. To measure the exact value, connect an ammeter from CSS to GND. Another method is to connect a known resistance(~1K) and measure the voltage drop across it. The load resistor should be less than 3k for this current source.

- **Programmable Voltage** : Can be set,from software, to any value in the -5V to +5V range.The resolution is 12 bits, implies a minimum voltage step of around 2.5 millivolts.

- **Square Wave Generator SQ1** : Output swings from 0 to 5 volts and frequency can be varied 4Hz to 100kHz. All intermediate values of frequency are not possible. The duty cycle of the output is programmable. Setting frequency to 0Hz will make the output HIGH and setting it to -1 will make it LOW, in both cases the wave generation is disabled. SQR1 output has a 100Ω *series resistor* inside so that it can drive LEDs directly.

- **Square Wave Generator SQ2** : Output swings from 0 to 5 volts and frequency can be varied from 4Hz to 100kHz. All intermediate values of frequency are not possible. The duty cycle of the output is programmable. SQR2 is not available when WG is active.

- **Digital Output (OD1)** : The voltage at OD1 can be set to 0 or 5 volts using software.

- **Sine/Triangular Wave WG** : Frequency can be varied from 1Hz to 5kHz. The peak value of the amplitude can be set to 3 volts, 1.65 volts or 150 mV. Shape of the waqveform output is programmable, using the GUI sine or triangular can be selected. WG bar is converted into WG.

### Inputs
___
- **Capacitance meter IN1** : Capacitance connected between IN1 and ground can be measured. It works better for low capacitance values, upto 10 nanoFarads but it is possible to measure in micro farad range also.

- **Frequency Counter IN2:** : Capable of measuring frequencies upto several Mega Hertz. Also works as an analog input in the 0 to 3.3 volts range.

- **Resistive Sensor Input(SEN)** : This is mainly for sensors like Light Dependent Resistors,Thermistors,Photo-transistors etc.. SEN is connected to 3.3 volts through a 5.1kΩ resistor.

- **±16V Analog Inputs, A1 & A2** : Can measure voltage within ±16 volts range. The input voltage range can be selected from .5V to 16V fullscale. Voltage at these terminals can be displayed as a function of time, giving the functionality of a low frequency oscilloscope. The maximum sampling rate is 1Msps/channel. Both have an input impedance of 1MΩ.

- **±3.3V Analog Input A3** : Can measure voltage within ±3.3 volts range. The input can be amplified by connecting a resistor from Rg to ground, gain -1 + (Rg/10000). The input impedance of A3 is 10MΩ.

- **Microphone Input MIC** : A condenser microphone can be connected to this terminal and the output can be captured.

- **12C Sensor Interface** : The four connections(+5V, Ground,SCL and SDA) of the 8 terminal berg strip supports 12C sensors. The software is capable of recognizing a large variety of I2C sensors for measuring temparature, velocity, acceleration etc.. These are easily available in the market.

- **+/-6V / 10mA Power Supply** : The VR+ and VR- are regulated power outputs. However,they can supply very little current, but good enough to power an Op-Amp.





```python
#Example code to capture a trace and plot it
from expeyes import eyes17
p = eyes17.open()

#Fetch 1000 points from A1 with 1uS between each consecutive point
x,y = p.capture1('A1',1000,1)
from pylab import *
plot(x,y)
show()
```


{% include experiment_gallery.html %}



{% include animated_gif.html url="images/screencasts/oscilloscope.gif"  title = "Oscilloscope Utility Introduction: Click to play"%}

{% include animated_gif.html url="images/screencasts/ac-circuits.gif"  title = "An example experiment: RLC phase shifts"%}

{% include animated_gif.html url="images/screencasts/sensor-logger.gif"  title = "Directly record data from sensors"%}
