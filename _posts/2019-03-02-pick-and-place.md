---
layout: blog
title: Pick and Place Assembly
description: A pictorial walkthrough of the PCB assembly process 
banner: /assets/blog/banner_pcb.jpg
cover: /assets/blog/elec-assembly.jpg
author: jithin
summary: Circuits these days are automatically assembled by robots which can lift components from their rolls/tubes/trays, and place them with micron level precision on circuit boards at an incredible pace.
show-toc: true
tags: [Pick and Place, assembly, expeyes, kuttypy, pcb, manufacturing]
category: [manufacturing]
---


## Introduction

<img class="ui image fluid" src="/assets/blog/banner_pcb.jpg"/>

Given that ExpEYES17 has more than a hundred tiny components, assembly by hand takes a few hours each. This is impractical due to cost considerations, as
well as the high probability of human error.

## Enter the Pick and Place robot

These formidable machines automatically populate PCBs, and leave little room for error. The automatic assembly is a multi-step process

+ PCB Manufacturing, and component sourcing
+ Stencil Pasting : Solder paste is applied on all the pads using a stencil and a pasting machine
+ Pick and Place assembly: Robots pick up components from their trays/rolls, and place them at their exact positions as per the coordinate file
 + Loading Components : Components come in reels/sticks/trays , and must be loaded into the machine
 + Load the coordinate file: The EDA tool you used, such as KiCAD, will generate a coordinate file that contains the exact position of each component. This information must be fed to the machine
 + Check for alignment issues, and component angles/accidental rotations
 + Insert a PCB panel, and proceed with assembly
+ Reflow soldering : The boards are placed in a reflow oven which melts the solder paste joining the parts and the PCB, thereby completing the process.
 
## Get it all together

![](/assets/blog/pnp/components.jpg){:class="ui image floated medium lightbox" }
Gather component reels/tubes/trays, and load them into the many feeders of the pick and place machine.

We use a large number of 0805 sized components, and you can see the rolls in this picture. The sharp vacuum nozzles of the machine can easily place
these parts with a high level of accuracy.

You can also see a tray of TQFP package microcontrollers

![](/assets/blog/pnp/tray.jpg){:class="ui image floated medium lightbox" }

<div class="ui clearing divider"></div>
## Stencil Pasting
{% include youtube.html id="iYGybBz1g-g" %}

Solder paste is applied on the PCB via a stencil.

<div class="ui clearing divider"></div>
## Assembly

The machine is an incredible piece of engineering. It picks up a dozen tiny parts within a second, and we had to make a slow motion video to
see it in action. Each part is picked up by one of twelve vacuum nozzles arranged in a circular pattern. The nozzle array rotates to let the next nozzle load a component.

Once each of the nozzles are holding a component , the whole arm moves onto the PCB, and places the components where they need to be. Rinse and repeat!

Slow motion video of a Pick and Place PCB assembly machine loading components into a circular array of vacuum nozzles, and placing them on the ExpEYES17 circuit board which we aided in development and also manufacture.

{% include youtube.html id="ej8Qm9UXRRA" %}

{% include youtube.html id="Pr9nnnDRnLg" title="Pick and place of large pin count ICs. Regular speed"%}

Two arms are faster than one!

## Visual Inspection before reflow

![](/assets/blog/pnp/tosolder.jpg){:class="ui image floated large lightbox" }

At this point the components are all delicately placed on the solder paste, and they can be moved around if necessary. 

Once this board goes through
the reflow process, it's ready to be shipped/packed, and alterations are akin to repair. So a good look is advisable.


<div class="ui clearing divider"></div>

## Reflow Process

![](/assets/blog/pnp/oven.jpg){:class="ui image floated medium lightbox" }

The reflow oven can either be of a fixed type, or a conveyor type. The reflow process involves a series of different temperatures
set in a certain order known as the temperature profile. 

While the fixed type needs to adjust its temperature accordingly over the
duration of the enture process, the conveyor type simply needs to maintain different temperatures at different zones as the PCB
slowly moves through it and gets reflowed.

{% include youtube.html id="RtBukv1rAlU" %}
<div class="ui clearing divider"></div>

## Admire your work

![](/assets/blog/pnp/final.jpg){:class="ui image fluid" }

## Optional extras

If your PCBs are heading out to rough environments, it may help to spray coat them with acrylic to protect it from the elements.

{% include youtube.html id="5WL1mmvJlGE" %}
