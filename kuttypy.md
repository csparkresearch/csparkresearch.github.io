---
layout: semantic
title: "KuttyPy"
tagline: "ATMEGA32 Microcontroller Training Utility"
show-navigation: false
show-toc: true
share-img: assets/images/kuttypy/robot.jpeg
banner: /assets/images/kuttypy/cover.jpg
---

{% comment %}
<div class="ui center aligned container" style="max-width: 700px !important;">
<video width="100%" autoplay loop muted playsinline>
  <source src="/assets/images/kuttypy/main.mp4" type="video/mp4" />
  <img src="/assets/images/kuttypy/main.gif" title="Your browser does not support the <video> tag">
</video>
</div>
{% endcomment %}
<img src="/assets/images/kuttypy/main.gif" class="ui centered image">


{% include install.html product="KuttyPy"  %}
[Previous Installer 6.2.0](https://drive.google.com/uc?export=download&id=1t2l3vnjaX5d9jSbqskG5IiGGyiyR8NrK)

<div class="ui blue segment raised" >
<p>The kuttyPy (/kʊtipʌɪ/) Microcontroller training utility allows real-time manipulation of the registers in microcontrollers via a connected computer containing its python library.  setReg and getReg function calls act as a real-time debugging and monitoring utility, and combined with Python's visualization and analytical utilities, this approach has immense pedagogical potential for beginners. </p>
<p markdown="1">The kuttyPy hardware is an ATMEGA32 microcontroller development board developed by the [ExpEYES](http://expeyes.in) project, and is currently supported by this software. It contains the kuttyPy firmware, but can also be used to run other programs via its bootloader.</p>
</div>

{% include imagecards.html data=site.data.kuttypy %}


## Installation from pypi (License: MIT)
---

### Windows
```shell
py -3 -m pip install kuttypy
kuttypy
```
### Linux
```shell
pip3 install kuttypy
kuttypy
```


Connect the hardware, and import the library. Import will throw an error if the hardware is not detected


```python
from kuttyPy import *
getReg('PINC')
readADC(0)
```

To view the full list of ATMEGA32 registers
```
print(REGISTERS.ATMEGA32_REGISTERS)
```


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


{% include youtube.html id="9xXyL25D2jo" title="KuttyPyPlus : Pick And Place Assembly" %}


---
Developed by Jithin B.P @CSpark Research, 2018.  
Special thanks to Georges Khazanadar for Debianizing efforts.
