---
layout: blog
title: Installing via PIP
description: Instructions on installing eyes17 software from Pip
cover: /assets/blog/screenshots/envvar_config.jpeg
author: jithin
summary: The ExpEYES17, SEELab software can be installed via pypi. Follow these instructions for Windows which can be tricky.
show-toc: true
tags: Electronics ExpEYES17 SEELab3 PIP
category: [installers]
---

## Install Python 3

### On windows
Download python3 and install.
Don't forget to add PYTHON to the global path, and also select `pip` during installation.

```shell
py -3 -m pip install eyes17`
```

If you see a missing path error as shown below

![](/assets/blog/screenshots/envvar.jpeg){:class="ui image fluid centered lightbox"}

Add the path in the error message to the environment variables as shown in the picture below.
Open a new cmd window before running the `eyes17` command which is now available.

![](/assets/blog/screenshots/envvar_config.jpeg){:class="ui image fluid centered lightbox"}


You also need pyqtwebengine for viewing the help files. Install via pip
```
py -3 -m pip install pyqtwebengine
```

## Launch the program
```
eyes17
```

## Install library for using with your own code

```
py -3 -m pip install eyes17lib
```



### On MAC

You'll need HomeBrew

Since python is a cross-platform language, running the code is possible on several Operating systems as long as the dependencies are present.

For MAC, you will need to install homebrew
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Using brew, install python3, and pip

```bash
brew install python3
brew install pip
```

Use Pip to install python dependencies

```python
pip3 install pyqt5
pip3 install PyQtWebEngine
pip3 install scipy
pip3 install pyqtgraph
pip3 install pyserial    
```
now, run main.py from the eyes17 source code zip. The output should resemble:
```
Qt version: 5.13.0; Python version: 3.7.3 (v3.7.3:ef4ec6ed12, Mar 25 2019, 16:52:21) 
[Clang 6.0 (clang-600.0.57)]
Darwin-17.3.0-x86_64-i386-64bit
```




