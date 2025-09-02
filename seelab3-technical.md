---
layout: bootstrap_seelab_technical
title: SEELab 3 technical Documentation
description: "Technical docs for SEELab3"
show-navigation: false
share-img: /assets/images/seelab3/seelab-cover.jpg
banner: /assets/images/seelab3/seelab-cover.jpg
favicon: favicon.png
docs: https://eyes17lib.readthedocs.io/en/latest/
show-avatar: true
---


{% assign product = site.data.products["SEELab3"] %}

<section id="about" style="padding-top:5rem;">
    

    <div class="row about-intro" id="topdownloads">
    <div class="ui divider"></div>
    <h2 class="ui clearing header">Technical Specifications for SEELab3</h2>

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

    <div class="row">
        <a href="/seelab3">Return to the main Product Page for SEELab3</a>
    </div>


    <div class="row">



        <table class="ui red table" id="voltmeters">
            <thead>
                <tr>
                    <th colspan="4">Voltage inputs (Also Single ended Oscilloscope inputs @1MSPS total)</th>
                </tr>
                <tr>
                    <th>PIN Name</th>
                    <th>Input Range(s)</th>
                    <th class="right aligned">Input Impedance</th>
                    <th class="right aligned">Resolution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A1</td>
                    <td>+/-16V... +/-250mV</td>
                    <td class="right aligned">1 MΩ</td>
                    <td class="right aligned">12-bit</td>
                </tr>
                <tr>
                    <td>A2</td>
                    <td>+/-16V... +/-250mV</td>
                    <td class="right aligned">1 MΩ</td>
                    <td class="right aligned">12-bit</td>
                </tr>
                <tr>
                    <td>A3</td>
                    <td>+/-3.3V</td>
                    <td class="right aligned">10 MΩ</td>
                    <td class="right aligned">12-bit</td>
                </tr>
                <tr>
                    <td>SEN</td>
                    <td>0-3.3V</td>
                    <td class="right aligned">Internal 5.1K Pull-up to 3.3V</td>
                    <td class="right aligned">12-bit</td>
                </tr>
                <tr>
                    <td>IN1</td>
                    <td>0-3.3V</td>
                    <td class="right aligned">Direct ADC in</td>
                    <td class="right aligned">12-bit</td>
                </tr>
                <tr>
                    <td>PCS</td>
                    <td>0-3.3V</td>
                    <td class="right aligned">Linked to PCS</td>
                    <td class="right aligned">12-bit</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">4 channels(A1,A2,A3,MIC) can be simultaneously sampled. Max buffer size of 10K points @10-bit.<br>12-bit sampling available for individual traces.</td>
                </tr>
            </tfoot>
        </table>






        <table class="ui green table" id="wavegens">
            <thead>
                <tr>
                    <th colspan="4">Waveform Generators</th>
                </tr>
                <tr>
                    <th>PIN Name</th>
                    <th>Frequency Range</th>
                    <th>Shape</th>
                    <th>Amplitude</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>WG</td>
                    <td>5Hz to 5KHz</td>
                    <td>Sine/Triangle/Arbit</td>
                    <td>+/- 3.3V. Attenuable via<br>software and hardware</td>
                </tr>
                <tr>
                    <td>WG bar</td>
                    <td>5Hz to 5KHz. Linked to WG.<br>180 degree phase shifted</td>
                    <td>Sine/Triangle/Arbit</td>
                    <td>+/- 3.3V. Attenuable</td>
                </tr>
                <tr>
                    <td>SQ1</td>
                    <td>0.01Hz to 8MHz</td>
                    <td>Square</td>
                    <td>0-5V Fixed</td>
                </tr>
                <tr>
                    <td>SQ2 (* conflicts WG)</td>
                    <td>0.01 to 8MHz</td>
                    <td>Square</td>
                    <td>0-5V Fixed</td>
                </tr>
                <tr>
                    <td>CS3(Clock output map)</td>
                    <td>1MHz-64MHz(Selectable)</td>
                    <td>Square</td>
                    <td>0-3.3</td>
                </tr>
            </tbody>
        </table>


        <table class="ui blue table" id="voltagesources">
            <thead>
                <tr>
                    <th colspan="4">Voltage Sources</th>
                </tr>
                <tr>
                    <th>PIN Name</th>
                    <th>Range</th>
                    <th>Current Limit</th>
                    <th>Resolution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PV1</td>
                    <td>-5V to +5V</td>
                    <td>20mA</td>
                    <td>12-bit</td>
                </tr>
                <tr>
                    <td>PV2</td>
                    <td>-3.3V to +3.3V</td>
                    <td>20mA</td>
                    <td>12-bit</td>
                </tr>
                <tr>
                    <td>5V</td>
                    <td>USB supply(~5V)</td>
                    <td>400mA</td>
                    <td>Always ON</td>
                </tr>
                <tr>
                    <td>OD1</td>
                    <td>5V USB</td>
                    <td>100mA</td>
                    <td>ON/OFF</td>
                </tr>
                <tr>
                    <td>+6V</td>
                    <td>+6V</td>
                    <td>30mA</td>
                    <td>Always ON</td>
                </tr>
                <tr>
                    <td>-6V</td>
                    <td>-6V</td>
                    <td>30mA</td>
                    <td>Always ON</td>
                </tr>
            </tbody>
        </table>


        <table class="ui olive table" id="currentsources">
            <thead>
                <tr>
                    <th colspan="4">Current Sources</th>
                </tr>
                <tr>
                    <th>PIN Name</th>
                    <th>Range</th>
                    <th>Voltage Limit</th>
                    <th>Resolution</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PCS</td>
                    <td>0-3mA</td>
                    <td>3.3V</td>
                    <td>12-bit</td>
                </tr>
            </tbody>
        </table>


        <table class="ui purple table" id="meters">
            <thead>
                <tr>
                    <th colspan="4">Other Measurement Inputs</th>
                </tr>
                <tr>
                    <th>Parameter</th>
                    <th>Input Pin</th>
                    <th>Range</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Capacitance</td>
                    <td>IN1</td>
                    <td>10pF to 100uF</td>
                    <td>Connect between IN1 and GND</td>
                </tr>
                <tr>
                    <td>Resistance</td>
                    <td>SEN</td>
                    <td>100 Ω to 100K Ω</td>
                    <td>Connect between SEN and GND</td>
                </tr>
                <tr>
                    <td>Timing</td>
                    <td>IN2</td>
                    <td>500nS to 60 Seconds</td>
                    <td>32-bit timer. Frequency/Duty Cycle/Multiple edges</td>
                </tr>
                <tr>
                    <td>Diode Forward Voltage</td>
                    <td>SEN</td>
                    <td>Up to 3V. 0.1 mA < I < 1 mA</td>
                    <td>Connect from SEN to GND</td>
                </tr>
            </tbody>
        </table>


        <table class="ui purple table" id="meters">
            <thead>
                <tr>
                    <th colspan="4">Communication interfaces for Add-ons</th>
                </tr>
                <tr>
                    <th>Interface</th>
                    <th>PINS</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>I2C</td>
                    <td>SCL, SDA</td>
                    <td>Check sensors section below</td>
                </tr>
                <tr>
                    <td>SPI</td>
                    <td>SCK,SDI,SDO,CS1-CS3</td>
                    <td>AD9833 wavegen</td>
                </tr>
                <tr>
                    <td>HX711 ADC</td>
                    <td>OD1( HX_SCK), IN2(HX_DT)</td>
                    <td>Custom protocol</td>
                </tr>
            </tbody>
        </table>


    </div>
    <br>


</section>



<section id="components" data-parallax="scroll" data-image-src="assets/kpimages/bg2.jpg" data-natural-width=1334 data-natural-height=751>

<div class="row">
    <div class="features-list block-1-3 block-m-1-3 block-mob-full group">

        <div class="bgrid feature" data-aos="fade-right">
            <h1 data-aos="fade-up" style="text-align:center;color:white;">Sensors (I2C/SPI)</h1>
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