---
layout: bootstrap_seelab
title: SEELab 3
description: "Your Lab @ Home - Multi Purpose Test and Measurement tool"
show-navigation: false
share-img: /assets/images/seelab3/seelab-cover.jpg
banner: /assets/images/seelab3/seelab-cover.jpg
favicon: favicon.png
docs: https://eyes17lib.readthedocs.io/en/latest/
show-avatar: true
---


{% assign product = site.data.products["SEELab3"] %}


<section id="home" data-parallax="scroll" data-image-src="assets/images/seelab3/bgdark2.jpg" data-natural-width=2600 data-natural-height=1463>

    <div class="home-content">        

        <div class="ui contents" style="padding-top:10rem;">                     

            <img src="assets/images/seelab3/seelab_cover_transparent.webp" 
                data-src-desktop="assets/images/seelab3/seelab_cover_transparent.webp"
                data-src-mobile="assets/images/seelab3/seelabnobg_mobile.webp"
                class="responsive-image">

            <div class="buttons" >
                <a href="#topdownloads" class="ui green outline button smoothscroll">
                <i class="left download icon"></i>
                Download
                </a>

                <div class="ui huge relaxed horizontal list" style="padding-left:1rem;">
                    <div class="item">
                        <div class="content">
                            <a style="color:magenta" href="https://instagram.com/csparkresearch" target="_blank"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                        <a style="color:red" href="https://www.youtube.com/playlist?list=PLZY1OXNn8xkkXhq3xa32-X_m7yRx8Kl5j" target="_blank"><i class="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                        <a style="color:white" href="https://twitter.com/csparkresearch?lang=en" target="_blank"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                        <a style="color:blue" href="https://twitter.com/csparkresearch?lang=en" target="_blank"><i class="fa fa-facebook-square"></i></a>
                        </div>
                    </div>
                </div>


            </div>                                         

        </div>


    </div>  




</section> 

<section id="about" style="padding-top:5rem;">

    <div class="row about-intro">
        <div class="col-four">
            <h1 class="intro-header" data-aos="fade-up">Your Lab @ Home...</h1>

                <div class="ui fluid container">
                    <a href="{{product.onlinedocs}}" target="_blank" class="ui compact labeled primary inverted icon button mybutton">
                        <i class="chrome icon"></i>
                        Docs @ Scischool.in
                    </a>

                    <a href="{{product.brochure}}" target="_blank" class="ui compact labeled inverted pink icon button mybutton diagonal-rainbow ">
                        <i class="ui file icon"></i>
                        PDF Brochure
                    </a>
                </div>
                <div class="ui fluid container">
                    <a style="margin-top:1em !important;" href="/seelab3-technical" target="_blank" class="ui compact  labeled inverted violet icon button mybutton">
                        <i class="ui settings icon"></i>
                        Technical specs
                    </a>
                    <!-- Purchase button that opens modal -->
                    <a style="margin-top:1em !important;" class="ui compact labeled yellow icon button mybutton" onclick="$('#purchaseModal').modal('show');">
                        <i class="ui cart icon"></i>
                        Purchase
                    </a>
                </div>


        </div>
        <div class="col-eight">
            <h5 class="lead text-justify" data-aos="fade-up">
                SEELab3 is a versatile multi-purpose test and measurement tool, designed as the successor to the popular ExpEYES-17 platform. It brings a complete laboratory to your home or classroom in a compact, affordable package.<br>

The device interfaces with your PC or Android phone through USB, providing oscilloscope functionality, signal generation, data logging capabilities, and support for numerous sensors. With its Python programmable interface and intuitive graphical applications, SEELab3 makes scientific experimentation and electronics exploration accessible to students, hobbyists, and professionals alike.
            </h5>
        </div>                       
    </div>
    

    <div class="row about-intro" id="topdownloads">
    <div class="ui raised yellow segment">
        <div class="ui relaxed divided items">
            <div class="item">
                <div class="content">
                    <a class="header" href = "#download">Downloads for {{product.name}}</a>
                    <div class="description">
                        {{product.installdescription}}				
                    </div>

                    <div class="extra">
                        <a class="ui right floated animated fade primary  button small" href="{{product.user-manual}}"><div class="visible content" >User Manual</div><div class="hidden content"><i class="right download icon"></i>Download</div></a>


                        <a class="ui right floated animated fade primary  button small" target="_blank" href="{{product.apidocs}}"><div class="visible content" >Library Docs</div><div class="hidden content"><i class="right book icon"></i>Read the docs</div></a>


                        <a class="ui right floated animated fade orange  button small" href="{{product.source}}"><div class="visible content" >Source</div><div class="hidden content">Get Zip</div></a>


                        <div class="ui buttons small">
                        <a class="ui positive animated fade button" href="{{product.ubuntu}}"><div class="visible content" >Ubuntu</div><div class="hidden content">Deb<i class="ui right linux icon"></i></div></a>
                        <div class="or"></div>
                        <a class="ui negative animated vertical button" href="{{product.windows}}"><div class="visible content" >Windows(Legacy)</div><div class="hidden content"><i class="ui windows icon"></i>Exe</div></a>
                        <div class="or"></div>
                        <a class="ui negative animated vertical button" href="{{product.windowsnew}}"><div class="visible content" >Windows(New)</div><div class="hidden content"><i class="ui windows icon"></i>Exe</div></a>

                        <div class="or"></div>
                        <a class="ui color blue animated fade button" href="{{product.android}}"><div class="visible content" >Android</div><div class="hidden content">Play Store</div></a>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</section>

<section id="pricing2" data-parallax="scroll" data-image-src="assets/kpimages/bg2.jpg" data-natural-width=1334 data-natural-height=751>

    <div class="row">

        <div class="ui three stackable link cards">

            <div class="card randomcard">
                <div class="image photocard">
                <img src="assets/images/seelab3/seelab_fw.jpg">
                </div>
                <div class="content">
                    <div class="header">Oscilloscope</div>
                    <div class="meta">
                        <a>A1,A2,A3,MIC | Max 2MSPS , +/-16V</a>
                    </div>
                    <div class="description">
                        4-Channel Digital Oscilloscope with advanced triggering, real-time FFT analysis, and XY plotting capabilities. Sample rates up to 2 MSPS. +/-16V on A1, and A2, with amplification up to +/-250mV range. Fourth channel for microphones

                    </div>
                </div>
            </div>


            <div class="card randomcard">
                <div class="image photocard">
                    <img src="assets/images/seelab3/seelab_filter.jpg">
                    </div>
                    <div class="content">
                    <div class="header">Waveform Generators</div>
                    <div class="meta">
                        <a>WG, SQ1, SQ2 , CS3</a>
                    </div>
                    <div class="description">
                    Programmable Waveform Generator capable of producing Sine, Triangle, and Square waves. 
                    Sine Frequency range from 1Hz to 5KHz with amplitude control up to +/-3V. Square waves up to 8MHz. Clock output up to 64MHz
                    </div>

                </div>
            </div>


            <div class="card randomcard">
                <div class="image photocard">
                    <img src="assets/images/seelab3/npn-screenshot.jpg">
                    </div>
                    <div class="content">
                    <div class="header">DACs and Voltmeters</div>
                    <div class="meta">
                        <a>PV1,PV2 | A1,A2,A3,SEN</a>
                    </div>
                    <div class="description">
                    2x programmable bipolar voltage outputs with 12 bit resolution. +/-5V and +/-3V . Multiple voltmeters with programmable ranges from +/-260mV to +/-16V. Mainly used for I-V characterisation
                    </div>
                    <div class="extra content">
                    Diode IV , Solar cell characterisation, NPN/PNP input/output/load lines, driven pendulums, and more..
                    </div>

                </div>
            </div>

<!--
            <div class="pink card">
                <div class="image photocard">
                    <img src="assets/images/seelab3/visual.png">
                    </div>
                    <div class="content">
                    <div class="header">Visual Coding</div>
                    <div class="meta">
                        <a>Similar to Scratch</a>
                    </div>
                    <div class="description">
                    The drag and drop coding interface makes it easy to develop workflows to control real world events. 
                    It includes blocks to perform data acquisition, analysis , and visualization in addition to standard coding operators
                    </div>
                    <div class="extra content">
                    50+ code examples for experiments. from plotting sine waves, sine fitting, and LCR steady state response
                    </div>

                </div>
            </div>
-->

        </div>


    <br>

    </div>


    <div class="row about-features" style="background: #0a1a28a3;border-radius: 2rem;">

        <div class="features-list block-1-3 block-m-1-2 block-mob-full group">



            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <img class="ui avatar image" src="/assets/images/seelab3/visual_logo_small.png" ><h3 style="display: inline;">Visual Code</h3>

                    <p>The drag and drop coding interface makes it easy to develop workflows to control real world events. 
                    It includes blocks to perform data acquisition, analysis , and visualization in addition to standard coding operators.</p>
                    <div class="photocard">
                        <img src="assets/images/seelab3/visual.png"
                            data-aos="fade-down">
                    </div>

                    <p>50+ code examples for experiments. from plotting sine waves, sine fitting, and LCR steady state response</p>

                </div>

            </div> <!-- /bgrid -->
            

            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <img class="ui avatar image" src="/assets/images/seelab3/kid.png" ><h3 style="display: inline;">Elementary to Advanced</h3>

                    <p>Youngsters can get started with simple experiments such as making lemon cells, parallel plate capacitors,
                    dynamos. Excellent for demonstrating STEM principles. </p>
                    <div class="photocard">
                        <img data-src="assets/images/seelab3/kids.jpg"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy"
                            data-aos="fade-right">
                    </div>

                </div>

            </div> <!-- /bgrid -->

            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>100+ Experiments</h3>

                    <p>With this unique combination of tools tailor made for science education, a vast range of experiments are possible</p>
                    <div class="photocard">
                        <img data-src="assets/images/seelab3/experiments.webp"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy"
                            data-aos="fade-down">
                    </div>

                    <p>School Level science, electronics, electrical, mechanics, electrochemistry, acoustics...</p>

                </div>

            </div> <!-- /bgrid -->

        </div> <!-- end features-list -->

    </div> <!-- end about-features -->

    <br>
    <div class="row">

        <div class="ui three stackable link cards">

            <div class="card randomcard">
                <div class="image photocard">
                <img src="assets/images/seelab3/fft_sound.jpg">
                </div>
                <div class="content">
                    <div class="header">Android Compatible</div>
                    <div class="meta">
                        <a>Fully Portable testbench !</a>
                    </div>
                    <div class="description">
                        Use your Android device as a portable lab with our <a href="#downloadbuttons">feature-rich app</a>. Includes visual programming interface and 100+ experiment templates.
                    </div>
                    <div class= "extra content">
                    Integrated with your phone's built-in sensors, GPS, and communication pathways for IoT experiments
                    </div>
                </div>
            </div>


            <div class="card randomcard">
                <div class="image photocard">
                    <img src="assets/images/seelab3/sensors.jpg">
                    </div>
                    <div class="content">
                    <div class="header">I2C Sensor Hub</div>
                    <div class="meta">
                        <a>12+ sensors</a>
                    </div>
                    <div class="description">
                    Connect and control <a class="smoothscroll" href="#components">multiple I2C sensors</a> simultaneously. Built-in support for temperature, pressure, motion, and many other sensor types
                    </div>

                </div>
            </div>


            <div class="card randomcard">
                <div class="image photocard">
                    <img src="assets/images/seelab3/accessories.jpg">
                    </div>
                    <div class="content">
                    <div class="header">Essential Accessories</div>
                    <div class="meta">
                        <a>Included with the kit</a>
                    </div>
                    <div class="description">
                    A basic set of passive components and accessories are included in the kit to help you get started right away. These include resistors, capacitors, motor, buzzers, coil, LDR, and an SR04 sensor
                    </div>
                    <div class="extra content">
                    Sufficient for more than 50 experiments!
                    </div>

                </div>
            </div>

        </div>


    </div>
    <div class="ui divider"></div>
    <div class="row">
        <div class="ui eight doubling cards" >
        {% for link in site.data.eyesdocs %}
        <a class="card randomcard" href="{{ link.link }}" target="_blank">
            <div class="content">
                <div class="header">
                    {{ link.title }}
                </div>
                <div class="meta">
                    <span class="category">{{ link.description }}</span>
                </div>
            </div>
        </a>
        {% endfor %}
        </div>
    </div>



</section>


<section id="mobileapp" >

    <div class="row about-bottom-image">

       <img src="assets/images/seelab3/header_strip.jpg" data-aos="fade-up">

    </div> 

    <div class="row about-how">

        <h1 class="intro-header" data-aos="fade-up">So, what else can you do with it?</h1>



        <div class="row about-intro" data-aos="fade-down">

            <div class="col-four">
                <img src="assets/images/seelab3/app_hand.webp"
                        alt="Androidapp in hand" data-aos="fade-right">
            </div>

            <div class="col-eight">

<!--- EXTRA FEATURES -->

        <div class="features-list block-1-3 block-m-1-2 block-mob-full group">

            <div class="bgrid feature" data-aos="fade-up">

                <div class="service-content">
                    <h3>PID Controller</h3>
                    <div class="photocard">
                        <img data-src="assets/images/seelab3/pid.jpeg"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy"
                            data-aos="fade-right">
                    </div>
                    <p>Choose any input and any output! Temperature controllers, magnetic field stabilizers, drone stability principles...</p>

                </div>
            </div> 


            <div class="bgrid feature" data-aos="fade-up">

                <div class="service-content">
                    <h3>Cyclic Voltammetry</h3>
                    <div class="photocard">
                        <img src="assets/images/seelab3/cv.jpg"
                            data-aos="fade-right">
                    </div>
                    <p>Wire up a 3 opamp circuit, and use SEELab'3 voltmeters and DACs to explore redox electrochemistry. Shown traces are for FeCN6+KCl , and an Ionic liquid. A simple CV experiment with a 1K resistor is also built-in</p>


                </div>
            </div> 

            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>Sensor Oscilloscope</h3>
                    <div class="photocard">
                        <img data-src="assets/images/seelab3/mpu_photo.jpeg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy"
                            data-aos="fade-up">
                    </div>

                    <p>The sensor oscilloscope gets precise time correlated data from sensors. Used to study vibrational modes of mechanical oscillators. The speed of this BLDC fan was calculated from the FFT of data from an accelerometer</p>
                </div>

            </div> <!-- /bgrid -->            

        </div> <!-- end features-list -->


<!--- EXTRA FEATURES END-->

            </div>                       
            

        <div class="features-list block-1-4 block-m-1-2 block-mob-full group">            
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3><a href="{{product.android}}" target="_blank">Android Phone Lab</a></h3>

                    <p>Record data from your phone's sensors! Accelerometer, gyro, magnetometer, luminosity... Plot/Analyse raw data. measure sub-millisecond time gaps between noises with the interactive acoustic stopwatch</p>
                    <div class="photocard">
                        <img src="assets/images/seelab3/phone_accel.jpeg"
                            data-aos="fade-right">
                    </div>

                </div>

            </div> <!-- /bgrid -->

            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>Online Courses</h3>

                    <p>Check out MOOC courses on Moodle. Tailored for different audiences</p>
                    <a class="ui fluid button fade pink" href = "https://alpha.scischool.in/" target="_blank">Scischool.in</a>
                    <p>Course material developed by Dr. Ajith Kumar For Scischool.in</p>
                    <div class="photocard">
                        <img src="assets/images/seelab3/moodle.jpeg">
                    </div>
                </div>

            </div> <!-- /bgrid -->

            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>Programmable</h3>

                    <p>Open source python library lets you integrate it into complex setups</p>


<div class="language-python highlighter-rouge" style="text-align:left"><div class="highlight"><pre class="highlight"><code><span class="kn">from</span> <span class="nn">expeyes</span> <span class="kn">import</span> <span class="n">eyes17</span>
<span class="kn">p</span><span class="o">=</span><span class="n">eyes17</span><span class="p">.</span><span class="nb">open</span><span class="p">()</span> 
<span class="kn">p</span><span class="p">.</span><span class="n">set_pv1</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="c1"># +1 Volt output on PV1</span>
<span class="n">v</span> <span class="o">=</span> <span class="kn">p</span><span class="p">.</span><span class="n">get_voltage</span><span class="p">(</span><span class="mi">'A1'</span><span class="p">)</span> <span class="c1">#Read voltages from A1 input
</span>
</code></pre></div>              </div>

                </div>

                <a class="ui fluid button inverted red" href = "{{product.apidocs}}" target="_blank"><i class="ui book icon"></i>Reference Manual</a>
                <a class="ui fluid button inverted green" href = "https://pypi.org/project/eyes17lib/" target="_blank"><i class="ui python icon"></i>Pip package</a>
                <a class="ui fluid button inverted blue" href = "https://github.com/expeyes/expeyes-programs/tree/master/eyes17/eyes17" target="_blank"><i class="ui github icon"></i>Source Code</a>
                

            </div> <!-- /bgrid -->



            <div class="bgrid feature" data-aos="fade-up">

                <div class="service-content">
                    <h3>General Robotics</h3>
                    <div class="photocard">
                        <img data-src="assets/images/seelab3/robot.png"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy"
                            data-aos="fade-right">
                    </div>
                    <p>This 4-DOF affordable robotic arm can be controlled via your phone using the visual coding interface. SEELab3 controls the servos via a PCA9685 servo controller, and responds to hand gestures detected with AI.</p>

                </div>
            </div> 


        </div> <!-- end features-list -->

        </div>


    </div> 


</section> 



<section id="components" data-parallax="scroll" data-image-src="assets/kpimages/bg2.jpg" data-natural-width=1334 data-natural-height=751>

<div class="row">
    <h1 data-aos="fade-up" style="text-align:center;color:white;"><a href="https://eyes17lib.readthedocs.io/en/latest/programming/sensors/" target="_blank">Sensors (I2C / SPI)</a></h1>
    <div class="features-list block-1-3 block-m-1-3 block-mob-full group">

        <div class="bgrid feature" data-aos="fade-right">
            <div width="320" class="photocard" style="width:320px">
                <img data-src="assets/images/seelab3/i2c_main.png"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy"
                    data-aos="fade-right">
            </div>
            <div width="320" class="photocard" style="width:320px">
                <img src="assets/images/seelab3/i2c_gauges.png"
                    data-aos="fade-right">
            </div>

            <div width="320" class="photocard" style="width:320px">
                <img src="assets/images/seelab3/i2c_logger.png"
                    data-aos="fade-right">
            </div>


        </div>

        <div class="bgrid feature pricing-table" data-aos="fade-right">
            <div class="plan-block" data-aos="fade-right">
                <ul class="plan-block-features">
                    <li><span>BME280: </span>Temp, Pressure, Humidity</li>
                    <li><span>AD8232: </span>ECG Amplifier module</li>
                    <li><span>TSL2561: </span>Luminosity Sensor</li>
                    <li><span>HMC5883: </span>3 Axis Magnetometer</li>
                    <li><span>MPU6050: </span>6 DOF IMU: Accel+Gyro</li>
                    <li><span>MLX90614: </span>Passive IR Temperature</li>
                    <li><span>AHT10: </span>Humidity Measurement</li>
                    <li><span>ML8511: </span>Analog UV sensor</li>
                    <li><span>MAX30100: </span>Heart rate and Oximetry</li>
                    <li><span>AD9833: </span>24 bit DDS sine wave generator</li>
                </ul>

            </div>
        </div> 


        <div class="bgrid feature pricing-table" data-aos="fade-right">

            <div class="plan-block primary" data-aos="fade-right">
                    <ul class="plan-block-features">
                        <li><span>PCA9685: </span>16 Channel PWM</li>
                        <li><span>HX711: </span>24 bit ADC for load cells</li>
                        <li><span>MCP5725: </span>12 bit DAC</li>
                        <li><span>QMC5883: </span>Magnetometer</li>
                        <li><span>BH1750: </span>Luminosity Sensor</li>
                        <li><span>AD8232: </span>ECG Instrumentation Amp</li>
                        <li><span>ADS1115: </span>16 bit ADC</li>
                        <li><span>TCS34725: </span>RGB Color Sensor</li>
                        <li><span>ADXL345: </span>3 Axis Accelerometer</li>
                        <li><span>INA219: </span>Current Meter</li>
                    </ul>
            </div>

        </div> 



    </div> 
</div>
</section>

<section id="clients">
{% include logo_gallery.html%}
</section>

<section id="publications">

{% include maketable.html publist=site.data.publications title="Related Publications" color="green" filter="ExpEYES" %}
</section>


<section id="download">


    <h3>Blog posts</h3>
    {% assign allposts = site.categories.seel3 %}
    <div class = "ui four stackable cards">

            {% for post in allposts %}

            <div class="blue card">
                    <!--<div class="image">
                        <img src="{{ post.cover }}">
                    </div>-->
                    <div class="content">
                    <div class="header">
                        <a href="{{post.url}}">{{post.title}}</a>
                    </div>
                    <div class="description">
                    {{post.summary}}
                    </div>
                    <div class="extra content">
                            {% for cat in post.category %}<a>{{cat}}/</a>{% endfor %}
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

            {% endfor %}

    </div>

</section> 





<!-- Modal definition -->
<div class="ui fullscreen modal" id="purchaseModal">
    <i class="close icon"></i>
    <div class="header">
        Contact Us for Purchase
    </div>
    <div class="content">
        <div class="description">
            <div class="ui two column stackable grid">
                <!-- Contact Form Column -->
                <div class="six wide column">
                    <form id="my-form" class="ui form" method="post" action="https://formspree.io/f/meoalegr">
                        <div class="required field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Your Name">
                        </div>
                        <div class="required field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Your Email">
                        </div>
                        <div class="required field">
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder="Subject" value="SEELab3 Query">
                        </div>
                        <div class="required field">
                            <label>Message</label>
                            <textarea name="message" placeholder="Your Query">Need a quotation for SEELab3...</textarea>
                        </div>
                        <div class="ui error message"></div>
                        <button id="my-form-button" class="ui primary button" type="submit"><i id="submit-loader" class=""></i>Send Message</button>
                        <p id="my-form-status"></p>
                    </form>
                </div>
                
                <!-- Contact Info Column -->
                <div class="eight wide column">
                    
                    <h4>Vendors</h4>


                    <div class="ui two doubling cards">
                    {% for v in site.data.seelab3.vendors %}
                    <div class="card">
                        <div class="content">
                        {%if v.logo %} <img class="right floated mini ui image" src="{{ v.logo }}">
                        {% endif %}
                        <div class="header">
                            {{ v.name }}
                        </div>
                        {%if v.email %}
                        <a class="meta" >
                            <i class="red mail icon"></i>{{ v.email }}
                        </a>
                        {% endif %}
                        <div class="description">
                            {{ v.address }}
                        </div>
                        </div>
                        <div class="extra content">
                        <div class="ui two buttons">
                            <a class="ui basic small green button" href="{{v.link}}" target="_blank"><i class="cart icon"></i>Buy</a>
                            {%if v.contact %}<a class="ui basic small blue button" href="tel:{{v.contact}}"><i class="phone icon"></i>Contact</a>{%endif%}
                        </div>
                        </div>
                    </div>
                    {% endfor %}
                    </div>
                    <br>
                    <h4>Manufacturer</h4>
                    <div class="ui relaxed list">
                        <div class="item">
                            <i class="envelope icon"></i>
                            <div class="content">
                                <a href="mailto:csparkresearch@gmail.com">csparkresearch@gmail.com</a>
                            </div>
                        </div>
                        <div class="item">
                            <i class="phone icon"></i>
                            <div class="content">
                                <a href="tel:+918851100290">(+91) 8851 100 290</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


<script>
  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var loadicon = document.getElementById("submit-loader");
    var data = new FormData(event.target);
    loadicon.setAttribute('class','loading spinner icon');
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      var loadicon = document.getElementById("submit-loader");
      loadicon.removeAttribute('class','loading spinner icon');

      if (response.ok) {
        status.innerHTML = "Cool. We'll get back shortly!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)
</script>
