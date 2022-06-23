---
layout: blog
title: Creating Schematics in Inkscape
description: How to make them interactive schematics for the Android App.
cover: /assets/blog/interactive-schematics/interactive-schematic.png
author: jithin
summary: |
  Circuit diagrams can be boring sometimes, and ExpEYES has tried to make them more appealing by making them dynamic and interactive.
  As can be seen from the cover image, this means that voltmeters in the schematic show values in real-time, the function generators can be dynamically adjusted , and derived parameters such as currents are also calculated
  and updated continuously.
show-toc: true
tags: [seelab3, interactive schematics , android]
pins: [5V, SQ2, IN2, GND, WG, PV1, PV2, IN1, SEN, IN2]
category: [expeyes17, android]
---


## Introduction

Interactive schematics can be created by instructors/users of the app using any vector graphics
editor such as Inkscape. The android app is designed to interpret the generated SVG file, and
automatically insert dynamic content.

## The procedure
+ Simply create a schematic diagram using the various vector tools
+ Insert text elements at the various control and measurement locations in the schematic
+ Set the ID of each of these elements to what they represent. e.g , for A1 voltmeter, ID should be set to A1
+ These are the various IDs supported
  + A1,A2,A3,SEN - All are voltmeters
  + WG - Waveform Generator. You can also add parameters in the description field as shown in the animation below.
  + SQ1, SQ2  - Square wave generators
  + PV1, PV2 - Voltage sources
  + BMP280:0 - Temperature read from a connected BMP280 sensor
  + BMP280:1 - PRESSURE read from a connected BMP280 sensor
  + BMP280:2 - HUMIDITY read from a connected BME280 sensor
+ Check out the animation below on how to insert a WG waveform generator element

![](/assets/blog/interactive-schematics/create-wg.gif){:class="ui image huge lightbox" }

## Adding derived parameters
+ Certain values may be needed to be calculated from a combination of measured values.
+ Such as current across a load resistance equals the voltage across it divided by the resistance.
+ These elements can be added by inserting an element with ID of the form EQUATION:x where x is a number
+ In the animation below, an equation to calculate load current is inserted into the file 

![](/assets/blog/interactive-schematics/create_interactive_schematic_equation.gif){:class="ui image huge lightbox" }

## Adding oscilloscope options
+ Certain experiments might require the use of an oscilloscope
+ You can tap on any analog input( A1, A2, A3, MIC ..) to open up a single channel popup oscilloscope
+ For multi-channel scopes with flexible parameter configuration options, add an element with ID GRAPH:x
+ Follow the animation below on how to add a 3 channel scope for the full-wave generator experiment

![](/assets/blog/interactive-schematics/create_interactive_schematic_graph.gif){:class="ui image huge lightbox " }

## Results from the Android App

### The circuit was made on a SEELab3 device

![](/assets/blog/interactive-schematics/fullwave-photo.jpg){:class="ui image medium lightbox " }

### Screenshot of the above from the App
+ Notice how the values and plots are dynamically generated. Watch animation [here](/assets/blog/interactive-schematics/screenrec.mp4)
+ The (INSTRUCTIONS) tab contents can also be set by adding text matter in .md format to the description field in the SVG file's metadata. This procedure is shown in the next section

![](/assets/blog/interactive-schematics/fullwave-screenshot.jpg){:class="ui image medium lightbox " }

## Adding instructions to the experiment

+ Open the document properties, and paste the instructions in .md format into the description field.

![](/assets/blog/interactive-schematics/create_interactive_schematic_help.gif){:class="ui image huge lightbox floated" }
![](/assets/blog/interactive-schematics/fullwave-help.jpg){:class="ui image medium lightbox " }



## See Also
 + [Android App for testers](http://play.google.com/com.cspark.research.eyes17)
