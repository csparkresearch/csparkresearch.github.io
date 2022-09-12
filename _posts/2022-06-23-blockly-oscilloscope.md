---
layout: blog
title: Create an Oscilloscope UI
description: Use Visual Programming to Create an oscilloscope.
cover: /assets/blog/screenshots/blocks_scope.png
author: jithin
summary: |
  The visual programming blocks include several blocks which use the capture routines. You can use them to create a custom oscilloscope interface

show-toc: true
tags: [seelab3, oscilloscope , Blockly, sine wave]
pins: [5V, SQ2, IN2, GND, WG, PV1, PV2, IN1, SEN, IN2]
category: [seel3, android]
---

  
## Build an oscilloscope interface
    
There are several simple graphical blocks that allow students to acquire and process capture data such as capture2, capture_action, set_trigger, fit_sine etc

![](/assets/blog/screenshots/capture_blocks.png){:class="ui image fluid" }

## How-To Video 

The video below shows how to attach blocks together in order to get the oscilloscope working

<iframe width="560" height="315" src="https://www.youtube.com/embed/tzDwFtMKp_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### It does the following

+ Set the trigger
+ Capture 2 channels - A1, A2
+ Plot the acquired data
+ Extract the frequency of A1 trace and show it in a sticker
+ Loop multiple times 

## See Also
 + [Android App for testers](https://play.google.com/store/apps/details?id=com.cspark.research.eyes17)
