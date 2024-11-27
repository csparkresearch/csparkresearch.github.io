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


## On windows

### Install Device Drivers

Install the mcp2200 driver either from [Microchip](https://ww1.microchip.com/downloads/en/DeviceDoc/MCP2221_Windows_Driver_2021-02-22.zip)

Or from these links
+ [64 Bit Version](/assets/installers/mcp64.exe)
+ [32 Bit Version](/assets/installers/mcp32.exe)


### Install Python 3
Download python3 and install.

[Python Download Page](https://www.python.org/downloads/release/python-370/)

Don't forget to add PYTHON to the global path, and also select `pip` during installation. 

### Install eyes17 from pypi

Upgrade pip first.

```shell
py -3 -m pip install --upgrade pip

py -3 -m pip install eyes17
```

you can also try the new `seelab_examples` pip package which will also install eyes17lib for you. After `pip install seelab_examples`, you can execute it using the `seelab_examples` command on linux, or `py -3 -m seelab_examples` on windows. `python3 -m seelab_examples` might also work in Windows.

If you see a missing path error as shown below

![](/assets/blog/screenshots/envvar.jpeg){:class="ui image fluid centered lightbox"}

Add the path in the error message to the environment variables as shown in the picture below.
Open a new cmd window before running the `eyes17` command which is now available.

![](/assets/blog/screenshots/envvar_config.jpeg){:class="ui image fluid centered lightbox"}


### Launch the program
```
eyes17
```

### Install library for using with your own code

```
py -3 -m pip install eyes17lib
```


### Optional Bundled Installer

There is a bundled installer available which includes the python interpreter, dependencies, as well as the expeyes code.
However, this is not recommended due to difficulties in supporting multiple windows versions. It has been tested on Windows 11
[Download Link](https://drive.google.com/file/d/1KJI4NL4Bt_N5PCWNobnsCTaU3i-AM3-9/view)



## On MAC

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


## Sample Pip installation log

```bash
(test) HP-Victus:~/Downloads$ pip3 install eyes17==1.0.27
Collecting eyes17==1.0.27
  Downloading eyes17-1.0.27-py3-none-any.whl (7.6 MB)
     |████████████████████████████████| 7.6 MB 3.9 MB/s 
Collecting pyqtwebengine
  Downloading PyQtWebEngine-5.15.6-cp37-abi3-manylinux1_x86_64.whl (230 kB)
     |████████████████████████████████| 230 kB 2.8 MB/s 
Collecting pyqtgraph
  Using cached pyqtgraph-0.12.4-py3-none-any.whl (995 kB)
Collecting pyserial
  Using cached pyserial-3.5-py2.py3-none-any.whl (90 kB)
Collecting numpy
  Downloading numpy-1.23.3-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (17.1 MB)
     |████████████████████████████████| 17.1 MB 26.6 MB/s 
Collecting scipy
  Downloading scipy-1.9.1-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (43.4 MB)
     |████████████████████████████████| 43.4 MB 15.3 MB/s 
Collecting PyQt5
  Using cached PyQt5-5.15.7-cp37-abi3-manylinux1_x86_64.whl (8.4 MB)
Collecting matplotlib
  Downloading matplotlib-3.6.0-cp38-cp38-manylinux_2_12_x86_64.manylinux2010_x86_64.whl (9.4 MB)
     |████████████████████████████████| 9.4 MB 113.4 MB/s 
Collecting PyQtWebEngine-Qt5>=5.15.0
  Downloading PyQtWebEngine_Qt5-5.15.2-py3-none-manylinux2014_x86_64.whl (67.5 MB)
     |████████████████████████████████| 67.5 MB 18.3 MB/s 
Collecting PyQt5-sip<13,>=12.11
  Using cached PyQt5_sip-12.11.0-cp38-cp38-manylinux1_x86_64.whl (361 kB)
Collecting PyQt5-Qt5>=5.15.0
  Using cached PyQt5_Qt5-5.15.2-py3-none-manylinux2014_x86_64.whl (59.9 MB)
Collecting pyparsing>=2.2.1
  Using cached pyparsing-3.0.9-py3-none-any.whl (98 kB)
Collecting kiwisolver>=1.0.1
  Downloading kiwisolver-1.4.4-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.whl (1.2 MB)
     |████████████████████████████████| 1.2 MB 24.3 MB/s 
Collecting contourpy>=1.0.1
  Downloading contourpy-1.0.5-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (295 kB)
     |████████████████████████████████| 295 kB 20.2 MB/s 
Collecting packaging>=20.0
  Using cached packaging-21.3-py3-none-any.whl (40 kB)
Collecting python-dateutil>=2.7
  Using cached python_dateutil-2.8.2-py2.py3-none-any.whl (247 kB)
Collecting cycler>=0.10
  Using cached cycler-0.11.0-py3-none-any.whl (6.4 kB)
Collecting pillow>=6.2.0
  Using cached Pillow-9.2.0-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (3.1 MB)
Collecting fonttools>=4.22.0
  Downloading fonttools-4.37.2-py3-none-any.whl (959 kB)
     |████████████████████████████████| 959 kB 18.9 MB/s 
Collecting six>=1.5
  Using cached six-1.16.0-py2.py3-none-any.whl (11 kB)
Installing collected packages: PyQtWebEngine-Qt5, PyQt5-sip, PyQt5-Qt5, PyQt5, pyqtwebengine, numpy, pyqtgraph, pyserial, scipy, pyparsing, kiwisolver, contourpy, packaging, six, python-dateutil, cycler, pillow, fonttools, matplotlib, eyes17
Successfully installed PyQt5-5.15.7 PyQt5-Qt5-5.15.2 PyQt5-sip-12.11.0 PyQtWebEngine-Qt5-5.15.2 contourpy-1.0.5 cycler-0.11.0 eyes17-1.0.27 fonttools-4.37.2 kiwisolver-1.4.4 matplotlib-3.6.0 numpy-1.23.3 packaging-21.3 pillow-9.2.0 pyparsing-3.0.9 pyqtgraph-0.12.4 pyqtwebengine-5.15.6 pyserial-3.5 python-dateutil-2.8.2 scipy-1.9.1 six-1.16.0

```






