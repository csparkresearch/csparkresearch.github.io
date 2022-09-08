---
layout: blog
title: Build deb packages with debuild 
description: Package eyes17 for debian based systems
cover: /assets/blog/photographs/fullwave.jpg
author: jithin
summary: hmmm.
show-toc: true
tags: 4148 3V3
category: [seelab3]
---

## dependencies


sudo apt install devscripts lintian


## Process

To prepare a deb package, you can use the command `debuild`, which
should do all the work in one call. But first, you need the orig.tar.gz file

Edit the debian/changelog file to add a new version entry.

```bash
cd ..

./mkOrigTar.py expeyes-programs

cd expeyes-programs

debuild
```
