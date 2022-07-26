---
layout: semantic
title: "SEELab - 3.0"
tagline: "Successor to ExpEYES-17. Coming Soon..."
show-navigation: false
banner: /assets/images/kuttypy/cover.jpg
header: assets/images/seelab3/banner.jpg
share-img: assets/images/seelab3/seelab3.jpg
show-toc: false
---

{% include install.html product="ExpEYES17"  %}
[Previous Installer 6.2.0](https://drive.google.com/open?id=1idoWIyFnbh_wSJkEndi7GfAQryxK5qYN)


[Source Code Link: 4.9.0](/assets/installers/eyes17-4.9.0.zip)

[Installing Via Pip](/installers/install-via-pip.html)

{% include imagecard.html data=site.data.seelab3.features %}


{% include imagecard.html data=site.data.seelab3.interactiveschematics %}

{% include imggrid.html publist=site.data.interactiveschematics  %}


{% include youtube.html id="uUj5LMVkWGs" title="Tutorial : Creating interactive schematics" %}


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


* e-mail csparkresearch@gmail.com for enquiries. [Contact Us.](contact)
