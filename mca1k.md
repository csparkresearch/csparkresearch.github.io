---
layout: semantic
title: "Multi-Channel Analyzer"
tagline: "1K and 4K Multi-Channel Analyzers"
show-navigation: false
banner: assets/images/kuttypy/cover.jpg
share-img: assets/images/mca_pic.png
show-toc: true
---

<div class="ui blue segment raised" >
<p>Multi-Channel Analyzers sort gaussian pulses into channels based on their pulse heights, in order to generate a spectrum. Our compact, USB powered MCAs and accompanying cross-platform, open-source software enables easy visualization and analysis of pulse outputs from various spectrometers. </p>
<a href="cnspec" class="ui right floated inverted green button">Software link</a>
<h2><div class="ui hidden divider"></div></h2>
</div>


{% include install.html product="MCA-1K" %}

{% include imagecards.html data=site.data.mca.subtopics %}

{% include maketabs.html data=site.data.mca.topics title="More Information"%}

{% include code.html code=site.data.mca.offline_example title="Python Library for flexible operation: Code example" description="Dependencies: Matplotlib(for plotting) , Scipy(For fitting)" %}
{% include imagecard.html data=site.data.mca.offline_result %}

<h4 class="ui horizontal divider left aligned">Terminal output [Centroid, FWHM]</h4>

```bash
Gaussian+low energy tail Fit :  804.5779218431603 5.52159634760166
Gaussian Fit :  550.0967122469116 7.927848067452287
```

* e-mail csparkresearch@gmail.com for enquiries
