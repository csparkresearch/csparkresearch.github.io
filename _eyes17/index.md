---
layout: semantic
title: "ExpEYES-17"
tagline: "Your Lab @ Home ..."
headerimage: /assets/images/eyes17/expeyesheader.jpg
---


{% include imagecards.html data=site.data.eyes17.subtopics %}
{% include install.html product="ExpEYES17"  %}

{% include maketabs.html data=site.data.eyes17.topics title="More Information"%}

{% include logos.html swipe=site.data.galleries.logos title="Clients" %}

{% include vendors.html data=site.data.eyes17.vendors title="Vendors" %}


{% comment %}
{% include code.html code=site.data.eyes17.scope_example title="Python Library for simple usage: Code example" description="Code to acquire and plot data from the oscilloscope by using matplotlib" %}
{% include experiment_gallery.html %}

{% include animated_gif.html url="images/screencasts/ac-circuits.gif"  title = "An example experiment: RLC phase shifts"%}

{% include animated_gif.html url="images/screencasts/sensor-logger.gif"  title = "Directly record data from sensors"%}
{% endcomment %}
