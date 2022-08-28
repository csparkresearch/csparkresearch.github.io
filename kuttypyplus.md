---
layout: semantic
title: "KuttyPy Plus"
tagline: "ATMEGA32 Microcontroller Training Utility"
show-navigation: false
show-toc: true
share-img: assets/images/kuttypy/robot.jpeg
banner: /assets/images/kuttypy/cover.jpg
---


{% include install.html product="KuttyPy"  %}

[Previous Installer 6.2.0](https://drive.google.com/uc?export=download&id=1t2l3vnjaX5d9jSbqskG5IiGGyiyR8NrK)

[Schematic PDF](/assets/kuttypy-smd.pdf)

[Read The Docs](https://kuttypy.readthedocs.io/en/latest/)



<div class="ui blue segment raised" >
<p>The kuttyPy (/kʊtipʌɪ/) Microcontroller training utility allows real-time manipulation of the registers in microcontrollers via a connected computer containing its python library.  setReg and getReg function calls act as a real-time debugging and monitoring utility, and combined with Python's visualization and analytical utilities, this approach has immense pedagogical potential for beginners. </p>
<p markdown="1">The kuttyPy Plus hardware is an ATMEGA32 microcontroller development board developed by the [ExpEYES](http://expeyes.in) project, and is currently supported by this software. It contains the kuttyPy firmware, but can also be used to run other programs via its bootloader.</p>
</div>

{% include imagecards.html data=site.data.kuttypyplus %}



## Android Application
---

Supports a variety of tasks such as IO manipulation, ADC reading, I2C sensor data logging, 
C compile and upload IDE, blockly based graphical programming etc

![](/assets/images/kuttypy/kuttypyandroidcollage.jpg){:class="ui image fluid"}


{% include youtube.html id="9xXyL25D2jo" title="KuttyPyPlus : Pick And Place Assembly" %}


{% include imagecards.html data=site.data.kuttypypluspartb %}


# Blog Posts for KuttyPy

{% assign allposts = site.categories.kuttypy %}

<div class="ui clearing hidden divider"></div>	
<div class="ui container">
	<div class="ui relaxed divided items">
	{% for post in allposts %}
	<div class="item link">
	  <a class="ui medium image raised red segment" href="{{post.url}}">
		<img src="/assets/images/300x170.png" class="ui image lazy" data-src="{{ post.cover }}">
	  </a>
	  <div class="content">
		<h1 class="ui header small" id="{{post.title}}"><a href="{{post.url}}" class="ui dividing header teal"><i class="settings icon"></i>{{post.title}}</a></h1>
		<div class="meta">
			    {% for cat in post.category %}<a>{{cat}}/</a>{% endfor %}
		</div>
		<div class="description">
		  {{post.summary}}
		</div>
		<div class="extra">
		  <div>{{ post.date | date: '%B %d, %Y' }}</div>
			{% assign author = site.data.authors[post.author] %}
			<!--
			<a class="ui basic image large label right floated">
			  <img src="{{author.photo}}">
			  {{author.name}}
			</a>
			-->
		</div>
	  </div>
	</div>
	<div class="ui clearing hidden divider"></div>	
	{% endfor %}
	</div>
</div>



## Using with Python
---

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
