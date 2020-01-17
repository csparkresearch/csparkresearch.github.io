---
layout: blog
title: Piezo buzzer resonance with a square wave generator
description: The advanced data logger is used to study piezo resonance and square wave components
cover: /assets/blog/screenshots/advanced-logger-freq.png
author: jithin
summary: |
  A square wave is used to drive a piezo buzzer, and we attempt to identify which harmonic of the input frequency is used. The results also confirm that only F,3F, 5F... frequencies are available in a square wave.
show-toc: true
tags: [advanced data logger, bode plots, frequency response, resonance, low pass, band pass]
pins: [All]
category: [expeyes17]
---


## Introduction

With the [advanced data logger](advanced-logger) of expeyes, one can vary one output parameter, and study the effect on some other aspect of the experiment.

We will study the resonance of a piezo buzzer using a square wave, and observe that the buzzer automatically resonates(becomes loud) as long as the natural frequency
 matches with the input frequency or its odd harmonics. This shows that a square wave is composed of a fundamental sine
 wave and its odd harmonics with decreasing amplitude.

### Procedure

+ The frequency waveform generator SQ1 is connected to a Piezo buzzer. 
+ X parameter is set to SQ1. Minimum 100Hz, Maximum 5000Hz
+ A microphone is connected to MIC input
+ Y parameter is set to oscilloscope
   + Channel is selected as MIC
   + Amplitude is selected
   + Cross check frequency button is *disabled*

A settling delay of 100mS is set to allow the piezo buzzer to settle into a new frequency before measuring the stable amplitude.

500 datapoints were acquired, and the piezo buzzer was found to have two resonant frequencies with distinct shapes at 3110 and 3740Hz.
![](/assets/blog/screenshots/advanced-logger-amp-full.png){:class="ui image fluid centered lightbox" alt="Advanced data logger Piezo response"}

At the lower end of the frequency range, multiple peaks were observed resembling the major peaks. So a smaller frequency range up to 2000Hz was chosen to identify these more clearly

![](/assets/blog/screenshots/advanced-logger-sq1-amplitude-full.png){:class="ui image fluid centered lightbox" alt="Advanced data logger Piezo response"}

### Explaining these mini peaks

A square wave generator is composed of sine waves, and the series expansion looks something like
A*sin(f*x) + A*sin(3*f*x)/3 + A*sin(5*f*x)/5 + ...

![](/assets/blog/screenshots/advanced-logger-sq1-amplitude.png){:class="ui image fluid centered lightbox" alt="Advanced data logger Piezo response"}

Sure enough, the first peak of the buzzer was found to appear when driven with frequencies 1036 (3 x 1036 is close to 3110), 625 (5 x 625 close to 3110), 445(7 x f), or 341( 9 x f )

The second peak shape appeared at 1250 (3 times this frequency is close to 3750), 752 (5 x 752 is close to 3740) , 536 (7 x f), or 417 (9 x f)...

### Excitation frequencies

Following this, we recorded the dominant frequency emitted by the buzzer against the input frequency. The buzzer would automatically
choose one of the component frequencies in the square wave(F,3F,5F,7F ...) depending on its natural frequency.

*It was confirmed, that the emitted frequency was always an odd multiple of the input frequency*

![](/assets/blog/screenshots/advanced-logger-freq.png){:class="ui image fluid centered lightbox" alt="Advanced data logger Piezo response"}

* Fundamental: 
  * 4657,4658
* 3rd Harmonic:
  * 2491,7472
  * 2395.3, 7186
* 5th
  * 2383.4, 11918.2
* 7th
  * 2128.5, 14900

## SEE also

+ [Fourier series expansion](https://lpsa.swarthmore.edu/Fourier/Series/ExFS.html)


