---
layout: blog
title: Lissajous Figures
description: XY plots with RC Circuits in steady state equilibrium
cover: /assets/blog/screenshots/rc-xyplot.png
author: jithin
summary: Input and output waveforms of phase shifting circuits are plotted along orthogonal axes to obtain lissajous figures. At 90 degree phase shift, the normalized lissajous figure is circular.
show-toc: true
tags: [Capacitor,Resistor,RC,steady state,Electrical]
pins: [WG,A1,A2]
category: [expeyes17, electrical]
math: true
---

## Quick Start

A sinusoidal voltage is applied to a series RC circuit and the voltages across R and C are plotted. 
The resulting trace becomes a circle when R = Zc. The frequency is varied until the condition Xmax = Ymax is met.


![](/assets/blog/schematics/RCsteadystate.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/RCsteadystate.png){:class="ui image centered medium lightbox" alt="Photograph"}

## Measuring differential signals

The phase shift to be calculated is that between the drop across the resistor R, and the capacitor C. 
However, our measurements are with respect to ground(GND), and therefore, while A2 measures the drop between R and Ground as required,
A1 is measuring the voltage across R+C . 

Since we need the drop across the capacitor C, it suffices to subtract A2(R) from A1(R+C) . This is done by the Python code, and we
plot A2(R) vs (A1-A2) .

### Screenshot

![](/assets/blog/screenshots/rc-xyplot.png){:class="ui image fluid centered lightbox" alt="RC XY plot"}

## Analysis

You may save this data, and fit it with an appropiate mathematical function to extract the oscillation frequency, and compare it with the theoretical
frequency obtained from R and L . 

It can be observed that when a 5 to 0 volt step is applied, the polarity of the voltage across the inductor is reversed and 
the voltage goes to negative immediately. 
After that the voltage reduces exponentially, driving a current through the resistor. 

The resulting wave form is fitted with V = Vo x exp(R/L * t) to extract the R/L value. This also allows calculation of the value of the inductor.

## See Also

+ [RLC Transient](/expeyes17/electrical/rlc-transient)
+ [RC Transient](/expeyes17/electrical/rc-transient)
+ [RL Transient](/expeyes17/electrical/rl-transient)
