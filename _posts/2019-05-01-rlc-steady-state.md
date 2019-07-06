---
layout: blog
title: AC Circuits
description: Steady State Response of RLC Circuits 
cover: /assets/blog/screenshots/rlc-steadystate.png
author: jithin
summary: A square wave is given to the clock input of the 74LS74 flipflop. The Q-bar output is connected to the D input. Clear and Preset inputs should be held HIGH. Every rising edge toggles the output, but the falling edge is uneventful.
show-toc: true
tags: [Capacitor,Resistor,RLC,steady state,Electronics]
pins: [IN2,A1,A2]
category: [expeyes17, electrical]
---


## Quick Start

In this section, we measure the amplitude and phases of voltages and currents across Resistors, Capacitors and Inductors when an AC voltage is applied. Three separate cases will be explored; Series RC circuit, RL circuit and RLC circuit. The resonance of LC circuit is explored.

## AC Voltage applied to series RC
---

![](/assets/blog/schematics/RCsteadystate.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/RCsteadystate.png){:class="ui image centered medium lightbox" alt="Photograph: RC steady state"}

The observed waveforms are shown below. The green trace is the voltage across the resistor. 
Since the current and voltage are in phase across a resistor, this trace represents the phase of current. 
It can be seen that it is ahead of the red trace (voltage across C) by 90 degree, as expected. 

The phase difference of voltage waveforms across the capacitor is given by atan(Zc/R). 
The measured value is 45 degree and the expected value for R=1k, C = 1uF and f = 150 Hz is 46.7 degree. 
To get them matching, we need to use the actual values of the resistance and capacitance in the calculations, not the nominal values printed on them.

<div class="ui clearing divider"></div>


### Screenshot

![](/assets/blog/screenshots/rc-steadystate.png){:class="ui image fluid centered lightbox" alt="RC Steady State Response"}

## AC voltage applied to a series RL circuit

![](/assets/blog/schematics/RLsteadystate.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/RLsteadystate.png){:class="ui image centered medium lightbox" alt="Photograph: RL steady state"}

The observed waveforms are shown below.  The phase difference of voltage waveforms across the capacitor is given by atan(Zl/R). 
The measured value is 10.7 degree R=1k, L = 10mH and f = 3000 Hz, in agreement with calculated value. 

![](/assets/blog/screenshots/rl-steadystate.png){:class="ui image fluid centered lightbox" alt="RL Steady State Response"}

## AC voltage applied to a series RLC circuit, explore Resonance Condition

![](/assets/blog/schematics/RLCsteadystate.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/RLCsteadystate.png){:class="ui image centered medium lightbox" alt="Photograph: RLC steady state"}

The RED trace is the voltage across LC at resonance. The individual voltage across L and C are also shown. It can be seen that the total volatge is going to zero because the voltage across each element is equal and out of phase, so they add to zero.
![](/assets/blog/screenshots/rlc-steadystate.png){:class="ui image fluid centered lightbox" alt="RLC Steady State Response"}

## See Also

+ [RLC Transient](/expeyes17/electrical/rc-transient)
+ [RC Transient](/expeyes17/electrical/rl-transient)
