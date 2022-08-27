---
layout: blog
title: Build deb packages with debuild 
description: Package eyes17 for debian based systems
cover: /assets/blog/photographs/fullwave.jpg
author: jithin
summary: hmmm.
show-toc: true
tags: 4148 3V3
category: [expeyes17]
---

## dependencies

To prepare a deb package, you can use the command `debuild`, which
should do all the work in one call.

sudo apt install devscripts

debuild

```
This package has a Debian revision number but there does not seem to be
an appropriate original tar file or .orig directory in the parent directory;
(expected one of expeyes_4.4.3+dfsg.orig.tar.gz, expeyes_4.4.3+dfsg.orig.tar.bz2,
expeyes_4.4.3+dfsg.orig.tar.lzma,  expeyes_4.4.3+dfsg.orig.tar.xz or expeyes-programs.orig)
continue anyway? 
```

## got this from stackoverflow
https://askubuntu.com/a/675211

dpkg-buildpackage -b -rfakeroot -us -uc
