---
layout: interactive_layout
title: "Online Resources"
description: "Tap The Cards to Download and Try Out New Experiments"
show-toc: false
smooth-scroll: true
---



## Tutorials For Block Based Coding
---

<div class="ui very relaxed list">

{% assign allposts = site.blocks | sort: 'position' %}

  {% for post in allposts %}
  <div class="item">
    <img class="ui avatar image" src="{{post.thumb}}">
    <div class="content">
      <a class="header" href="{{post.url}}">{{post.title}}</a>
      <div class="description">{{post.description}}</div>
    </div>
  </div>
  {% endfor %}

</div>

---


## Tutorials For Interactive Schematics
---

![](/assets/images/seelab3/int/Interactive Schematics.jpg){:class="ui image fluid"}

Interactive schematics are circuit diagrams in svg format with labels for voltmeters(A1, A2..), outputs(PV1, WG..) , equations(:EQ:A3/1000 .. )
placed at appropriate positions. The svg file metadata has a description field where one can enter instructions.

The application opens this svg file and introduces widgets at the marked positions. For example, any text called `PV1` is replaced by an interactive block
which can be used to adjust the value of PV1 output voltage as shown in the picture above. Touch and drag up/down on the block to adjust. Similarly, equations are also calculated
and displayed.

It is much more powerful, and detailed instructions can be found in the following blog post

[Create interactive schematics](seel3/android/interactive-schematics.html)


# All Examples
---

## Example Programs

Tap the cards to launch these with the SEELab3 App

{% include blocklygrid.html dir="images/seelab3/blockly"   %}


##  Interactive Schematic Examples

Click on the Card to download and launch the schematic with the SEELab3 app.

{% include imggridauto.html dir="images/seelab3/int"  %}

