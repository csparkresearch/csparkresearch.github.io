---
layout: blockly_layout
title: "Waveform Generators"
thumb: "/assets/blockly/media/WAVEGEN.png"
description: "Use the Sine/Square wave generators to create music and more"
position: 2
---



## Music player with a piezo buzzer

### Introduction to Functions

The first section of this program is a function we have called `play note` . This function
accepts one input which is set as the frequency for the sine wave generator WG. It then waits for 0.1 Seconds.

### Musical notes

In the subsequent sections, we have prepared a list of frequencies corresponding to the notes for a song. A frequency of 0 turns off
the since wave, and indicates a pause. If a frequency is repeated twice, it means it will play for 0.2 seconds before the next frequency gets set.

{% include blockly_sample.html xml="/assets/images/seelab3/blockly/wavegen/Functions and Lists - Happy Birthday.xml" id=1 %}


# More Examples

{% include blocklygrid.html dir="images/seelab3/blockly/wavegen"   %}
