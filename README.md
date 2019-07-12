# Website for CSpark Research
Based on Jekyll

## Include files

A host of include files have been written to facilitate html generation from data files stored in _data directory.
these are present in _includes, and can be used in the source files written in markdown format (.md)

+ maketabs.html : Creates accordions populated from a yml file
```
{% include maketabs.html data=site.data.home.topics title="More Information"%}
```

+ animated-banner : displays a header text. animations disabled due to cpu load
+ fancy-menu: Loads contents from array defined in yml file with title,description, image, and optional submenu. Used at the top of the website to show off products and quick links.
+ flow: Creates an animated flowchart similar to fancy-menu. has options to add arrows between blocks.
+ loadgallery: creates an image gallery from an array defined in a yml file
+ row-gallery: scroll to the bottom of the website where you'll find this in action. not mobile friendly.
+ navigation: Main menu which slightly collapses on scrolling.



## Made with Semantic-UI

+ Responsive toolkit for site design

Was previously based on: [https://jekyller.github.io/online-cv](https://jekyller.github.io/online-cv)

