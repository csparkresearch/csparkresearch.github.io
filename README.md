# Website for CSpark Research
Made with Jekyll

## Local development
+  sudo gem install bundler:1.16.6
+  bundle install
+  bundle exec jekyll s


## Layouts
Layouts have been defined for various types of pages. Some front matter needs to be specified for them to render correctly
+ blog : Layout for blog posts stored in _posts . file names should be of the format year-mm-dd-some-title.md

  + Title, description, cover image, author, and summary are mandatory.
  + author must be defined in _data/authors.yml if not already defined
  + show-toc option automatically generates a table of contents in the right sidebar
  + category will define the url. the following example will make `csparkresearch.in/expeyes17/sound/some-title.html`
  + Please specify at least one category.
  + math: true . Use this only if you are using LateX style math equations enclosed in $ symbols, or $$ symbols. Includes MathJax

```
---
layout: blog
title: Resonance of Piezo
description: Measure the frequency response of piezo buzzers using Bode plots
cover: /assets/blog/screenshots/sound-beats.png
author: jithin
summary: |
  The resonance frequecy of the Piezo disc supplied with <a href='/expeyes17' target='_blank'>ExpEYES</a> is around 3500 Hz. It could vary from unit to unit,
  so as you move away from that frequency, the loudness will also decrease. This can be studied by measuring the amplitude of the
  sound made by the piezo at different frequencies.
  
show-toc: true
tags: [microphone,piezo,frequency response]
pins: [WG,A1,MIC]
category: [expeyes17, sound]
math: true
---

## Section title
+ point one
+ bullet two
  + nested bullet starts with double space
An equation : $T = 2 * \pi * \sqrt\frac{m}{k}$
```

+ semantic : A layout for a product page with a title, tagline, and optional header image
```
---
layout: semantic
title: "Gamma Spectrometer"
tagline: "Portable USB powered Gamma spectrometer"
header: assets/images/gamma/banner.jpg
banner: assets/images/kuttypy/cover.jpg
share-img: assets/images/gamma/gamma_spectrum.png
show-toc: true
---


Your content goes here...

## Section 1
{% include maketable.html publist=site.data.publications filter="GammaSpec" title="Publications"   color="green" %}

You can also include html code directly
<img class="ui image fluid rounded lightbox" src="/assets/images/gamma/coincidence.jpg"/>


```

## Include files

A host of include files have been written to facilitate html generation from data files stored in _data directory.
these are present in _includes, and can be used in the source files written in markdown format (.md)

+ maketabs.html : Creates accordions populated from a yml file
```
{% include maketabs.html data=site.data.home.topics title="More Information"%}
```
+ swipe.html : Creates sliding banner based on swiperui
```
{% assign swipe = site.data.galleries[page.swipe] %}
```
+ logos.html : Creates a 3 row swiping gallery from logo files . refer to _data/galleries.yml to understand the logos array structure
```
{% include logos.html swipe=site.data.galleries.logos title="Wide Presence" %}
```

+ maketable.html : Creates a list of publications from _data/publications.csv . It can be optionally filtered by product .
```
{% include maketable.html publist=site.data.publications filter="GammaSpec" title="Publications"   color="green" %}
```

+ youtube.html : Embed a fluid width youtube video by specifying a title and its ID (from the URL : https://www.youtube.com/watch?v=CIGj6_immaQ)
```
{% include youtube.html title="ExpEYES on Raspberry Pi" id="CIGj6_immaQ" %}
```

+ animated-banner : displays a header text. animations disabled due to cpu load
+ fancy-menu: Loads contents from array defined in yml file with title,description, image, and optional submenu. Used at the top of the website to show off products and quick links.
+ flow: Creates an animated flowchart similar to fancy-menu. has options to add arrows between blocks.
+ loadgallery: creates an image gallery from an array defined in a yml file



## Made with Semantic-UI

+ Responsive toolkit for site design

