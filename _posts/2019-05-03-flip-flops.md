---
layout: blog
title: Clock Divider
description: Frequency halving using D flip-flops
cover: /assets/blog/screenshots/clock-divider.png
author: jithin
summary: A square wave is given to the clock input of the 74LS74 flipflop. The Q-bar output is connected to the D input. Clear and Preset inputs should be held HIGH. Every rising edge toggles the output, but the falling edge is uneventful.
show-toc: true
tags: [4148,3V3,Diode,clipping,Electronics]
pins: [IN2,A1,A2]
category: [expeyes17, electronics]
---


## Quick Start

A square wave is given to the clock input of the 74LS74 flipflop. The Q-bar output is connected to the D input. Clear and Preset inputs should be held HIGH. Every rising edge toggles the output, but nothing happens at the falling edge.
![](/assets/blog/schematics/clock-divider.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/clock-divider.jpg){:class="ui image centered medium lightbox" alt="Photograph: D flip flop clock divider"}

<div class="ui clearing divider"></div>


### Screenshot

![](/assets/blog/screenshots/clock-divider.png){:class="ui image fluid centered lightbox" alt="Clock Divider"}

### Duty Cycle
The duty cycle of the output waveform will be 50% irrespective of the duty cycle of the input waveform, as shown below.

![](/assets/blog/screenshots/clock-divider.png){:class="ui image fluid centered lightbox" alt="Clock Divider"}
