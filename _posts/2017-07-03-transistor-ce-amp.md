---
layout: blog
title: NPN Transistor CE Amplifier
description: Amplifier made with an NPN transistor
cover: /assets/blog/screenshots/npn-ce-amp.png
author: jithin
summary: Using an NPN transistor in common-emitter configuration to make a high gain amplifier. You will need the waveform generators and oscilloscope of ExpEYES, and an NPN transistor(2N2222).
show-toc: true
tags: [4148,transistor,common emitter,characteristics]
pins: [WG,PV1,A1,A2]
category: expeyes17
---


## Quick Start

The schematic is wired as shown in the diagram below.  It is very similar to the schematic used for drawing the output characteristics.

The AC signal is connected to the base, through a capacitor so that the biasing is not affected.
 
Since the gain is high, we need a small input signal, smaller than the 80 mV available from WG. 
A divider network using 1k and 2.2k gives  around 20 mV output and that is fed to the base. This input signal is monitored on A2. 
The DC operating point is decided by the voltage applied to the base through the 100k resistor. 

By adjusting PV2, we can take the transistor between cut-off and saturation conditions. 
The value of PV2 is adjusted to get an output with minimum distortion. 
To improve it further, one can reduce the input signal, use a higher collector supply voltage instead of PV1, or use a transistor with a lower gain value.

![](/assets/blog/schematics/npn_ce_amp.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/npn-ce-amp.jpg){:class="ui image centered medium lightbox" alt="Photograph: Diode Clamping with ExpEYES17"}

<div class="ui clearing divider"></div>

## Screenshot of the UI

Screen shot of the input and output waveforms of Transistor Amplifier in CE configuration
![](/assets/blog/screenshots/npn-ce-amp.png){:class="ui image fluid centered lightbox" alt="ExpEYES17: Transistor Amplifier"}

