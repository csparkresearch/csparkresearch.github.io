---
layout: semantic
title: "GM Counter"
tagline: "A portable Geiger-Muller counter with USB connectivity"
banner: assets/images/kuttypy/cover.jpg
---

{% include imagecards.html data=site.data.gm.topics %}

{% include install.html  product="GMCounter"%}

### Installing on Ubuntu
---
Download the .deb file and install it using gdebi package manager.
 You can also install it from the terminal
```bash
sudo gdebi gmc-1.0.0.deb
```

It will now be listed as 'GM Counter GUI' , and can also be launched from the terminal by executing the command:
```bash
gmcounter
```

### Using the Python Library
---

```python
import time
from gmcounter import *
print(get_version()) # returns version
getCount() #Returns counts, time, time(ms)

query('VOLTS 600')	#Set 600 Volts. Please note that using an external multimeter will perturb the voltage reading and cause it to sag.
print(query('VOLTS?')) # Read the voltage . query can be used to execute any command listed in the table above
query('TIME 20')	#Set 20 seconds window for counting
query('START') # Start counting . 

time.sleep(20) # wait 20 seconds
print(query('COUNT?')) # Read the total event counter, and elapsed time.


```

Please read the user manual for further details
