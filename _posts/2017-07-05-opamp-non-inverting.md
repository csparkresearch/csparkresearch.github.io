---
layout: blog
title: Non-inverting Operational Amplifier
description: Make a non-inverting amplifier with an op-amp
cover: /assets/blog/screenshots/opamp-noninv.png
author: jithin
summary: A low amplitude (80mV) sinusoidal wave is amplified using a simple Op-Amp in non-inverting configuration, and its gain is calculated by precisely fitting the input and output waveforms using Numpy. This is tallied with the expected gain based on the popular theoretical formula.
show-toc: true
tags: [resistor,opamp,non inverting,amplifier,Electronics]
pins: [WG,A1,A2]
category: [expeyes17,electronics]
---


## Quick Start

The schematic is wired as shown in the diagram below. R<sub>i</sub> = 1k and R<sub>f</sub> = 10k. 
The WG amplitude is set to 80 mV, you may try a 1 volt input to observe the clipping of the the output, 
since it exceeds the supply voltage of +/- 6 volts.

![](/assets/blog/schematics/opamp-noninv.png){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/opamp-noninv.jpg){:class="ui image centered medium lightbox" alt="Photograph: OP07 used (pin configuration of uA741)"}

<div class="ui clearing divider"></div>

## Screenshot of the UI

Screen shot of the oscilloscope program showing inputs and output of a Non-Inverting Amplifier. Theoretical Gain is -11.
![](/assets/blog/screenshots/opamp-noninv.png){:class="ui image fluid centered lightbox" alt="ExpEYES17: Opamp non-inverting amplifier"}

## Exercises

+ Calculate the gain by fitting A1, and A2 by enabling the check-boxes next to them. gain = output/input
+ What is the gain if Rf < Ri .

## Write Python Code

This experiment can also be done by running this Python Code.

```python
import eyes17.eyes
p = eyes17.eyes.open()

from pylab import *

p.set_sine(200)
p.set_pv1(1.35) # will clip at 1.35 + diode drop 
t,v, tt,vv = p.capture2(500, 20) # captures A1 and A2

xlabel('Time(mS)') ylabel('Voltage(V)')
plot([0,10], [0,0], 'black')
ylim([-4,4])

plot(t,v,linewidth = 2, color = 'blue')
plot(tt, vv, linewidth = 2, color = 'red') 
show()
```

![](/assets/blog/screenshots/opamp-inv-mpl.png){:class="ui image centered large lightbox" alt="Op-amp inverting python code output"}

