---
layout: product
title: "Geiger Counter"
tagline: "&mdash; Not Available Yet &mdash;"
show-navigation: false
---

{% include fancy-menu.html  
imagelist = site.data.fancy-menu-nuclear
%}


### Geiger Counter
---

{% include installers.html  product="GMCounter"%}

<img src="https://res.cloudinary.com/cspark/image/upload/v1491729737/gmcounter/GM_Pulses.gif"/>

+ Compact unit
+ Software designed for Linux/Windows
+ 12 Volt adapter
+ High Voltages up to 1200V
+ Avalanche begins at around 1000V
+ Signals accessible for monitoring on an oscilloscope

+ Direct access via a serial monitor. Command list
	+ TIME 10 ; Set 10 seconds window for counting
	+ START ; start the counter
	+ TIME? ; elapsed time
	+ STOP ; stop the GM Counter . Automatically stops on timeout.
	+ VOLTS 500; set 500 volts
	+ VOLTS? ; read voltage
	+ COUNT? ; read total counts and elapsed time in mS
	+ V? ; Short version 
	+ VER? ; read version string "cspark research GM Counter x.x"

+ Software includes a built-in Python interpreter for programmable acquisition sequences.
	+ Example code provided for acquiring and plotting counts in a 60 second window for voltages ranging from 200V to 1000V.

