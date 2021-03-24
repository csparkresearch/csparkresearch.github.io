---
layout: semantic
title: "ExpEYES-17"
tagline: "Your Lab @ Home ..."
share-img: /assets/images/eyes17/eyes_cover.jpg
header: /assets/images/eyes17/expeyesheader.jpg
show-toc: true
toctext: |
 <a class="ui small inverted fluid purple right labeled icon button" href="blog"><i class="right arrow icon"></i>Blog</a>
---

{% include install.html product="ExpEYES17"  %}
[Previous Installer 5.0.0](https://drive.google.com/open?id=1X5bQdplyuAFfaT9TCWafDyUusjiHwzjT)

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

