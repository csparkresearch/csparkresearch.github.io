---
layout: semantic
title: "KuttyPy"
tagline: "&mdash; [ Microcontroller Training Utility ] &mdash;"
show-navigation: false
show-toc: true
---
<img src ="assets/images/kuttypy/main.gif" class="ui centered fluid huge bordered image"/>

{% include install.html product="KuttyPy"  %}

<div class="ui blue segment raised" >
<p>The kuttyPy (/kʊtipʌɪ/) Microcontroller training utility allows real-time manipulation of the registers in microcontrollers via a connected computer containing its python library.  setReg and getReg function calls act as a real-time debugging and monitoring utility, and combined with Python's visualization and analytical utilities, this approach has immense pedagogical potential for beginners. </p>
<p markdown="1">The kuttyPy hardware is an ATMEGA32 microcontroller development board developed by the [ExpEYES](http://expeyes.in) project, and is currently supported by this software. It contains the kuttyPy firmware, but can also be used to run other programs via its bootloader.</p>
</div>

{% include imagecards.html data=site.data.kuttypy %}

### Installation from source (License: MIT)
---

+ Install dependencies (Ubuntu 18.04)

```shell
sudo apt-get install python3 python3-serial python3-pyqt5 python3-pyqt5.qtsvg
```
+ Clone the repository, and run the file

```shell
git clone https://github.com/csparkresearch/kuttypy-gui
cd kuttypy-gui
python3 KuttyPyGUI.py
```



---
Developed by Jithin B.P @CSpark Research, 2018.  
Special thanks to Georges Khazanadar for Debianizing efforts.
