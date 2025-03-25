---
layout: blog
title: Scanning Radar with a Servo Motor and the VL53L0X
description: Create a surroundings mapping tool using the VL53L0X distance measurement sensor
cover: /assets/blog/screenshots/Radar with VL53L0X and a Servo Motor.png
author: jithin
summary: |
  VL53L0X is an easily available optical ranging module with an effective range of around 1 meter. This is mounted on a servo motor, and a small code snippet measures the distance to the neasrest obstacles at different angles. This data is then plotted in a polar plot with Blockly.

show-toc: true
tags: [seelab, interactive schematics , Blockly, VL53L0X, Servo]
pins: [5V, SQ2, IN2, GND, WG, PV1, PV2, IN1, SEN, IN2]
category: [seel3, android]
---


# Construction

## VL53L0X Light based distance measurement sensor


Plug the sensor to the I2C port by connecting 5V, GND , SCL, and SDA pins. 
Place a reflective object in front of this sensor such that the invisible laser pulse emitted from the sensor can bounce back towards the sensor.
The object does not have to be a mirror. Any light coloured item will do, such as even a tennis ball.

![](/assets/blog/interactive-schematics/VL53L0X-photo.jpg){:class="ui image medium lightbox" }

## Servo Motor with SQ1

The SG-90 Servo motors can be controlled using PWM signals with a frequency of 50Hz, and a pulse width of 500 to 2500 uS . The pulse width can be adjusted to control the angle of the servo motor.

![](/assets/blog/screenshots/servo radar.jpg){:class="ui image large lightbox" }

The above code was made using Blockly to gradually rotate the servo, and measure the distance
to the nearest obstacles using the VL53L0X LIDAR. The polar plot block was then setup to plot
this in a familiar `radar` view.

![](/assets/blog/photographs/lidar radar.jpg){:class="ui image huge lightbox" }



![](/assets/blog/screenshots/servo radar app.jpg){:class="ui image large lightbox" }

## See Also
 + [Android App for testers](https://play.google.com/store/apps/details?id=com.cspark.research.eyes17)
