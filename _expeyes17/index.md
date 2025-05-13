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
<a class="ui basic green button" href = "{{ site.data.products.ExpEYES17.ubuntu-eyes }}" target="_blank"><i class="ui info icon"></i>Old eyes17 deb install file </a>

<br>
<div class="ui pink fluid segment">
<a class="ui basic pink button" href = "/installers/install-via-pip.html" target="_blank"><i class="ui info icon"></i> Installing Via Pip </a> : Click to view detailed instructions
<p markdown="1">
Pip install is the fastest way to obtain the latest files on windows. [You will need Python3.10](https://www.python.org/downloads/release/python-3100/)  pre installed
</p>
<p markdown="1">

```py -3 -m pip install --upgrade pip```
<br>
```py -3 -m pip install eyes17```
</p>
<p markdown="1">
On Windows you Might also require [Windows Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

</p>
</div>

[Source code Zip]("/assets/installers/eyes17-4.9.0.zip")


<br>


{% include imagecards.html data=site.data.eyes17.maintopics %}

{% include maketable.html publist=site.data.publications_related filter="ExpEYES" title="Publications"   color="green" %}

{% include imagecards.html data=site.data.eyes17.subtopics %}

{% include resources.html title="User Manuals" device="expeyes17" list=site.data.manuals  color="green" %}

{% include maketabs.html data=site.data.eyes17.topics title="More Information"%}


{% include logo_gallery.html %}

{% include vendors.html data=site.data.eyes17.vendors title="Vendors" %}



{% comment %}
{% include code.html code=site.data.eyes17.scope_example title="Python Library for simple usage: Code example" description="Code to acquire and plot data from the oscilloscope by using matplotlib" %}
{% include experiment_gallery.html %}

{% include animated_gif.html url="images/screencasts/ac-circuits.gif"  title = "An example experiment: RLC phase shifts"%}

{% include animated_gif.html url="images/screencasts/sensor-logger.gif"  title = "Directly record data from sensors"%}
{% endcomment %}

