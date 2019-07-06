---
layout: blog
title: Logic Gates
description: Study of digital circuits with ExpEYES17
cover: /assets/blog/screenshots/opamp-noninv.png
author: jithin
summary: Logic Gate ICs for AND and OR operations are studied using digital signals. The same circuits are then constructed using diodes to understand their operation.
show-toc: true
tags: [logic gates,digital circuits,Electronics, 74LS08, 74LS32]
pins: [SQ1,SQ2,A1,A2,A3]
category: [expeyes17,electronics]
---


## AND Gate

The 5 volt DC power for the IC (74LS08) can be taken from the +5V socket or from OD1 ( OD1 must be turned on ).

The inputs are connected to the square waves SQ1 and SQ2. The wave generator WG should be set to SQ2 option.
The output is connected to A3 (via a series resistor because the range of A3 is 3.3 volts only).

The voltage ranges of A1 and A2 are set to 16 volts and they are level shifted for a clear view, since traces will otherwise overlap each other.

![](/assets/blog/schematics/logic-gates.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/and-gate.jpg){:class="ui image centered medium lightbox" alt="Photograph: And GATE"}

<div class="ui clearing divider"></div>

### Screenshot of the UI

The yellow and green traces are inputs and red is the output. It can be seen that the output is HIGH only when both the inputs are HIGH.

![](/assets/blog/screenshots/andgate.png){:class="ui image fluid centered lightbox" alt="ExpEYES17: AND Gate"}

### AND Gate with Diodes

The AND gate can be implemented using two diodes, as shown in the figure below. If any of the inputs goes LOW, the diode conducts and the voltage at the junction goes LOW.

![](/assets/blog/schematics/diode-and-gate.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/diode-and-gate.jpg){:class="ui image centered medium lightbox" alt="Photograph: Diode AND Gate"}

<div class="ui clearing divider"></div>

## OR Gate with 74LS32
The waveforms for the 74LS32 OR gate  is also shown below. The ICs are pin compatible, and you only need to replace the IC.

![](/assets/blog/screenshots/orgate.png){:class="ui image fluid centered lightbox" alt="ExpEYES17: OR Gate"}

### OR Gate with Diodes
The OR gate can be implemented as shown below. If either of the inputs is HIGH, the output is also HIGH.

![](/assets/blog/schematics/diode-or-gate.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/diode-or-gate.jpg){:class="ui image centered medium lightbox" alt="Photograph: Diode OR Gate"}

<div class="ui clearing divider"></div>

### Screenshot of the OR gate implemented using two diodes

![](/assets/blog/screenshots/diode-or-gate.png){:class="ui image fluid" alt="Photograph: Diode OR Gate Screenshot"}
