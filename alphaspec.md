---
layout: semantic
title: "Alpha Spectrometer"
tagline: Compact alpha spectrometer with integrated 1K MCA
show-navigation: false
show-toc: true
share-img: /assets/images/alpha/alpha_wide.jpg
headerimage: assets/images/alpha/alpha_setup_source.jpg
banner: assets/images/alpha/cover.jpg
---


{% include imagecard.html data=site.data.alpha.features %}

{% include install.html product="AlphaSpec-1K"  %}


<div class="ui items">
	<div class="item">
		<div class="content">
			<div class="description">
			{% include maketable.html publist=site.data.publications filter="AlphaSpec1K" title="Publications" color="green" %}
			</div>
		</div>
		<div class="ui segment raised middle aligned" >
			<a class="ui ribbon pink label">Cover feature</a>
			<div class="ui centered image medium photocard">
				<img src="/assets/images/physedu_alpha.jpg" alt="On the cover page of Physics Education" class="ui image">
			</div>
		</div>

	</div>
</div>

<div class="ui clearing hidden divider"></div>




{% include imagecards.html data=site.data.alpha_features title="Experiments" %}

{% include maketabs.html data=site.data.alpha.topics title="More Information"%}


{% include vr.html path="/assets/multipixel" width=801 height=500 frames=36 start=18 title="MultiPixel alpha Detector"  %}

* e-mail csparkresearch@gmail.com for enquiries. [Contact Us](contact)
