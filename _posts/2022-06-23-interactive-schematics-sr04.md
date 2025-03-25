---
layout: blog
title: Pulling apart the SR04 Echo based Distance sensor
description: Study of the SR04 echo module with interactive schematics.
cover: /assets/blog/interactive-schematics/sr04.jpg
author: jithin
summary: |
  HY-SR04 is a widely available ultrasound ranging module. It consists of two 40 kHz Piezo crystals, one acts as a transmitter and other as a receiver, 
  and some electronics circuitry to measure the time interval between a burst of sound transmitted and the echo received.

show-toc: true
tags: [seelab, interactive schematics , android]
pins: [5V, SQ2, IN2, GND, WG, PV1, PV2, IN1, SEN, IN2]
category: [seel3, android]
---


# Distance Measurement using Sound
HY-SR04 is a widely available ultrasound ranging module. It consists of two 40 kHz Piezo crystals, one acts as a transmitter and other as a receiver.
A sound pulse is emitted, and the time interval between this burst of sound and the echo received is measured using ExpEYES/SEELab.

The four pins are the power supply, ground, trigger and Echo. This module can be connected to ExpEYES-17  as shown in the instructions, to measure distance between the module and the reflecting surface, with an error around 3mm. 

<img src='data:image/jpeg;base64,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'/> 

![](/assets/blog/interactive-schematics/sr04.jpg){:class="ui image fluid"}


## The interactive schematic

![](/assets/blog/interactive-schematics/sr04-back.jpeg){:class="ui image fluid"}


The connections are made as follows

+ 5V to 5V of the module
+ GND to GND
+ SQ2 - this emits a short pulse to instruct the module to start a measurement. It is connected to TRIG (Trigger)
+ IN2 - The module responds with a voltage signal that goes up(5V) as soon as the pulse is emitted, and comes back to 0V when the reflected sound(echo) is received. If not received, it goes down to zero after a short timeout interval. Connect this to IN2 which can measure time intervals

The data is shown in a block, and is also plotted. A flat oscillating object was used to record the data shown in the video recording below.
![](/assets/blog/interactive-schematics/sr04-pendulum.gif){:class="ui image large lightbox"}


## Further understanding of how this works
We need to monitor the signals exchanged with this sensor

We further connect
+ SQ2(TRIG) -> A1
+ IN2(ECHO) -> A2
+ A microphone placed between the two piezos on the SR04 module -> MIC . This is try to pick up both signals since they are at 40kHz, and we can't hear them.

And select the appropriate graph from the menu.

The following graphs were obtained

![](/assets/blog/interactive-schematics/sr04-scope.jpeg){:class="ui image large lightbox"}
You can see a small ripple picked up by the microphone when the module transmits, and another smaller one when the echo is received. You can observe that these coincide
with the red graph(Echo) .

### We shall now try to directly monitor the voltage supplied to the transmitter, and compare with the red graph.

For monitoring the signals, we connect instead of a microphone

+ Pin of the piezo transmitter -> A3

The following graphs were obtained
![](/assets/blog/interactive-schematics/sr04-scope-sound.jpeg){:class="ui image large lightbox"}

You can see that the piezo receives 8 oscillations, and after that the red graph goes up to 5V indicating that the sound pulse has been sent!!

It returns to 0 on either timeout, or if the receiver  which is tuned to the same frequency as the transmitter gets the echoed signal.
Since speed of sound is known (Around 340m/s) , Distance = Speed/time taken. Since time is measured for the round trip of the sound pulse , distance to the reflecting object is only
half of this calculated distance. So,

`Distance = 340/time/2 `


### We can also directly monitor the amplified receiver signal.

After some trial error, this signal was available at resistor R9. So we  connected A3 to that as shown below
![](/assets/blog/interactive-schematics/sr04-recv-photo.jpeg){:class="ui image large lightbox"}

The receiver pulses(Green) coincide with the Echo signal(Red) going low . We can also see a second set of receiver pulses because a second reflecting object was placed behind
the first. So basically the same transmitted sound bounced from two different surfaces, with one taking more time than the other.

![](/assets/blog/interactive-schematics/sr04-recv-signal.jpeg){:class="ui image large lightbox"}

## This can be used to design several experiments in mechanics.

### The Mass and Spring problem

When a mass suspended on a spring is made to oscillate, the period of oscillation is given by  T = 2 * pi * sqrt( m/k), where m is the mass and k is the spring constant. We can measure the period of oscillation by measuring the distance to the moving mass as a function of time. The distance versus time graph is fitted with a sine function to calculate the frequency. The photograph below shows a metal plate suspended on a spring and the SR04 facing it from the bottom. The distance to the oscillating plate is measured for 5 seconds and the data is fitted to a sine function.

![](https://expeyes.in/Expt17/html/photos/massAndSpring.jpg){:class="ui image large lightbox"}

A video of the experiment is [HERE](https://www.youtube.com/watch?v=FhCYhDiIRuQ)

### Simple Pendulum

The period of oscillations of a pendulum also can be measured using SR04 connected to ExpEYES. The figure shows a pendulum with a rectangular bob, but one can use a spherical bob with a piece of paper (to provide a flat reflecting surface) pasted to it. The measured frequency is 1.05 Hz for a pendulum having a length of 22cm. One can calculate the value of acceleration due to gravity from this data.
[Video](https://www.youtube.com/watch?v=fOTfMsKiXBo)

### Free Fall, Displacement as a function of Time

It is possible to measure the distance to a body falling under gravity. The value of 'g' can be calculated by fitting the data with the polynomial
S(t)= a * t^2 + b * t + c
'g' is given by 2*a



## See Also
 + [Android App for testers](https://play.google.com/store/apps/details?id=com.cspark.research.eyes17)
