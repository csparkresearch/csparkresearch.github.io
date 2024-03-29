---
layout: semantic
title: "ExpEYES-17"
tagline: "Your Lab @ Home ..."
share-img: /assets/images/eyes17/eyes_cover.jpg
header: /assets/images/eyes17/expeyesheader.jpg
banner: /assets/images/kuttypy/cover.jpg

show-toc: true
toctext: |
 <a class="ui small inverted fluid purple right labeled icon button" href="blog"><i class="right arrow icon"></i>Blog</a>
---

{% include install.html product="ExpEYES17"  %}


<a class="ui basic pink button" href = "/assets/installers/eyes17-4.9.0.zip" target="_blank"><i class="ui download icon"></i> Source code Zip </a>
<br>
<a class="ui basic green button" target="_blank" href = "https://eyes17lib.readthedocs.io/en/latest/" target="_blank"><i class="ui book icon"></i> Python Library Docs </a>
<br>

<a class="ui basic primary button" style="width:300px" href = "https://drive.google.com/file/d/1zqFQzjDyJEFbQ0OfOQ2DNQUUXBl8iELh/view?usp=sharing" target="_blank"><i class="ui download icon"></i> Windows 11 Bundled Installer (5.1.0)</a> You Might also require [Windows Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)
<br><a class="ui basic primary button" style="width:300px" href = "https://drive.google.com/open?id=1IYXZRH_apYidmqbTZzVDGYsJy2dK4imJ" target="_blank"><i class="ui download icon"></i> Previous Windows Installer</a>



[Installing Via Pip](/installers/install-via-pip.html)

{% include imagecards.html data=site.data.eyes17.maintopics %}

{% include maketable.html publist=site.data.publications_related filter="ExpEYES" title="Publications"   color="green" %}

{% include imagecards.html data=site.data.eyes17.subtopics %}

{% include resources.html title="User Manuals" device="expeyes17" list=site.data.manuals  color="green" %}

{% include maketabs.html data=site.data.eyes17.topics title="More Information"%}


{% include logos.html swipe=site.data.galleries.logos title="Clients" %}

{% include vendors.html data=site.data.eyes17.vendors title="Vendors" %}



{% comment %}
{% include code.html code=site.data.eyes17.scope_example title="Python Library for simple usage: Code example" description="Code to acquire and plot data from the oscilloscope by using matplotlib" %}
{% include experiment_gallery.html %}

{% include animated_gif.html url="images/screencasts/ac-circuits.gif"  title = "An example experiment: RLC phase shifts"%}

{% include animated_gif.html url="images/screencasts/sensor-logger.gif"  title = "Directly record data from sensors"%}
{% endcomment %}

