---
layout: blockly_layout
title: "Graphical Programming"
thumb: "/assets/blockly/media/BMP280.png"
description: "Interface I2C sensors and controllers"
position: 2
---

<hr>

# I2C Sensors

The hardware can read and write to devices that use the I2C protocol for communication. These
include a wide variety of sensors for measuring physical parameters such as luminosity, acceleration,
magnetic fields, pressure, and much more. Try out the following demos that range from simple to advanced

Connections to I2C devices are quite simple, and require 4 wires. You can also use the socket on
the right side which is a 4 pole connector for 4 wire AUX cables, and saves the trouble of 4 separate wires.

+ 5V -> Vcc . For most sensor modules, a 5V regulator is present on the board. If not, CS1-4 pins have 3.3V output
+ GND . Ground  
+ SCL -> SCL . This is a 2 way clock line
+ SDA -> SDA . This is a 2 way data line

## Accelerometer Controlled Robot

This program reads the angle of rotation of the phone around 3 axes using the phone's built in 
accelerometer and magnetometer, and maps the values to 3 servo motors that are a part
of a robotic arm. 

Since rotation values are unitless and range from -1 to 1 , and angle values are from 0-180 for the
servo motors, the program adds 1 and multiplies by 90 to adjust the rotation values for the servos.

{% include blockly_sample.html xml="/assets/blockly/robot.xml" id=1 %}


## Radar with VL53L0X and a Servo Motor

Explore polar plots with this demo.

{% include blockly_sample.html xml="/assets/images/seelab3/blockly/addons/Radar with VL53L0X and a Servo Motor.xml" id=2 %}


## Measure heart beats

{% include blockly_sample.html xml="/assets/images/seelab3/blockly/addons/Measure Heart Rate (MAX30100).xml" id=3 %}


# Examples

{% include blocklygrid.html dir="images/seelab3/blockly/addons"   %}
