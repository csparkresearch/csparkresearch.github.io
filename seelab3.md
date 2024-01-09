---
layout: semantic
title: "SEELab - 3.0"
tagline: "Successor to ExpEYES-17. Multi Purpose Test and Measurement tool"
header: /assets/images/seelabheader.jpg
show-navigation: false
banner: /assets/images/kuttypy/cover.jpg
share-img: assets/images/seelab3/seelab3.jpg
show-toc: true
toctext: |
 <a class="ui small inverted fluid purple right labeled icon button" href="blog"><i class="right arrow icon"></i>Blog</a>
---

<br>
{% include install.html product="SEELab3"  %}
<br>
For Windows you Might also require [Windows Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

<br>
<div class="ui fluid container">
<a class="ui fluid blue animated fade button" href="/contact.html" target="_blank">
	<div class="visible content" >
	<i class="ui cart icon"></i>
	Buy Now
	</div>
	<div class="hidden content">Reach out via e-mail</div>
</a>
</div>


{% include imagecard.html data=site.data.seelab3.features %}

{% include makedocs.html linklist=site.data.eyesdocs title="Section Wise Documentation"   color="green" %}


<br>

![](/assets/images/seelab3/header.jpg){:class="ui image fluid"}

<br>


## Android App
---

Download the fully loaded [SEELab 3 app](https://play.google.com/store/apps/details?id=com.cspark.research.eyes17) from the Play Store to use your device as a portable test and measurement tool. It includes a host of features
ranging from the Oscilloscope and Data loggers , to a Graphical programming interface, and interactive schematics. 

![](/assets/images/seelab3/androidapp.jpg){:class="ui image fluid"}

<br>

## Graphical Programming utility
---

The drag and drop visual programming utility is available both on Desktop as well as android. While on Android it generates the corresponding Javascript code which can be separately edited and executed, the desktop app is Python focused, and generates Python code which can be copied and executed in the IDE.


Watch the Video !

{% include youtube.html id="SBjrNLBqGoE" cover="/assets/images/seelab3/blockdesktop.jpg" %}


{% include imagecard.html data=site.data.seelab3.interactiveschematics %}



# Blog Posts for SEELab3

{% assign allposts = site.categories.seel3 %}

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

{% comment %}
## Visual Programming Examples

Some featured examples that let you create your own programs without writing lines of code. For advanced users, the generated code in either javascript
or Python can be modified in a separate editor.

{% include blocklygrid.html dir="/images/seelab3/blocklythumbs"  %}


## Interactive Schematic Examples

{% include imggrid.html publist=site.data.interactiveschematics  %}

{% endcomment %}

## Compatible with ExpEYES17 software
---

The SEELab3 is fully compatible with the ExpEYES17 desktop software which recognises it based on the version number stored in the hardware.
Some of the ExpEYES17 experiments are listed below, and can be carried out with the SEELab3 as well

{% include imagecards.html data=site.data.seelab3.eyes17topics %}



<a class="ui basic primary button" style="width:300px" href = "/installers/install-via-pip.html" target="_blank"><i class="ui download icon"></i> Pip Installer Instructions</a> 


* e-mail csparkresearch@gmail.com for enquiries. [Contact Us.](contact)
