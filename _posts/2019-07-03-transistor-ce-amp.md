---
layout: blog
title: Transistor CE Characteristics
description: Output Characteristics of transistors in Common Emitter Configuration
cover: /assets/blog/screenshots/npn-ce-amp.png
author: jithin
summary: This experiment lets you study the output characteristics on PNP and NPN transistors in common emitter configuration. The dependence of saturation current on base current is studied
show-toc: true
tags: [4148,transistor,NPN,PNP, common emitter,characteristics]
pins: [PV1,PV2,A1,A2]
category: expeyes17
---


## Quick Start

The schematic is wired as shown in the diagram below. 
The base current is set by the voltage from PV2, through a 100k resistor.
The base voltage is measured to calculate the base current from Ib = (PV2-A2)/100K.

The collector voltage is monitored by A1. The collector is connected to PV1, through a 1k resistor. 

For a selected base current, the voltage at PV1 is incremented in steps and at each step the collector voltage is measured. 
Corresponding collector current is calculated from i = (PV1-A1)/R. 
The transistor  used is 2N2222, having a current gain of around 200.

### Schematic
![](/assets/blog/schematics/npnCEout.svg){:class="ui image medium lightbox floated" }

### Photograph
![](/assets/blog/photographs/npnCEout.png){:class="ui image centered medium lightbox" alt="Photograph: NPN CE characteristics"}

<div class="ui clearing divider"></div>

## Screenshot of the UI

### Screenshot for NPN Transistor
Screen shot of the output characteristics of an *NPN Transistor* in CE configuration
![](/assets/blog/screenshots/npn-screenshot.png){:class="ui image fluid centered lightbox" alt="ExpEYES17: NPN CE characteristics"}

### Screenshot for PNP Transistor
Screen shot of the output characteristics of a *PNP Transistor* in CE configuration
![](/assets/blog/screenshots/pnp-screenshot.png){:class="ui image fluid centered lightbox" alt="ExpEYES17: PNP CE characteristics"}
