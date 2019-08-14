---
layout: blog
title: "BLOG"
description: "Write-ups on various applications"
show-toc: true
follow: true
smooth-scroll: true
---

{% assign allposts = site.categories.kuttypy | concat: site.categories.manufacturing | concat: site.categories.expeyes17  | concat: site.categories.seelablet %}

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
