---
layout: semantic
title: "REMOTE LABS"
tagline: "The CSpark Remote Access Platform"
banner: assets/images/kuttypy/cover.jpg
show-toc: false
show-navigation: false
---

{% include imagecard.html data=site.data.remote.features %}

## Installation via [PyPi](https://pypi.org/project/eyesonline/)
---

The desktop application which will be used by students/owners of the hardware devices must be installed via Pip. Instructors who
simply wish to monitor/control these devices only need to login via the web browser page described in the next section.

Installation of eyesonline requires pip3 which ships with python3, and must be installed.

First upgrade pip to at least version 19.4.0 , and then install eyesonline. On Ubuntu, the following commands may be pasted into a terminal .

```bash
pip3 install -U pip
pip3 install -U eyesonline
eyesonline
```

On windows, this is slightly different

```bash
py -3 -m pip install -U pip
py -3 -m pip install -U eyesonline
eyesonline
```

{% include imagecards.html data=site.data.remote.subtopics title="Resources" %}


