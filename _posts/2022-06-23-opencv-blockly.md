---
layout: blog
title: Object Tracking With Opencv and Blockly
description: Create programs to analyze camera data.
cover: /assets/blog/screenshots/cv_pendulum.png
author: jithin
summary: |
  Create programs to analyze camera data and track objects such as simple pendulums to extract position.

show-toc: true
tags: [seelab, opencv , Blockly, pendulum, computer vision]
pins: [5V, SQ2, IN2, GND, WG, PV1, PV2, IN1, SEN, IN2]
category: [seel3, android]
---

  
## Experimental Feature. Computer Vision
    
Record and manipulate images recorded from the front/back camera.
There are several simple graphical blocks that allow students to process camera frames, such as get_frame, to_grayscale, get_blobs etc.

![](/assets/blog/screenshots/cv_toolbox.png){:class="ui image fluid" }

# How-To Video 

The video below shows how to attach blocks together in order to get an object detection preview running

<iframe width="560" height="315" src="https://www.youtube.com/embed/EpHHADQs1fQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Extract location information of a pendulum 

+ In order to track the X position of an oscillating pendulum, we use the object tracking to locate its position, and add the coordinate to a timestamped list
+ Following the data acquisition process, we plot the acquired data, and also fit it in order to extract the frequency.

![](/assets/blog/screenshots/cv_pendulum_code.jpeg){:class="ui image fluid" }

![](/assets/blog/screenshots/cv_pendulum.png){:class="ui image fluid" }


## See Also
 + [Android App for testers](https://play.google.com/store/apps/details?id=com.cspark.research.eyes17)
