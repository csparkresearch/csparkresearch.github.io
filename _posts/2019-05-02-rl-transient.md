---
layout: blog
title: RL Transient Response
description: Transient Response of RL Circuits 
cover: /assets/blog/screenshots/rltransient.png
author: jithin
summary: In this section, we explore the transient response of a series RL circuit by applying a voltage step and capturing the voltage variation at the output.
show-toc: true
tags: [Capacitor,Resistor,RC,transient,Electrical]
pins: [OD1,A1]
category: [expeyes17, electrical]
---


## Quick Start

In this section, we explore the transient response of a series RC circuit by 
applying voltage step and capturing the voltage variation across the inductor. 



![](/assets/blog/schematics/RLtransient.svg){:class="ui image medium lightbox floated" }

![](/assets/blog/photographs/RLtransient.png){:class="ui image centered medium lightbox" alt="Photograph"}

## Practical difficulties

With the ExpEYES oscilloscope, there is an option to change the voltage level on any of the digital outputs, and start capturing voltage signals immediately afterwards. 
The latency is less than a microsecond, and this enables students to study the transient response of various circuits.

In this particular experiment, the <button class="ui basic blue button">0-5V</button> button changes OD1 from 0 Volts to 5Volts, and records the output of the
circuit. 
In a similar fashion, the voltage can be switched from <button class="ui basic blue button">5V - 0V</button>, and you can observe the output behaviour.


### Screenshot

![](/assets/blog/screenshots/rltransient.png){:class="ui image fluid centered lightbox" alt="RL Transient Response"}

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
