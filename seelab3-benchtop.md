---
layout: bootstrap
title: Kuttypy Plus
description: "Software - Real World bridge for learning embedded systems"
show-navigation: false
share-img: /assets/kpimages/app-screens-600.jpg
banner: /assets/images/kuttypy/cover.jpg
favicon: favicon.png
show-avatar: true

---

{% assign product = site.data.products["SEELab3-benchtop"] %}

<section id="home" data-parallax="scroll" data-image-src="assets/seelab-benchtop/bg.jpg" data-natural-width=2600 data-natural-height=1463>

    <div class="overlay"></div>
    <div class="home-content">        

        <div class="row contents">                     
            <div class="home-content-left text-center" >

                <h3 data-aos="fade-up">Introducing SEELab3: Workbench</h3>

                <h1 data-aos="fade-up">
                    A versatile collection of test and measurement equipment!
                </h1>

                <div class="buttons" data-aos="fade-up">
                    <a href="#download" class="smoothscroll button stroke">
                        <span class="icon-circle-down" aria-hidden="true"></span>
                        Download App
                    </a>
                    <a href="https://www.youtube.com/watch?v=9xXyL25D2jo" data-lity class="button stroke">
                        <span class="icon-play" aria-hidden="true"></span>
                        Watch Video
                    </a>
                </div>                                         

            </div>

            <div class="home-image-right">
                <img src="assets/seelab-benchtop/app-470.png"
                    srcset="assets/seelab-benchtop/app-470.png 1x, assets/seelab-benchtop/app-940.png 2x"
                    data-aos="fade-up">
            </div>
        </div>

    </div>  

    <ul class="home-social-list">
    <li>
        <a href="https://instagram.com/csparkresearch" target="_blank"><i class="fa fa-instagram"></i></a>
    </li>
    <li>
        <a href="https://www.youtube.com/playlist?list=PLZY1OXNn8xkkXhq3xa32-X_m7yRx8Kl5j" target="_blank"><i class="fa fa-youtube-play"></i></a>
    </li>
    <li>
        <a href="https://twitter.com/csparkresearch?lang=en" target="_blank"><i class="fa fa-twitter"></i></a>
    </li>
    <li>
        <a href="https://twitter.com/csparkresearch?lang=en" target="_blank"><i class="fa fa-facebook-square"></i></a>
    </li>

    </ul>


    <div class="home-scrolldown">
        <a href="#about" class="scroll-icon smoothscroll">
            <span>Scroll Down</span>
            <i class="icon-arrow-right" aria-hidden="true"></i>
        </a>
    </div>

</section> 


<section id="about">

    <div class="row about-intro">

        <div class="col-four">
            <h1 class="intro-header" data-aos="fade-up">About The Device</h1>
            <div class="buttons" data-aos="fade-up">
                    <a href="{{product.apidocs}}" target="_blank" class="button stroke pill full-width">
                        <span class="icon-circle-down" aria-hidden="true"></span>
                        Python Docs
                    </a>
            </div>

        </div>
        <div class="col-eight">
            <p class="lead text-justify" data-aos="fade-up">
        SEELab3(Benchtop Version) is a valuable tool for hands-on learning in science and engineering, promoting practical understanding and experimentation in various scientific concepts.<br>
		Into a compact USB powered format it packs a range of essential tools for studying circuits - Oscilloscope, Waveform Generators, RC Meter, Voltage sources.
        Digital I/O , Timing measurement tools, I2C/SPI interface, Power supplies, and more ...
            </p>
        </div>                       
        
    </div>
    
</section>


<section id="pricing2" data-parallax="scroll" data-image-src="assets/kpimages/bg2.jpg" data-natural-width=1334 data-natural-height=751>

    <div class="row about-features">

        <div class="features-list block-1-3 block-m-1-2 block-mob-full group">

            <div class="bgrid feature" data-aos="fade-up">

                <span class="icon"><i class="icon-window"></i></span>

                <div class="service-content">

                    <h3>Python Programmable</h3>
                    <p>The Python library allows full control over the registers of the microcontroller. It can perform live bit manipulation, read/write over communication buses, and analyze and visualize acquired data.
                    </p>
                    <div class="">
                        <img src="assets/kpimages/malus.png"
                            data-aos="fade-right">
                    </div>
                    <p>Combine with powerful Python modules like Numpy, Scipy, Matplotlib for data analysis and visualization</p>

                </div>

                </div> 

                <div class="bgrid feature" data-aos="fade-up">

                    <span class="icon"><i class="icon-file"></i></span>

                <div class="service-content">
                    <h3>C Code IDE</h3>

                    <p>The KuttyPy IDE on your laptop comes with over 50 example codes in C and Assembly to teach you the fundamentals. AVR-GCC is used to compile code, and the IDE uploads it. Compatible with the Arduino IDE.
                    </p>
                    <div class="">
                        <img src="assets/kpimages/kuttypy.webp"
                            data-aos="fade-up">
                    </div>
                    <p>50+ Simple examples for blinking LEDs, Reading ADCs, and operating PWM outputs</p>


                </div>

            </div> 

            <div class="bgrid feature" data-aos="fade-up">

                <span class="icon"><i class="icon-gift"></i></span>

                <div class="service-content">
                    <h3>Visual Code</h3>

                    <p>The drag and drop coding interface on the android app makes it easy to use your KuttyPy to control real world events. It includes AI gesture recognition blocks , and demo games to make learning to code fun.</p>
                    <div class="">
                        <img src="assets/kpimages/Sensor Addons.jpg"
                            data-aos="fade-left">
                    </div>

                    <p>Several examples ranging from plotting sine waves, to a gesture controlled robotic arm</p>

                </div>

            </div> <!-- /bgrid -->

        </div> <!-- end features-list -->

    </div> <!-- end about-features -->

</section>


<section id="mobileapp">

    <div class="row about-bottom-image">

       <img src="assets/kpimages/app-screens-1200.jpg"
            srcset="assets/kpimages/app-screens-600.jpg 600w,
                    assets/kpimages/app-screens-1200.jpg 1200w,
                    assets/kpimages/app-screens-2800.jpg 2800w"
            sizes="(max-width: 2800px) 100vw, 2800px"
            alt="App Screenshots" data-aos="fade-up">

    </div> 

    <div class="row about-how">

        <h1 class="intro-header" data-aos="fade-up">What Can It Do?</h1>


        <div class="about-how-content" data-aos="fade-up">
            <div class="about-how-steps block-1-2 block-tab-full group">

                <div class="bgrid logoimage step" data-item="" style="--logo-url:url(/assets/kpimages/blink.gif)">
                    <h3>
                            Register Bit Manipulation</h3>
                    <p style="margin-bottom:50px"> With no Compile/Upload Hassle, one can : Monitor every input, Toggle every output, Access Peripherals such as PWMs and Counters, log/plot ADC readings, Scan for I2C sensors, plug and play over 10 common I2Csensors.
                    </p>
                    <img src="assets/kpimages/PORTB.png"
                        data-aos="fade-down">

                </div>

                <div class="bgrid logoimage step" data-item="" style="--logo-url:url(/assets/kpimages/visual_logo.png)">
                    <h3>Graphical Programming</h3>
                    <p style="margin-bottom:0px">Includes a visual coding interface built on Blockly that allows dragging and linking graphical segments to form logical sequences with parallel generation of typed code. Over 50 examples included to perform various tasks such as sensor data logging, and AI enabled games.
                    </p>
                    <img src="assets/kpimages/visual.gif"
                        data-aos="fade-down">
                </div>

                <div class="bgrid logoimage step" data-item="" style="--logo-url:url(/assets/kpimages/tnm.gif)">
                    <h3>C Code IDE</h3>
                    <p>Built-in C code editor with over 100 C and Assembly examples focused on fundamental learning. It is also compatible with the Arduino IDE, and can be used after downloading the board package into the IDE. The android app features a cloud based compiler.
                    </p>
                </div>

                <div class="bgrid logoimage step circle" data-item="" style="--logo-url:url(/assets/kpimages/gauge.gif)">
                    <h3>Test and Measurement</h3>
                    <p>The software control of I/O pins, ADCs, communication buses enable this to be used as a data acquisition and control device. Simple tasks such as logging voltage, or readings from sensors for magnetic fields, luminosity, pressure, humidity etc can be done with no-coding knowledge.
                    </p>
                    <div class="">
                        <div class="block-1-2 bgrid">
                            <img src="assets/kpimages/extra_adc.gif"
                                data-aos="fade-right">
                        </div>
                        <div class="block-1-2 bgrid">
                            <img src="assets/kpimages/extra_pwm.gif"
                                data-aos="fade-right">
                        </div>
                    </div>


                </div>

            </div>
       </div> 

    </div> 


</section> 



<section id="components" data-parallax="scroll" data-image-src="assets/kpimages/bg2.jpg" data-natural-width=1334 data-natural-height=751>

    <div class="row about-features">
        <h3 data-aos="fade-up"  style="text-align:center;color:white;">The Hardware</h3>

        <div style="background: #fff4; border: aliceblue; border-radius: 50px;">
            <img src="assets/kpimages/kpy_components.png" style="display:block;margin:auto;"
                data-aos="fade-up">
        </div>
    </div>

    <div class="row about-features">

        <div class="features-list block-1-4 block-m-1-2 block-mob-full group">

            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>USB Connectivity</h3>
                    <p> Attach to your PC/Phone to control and monitor the hardware
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>LED Arrays</h3>
                    <p> 8 SMD LEDs each on PORTD and PORTB for various demonstrations
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>Switch Array</h3>
                    <p> DIP switch array on PORTA for read_input demo. 
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>6-bit R2R DAC</h3>
                    <p> Resistor ladder built into pins PC2-PC7 for a 6 bit DAC.  
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>RGB LED</h3>
                    <p>Common Anode RGB LED with inputs connected to PB3, PD5, and PD7 which have PWM modules attached.  
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>I2C Connector</h3>
                    <p>I2C is available on PC0, PC1 for connecting sensors. Reduce messy wires with a dedicated 4 pole socket.  
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>Resettable Fuse</h3>
                    <p>Protects against accidental short circuits. Resets automatically  
                    </p>
                </div>
            </div> 
            <div class="bgrid feature" data-aos="fade-up">
                <div class="service-content">
                    <h3>Display Port</h3>
                    <p>Port for soldering a 16 character display. Also includes resistor pads for adjusting contrast and backlight.  
                    </p>
                </div>
            </div> 

        </div> <!-- end features-list -->

    </div> <!-- end about-features -->

</section>

<section id="pricing">
    <div class="row pricing-content">

        <div class="col-four pricing-intro">
            <h1 class="intro-header" data-aos="fade-up">Add-On Sensors</h1>

            <p data-aos="fade-up">Access add-on sensors and controllers via I2C
            </p>
            <div width="320" style="width:320px">
                <img src="assets/kpimages/mcp4725dac.gif"
                    data-aos="fade-right">
            </div>

            <div data-aos="fade-left">
                <video width="320" height="240" controls autoplay muted playsinline loop id="videoId">
                  <source src="/assets/kpimages/joystick.webm" type="video/mp4" >
                  Your browser does not support the video tag.
                </video>
            </div>

        </div>

        <div class="col-eight pricing-table">
            <div class="row">

                <div class="col-six plan-wrap">
                    <div class="plan-block" data-aos="fade-up">

                        <div class="plan-top-part" style="text-align:center;">
                            <h3 class="plan-block-title">Supported</h3>
                        </div>
                        <div class="plan-bottom-part">
                            <ul class="plan-block-features">
                                <li><span>BME280: </span>Temp, Pressure, Humidity</li>
                                <li><span>TSL2561: </span>Luminosity Sensor</li>
                                <li><span>HMC5883: </span>3 Axis Magnetometer</li>
                                <li><span>MPU6050: </span>6 DOF IMU: Accel+Gyro</li>
                                <li><span>MLX90614: </span>Passive IR Temperature</li>
                                <li><span>AHT10: </span>Humidity Measurement</li>
                                <li><span>ML8511: </span>Analog UV sensor</li>
                                <li><span>MAX30100: </span>Heart rate and Oximetry</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="col-six plan-wrap">
                    <div class="plan-block primary" data-aos="fade-up">

                        <div class="plan-bottom-part">
                            <ul class="plan-block-features">
                                <li><span>PCA9685: </span>16 Channel PWM</li>
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
        </div> 

    </div> 
</section> 


<section id="download">

    <div class="row">
        <div class="col-full">
            <h1 class="intro-header"  data-aos="fade-up">Download The Companion App!</h1>

            <p class="lead" data-aos="fade-up" markdown="1">
                KuttyPy works with connected PC/Android devices. It can be installed for various platforms - Ubuntu, Windows, and Android. If you
                have a Python3 interpreter installed, the kuttyPy package can be installed via Pip: `pip install kuttyPy`
            </p>


            <p class="lead" data-aos="fade-down">
                On windows, a standalone executable installer is available, but Pip is recommended. <a style="color:red" href="{{product.windows}}">Download EXE</a>
            </p>

            <ul class="download-badges">
                <li><a href="{{product.ubuntu}}" title="" class="badge-ubuntustore"  data-aos="fade-right">Ubuntu Deb</a></li>
                <li><a href="{{product.android}}" target="_blank" title="" class="badge-googleplay" data-aos="fade-left">Play Store</a></li>
            </ul>

        </div>
    </div>

</section> 


<section id="testimonials">

    <div class="row">
        <div class="col-twelve">
            <h1 class="intro-header" data-aos="fade-up">User Reviews.</h1>
        </div>   		
    </div>

    <div class="row owl-wrap">

        <div id="testimonial-slider"  data-aos="fade-up">

            <div class="slides owl-carousel">

                <div>
                    <p class="text-center">
                    Sometimes I got nothing to say.
                    </p> 

                    <div class="testimonial-author">
                            <img src="assets/kpimages/avatars/tony.jpg" alt="Author image">
                            <div class="author-info">
                                Tony Soprano
                                <span class="position">Mob Boss</span>
                            </div>
                    </div>                 
                </div> 


                <div>
                    <p class="text-center">
                    What I’m saying is…
                    </p> 

                    <div class="testimonial-author">
                            <img src="assets/kpimages/avatars/chris.jpg" alt="Author image">
                            <div class="author-info">
                                Christopher Moltisanti
                                <span class="position">Made Man</span>
                            </div>
                    </div>                 
                </div> 

                <div>
                    <p class="text-center">
                    Don't touch that! My program's coming on...
                    </p>

                    <div class="testimonial-author">
                            <img src="assets/kpimages/avatars/paulie.jpg" alt="Author image">
                            <div class="author-info">
                                Paulie Gualtieri
                                <span class="position">"Walnuts"</span>
                            </div>
                    </div>
                </div>

                <div>
                    <p class="text-center">
                        You're only as good as your last hex file.
                    </p>

                    <div class="testimonial-author">
                            <img src="assets/kpimages/avatars/silvio.jpg" alt="Author image">
                            <div class="author-info">
                                Silvio Dante
                                <span class="position">right hand</span>
                            </div>
                    </div>
                </div>


            </div>  

        </div>
        
    </div> 

</section> 


