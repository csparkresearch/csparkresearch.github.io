


/* --------------- Get Voltage ------------ */



Blockly.Blocks['get_voltage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Voltage")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"], ["A3","A3"]]), "CHANNEL");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("Read Voltage from selected channel");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['get_voltage'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = "get_voltage('"+dropdown_channel+"')";
  return [code,Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['get_voltage'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble Python into code variable.
  var code = 'get_voltage(\''+dropdown_channel+'\')';
  return [code,Blockly.JavaScript.ORDER_NONE];
};

/*---------------------- SET PV1 / PV2---------------*/

Blockly.Blocks['set_voltage'] = {
  init: function() {
    this.appendValueInput("VOLTAGE")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SET VOLTAGE")
        .appendField(new Blockly.FieldDropdown([["PV1","PV1"], ["PV2","PV2"]]), "CHANNEL");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Set Voltage of PV1");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['set_voltage'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_voltage = Blockly.JavaScript.valueToCode(block, 'VOLTAGE', Blockly.JavaScript.ORDER_NONE);
  var code = 'set_voltage(\''+dropdown_channel+'\','+value_voltage+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Python['set_voltage'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_voltage = Blockly.Python.valueToCode(block, 'VOLTAGE', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'set_voltage(\''+dropdown_channel+'\','+value_voltage+')\n';
  return [code, Blockly.Python.ORDER_NONE];
};


/*---------------------- SET WG / SQ1 / SQ2---------------*/


Blockly.Blocks['set_frequency'] = {
  init: function() {
    this.appendValueInput("FREQUENCY")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SET FREQUENCY")
        .appendField(new Blockly.FieldDropdown([["WG","WG"], ["SQ1","SQ1"], ["SQ2","SQ2"]]), "CHANNEL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set FREQUENCY of WG/SQ1/SQ2");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['set_frequency'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_NONE);
  var code = 'set_frequency(\''+dropdown_channel+'\',' + value_frequency+  ');';
  return code;
};


Blockly.Python['set_frequency'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_frequency = Blockly.Python.valueToCode(block, 'FREQUENCY', Blockly.Python.ORDER_NONE);
  if(dropdown_channel === "WG")
	var code = 'set_sine('+value_frequency+')\n';
  else if(dropdown_channel === "SQ1")
	var code = 'set_sq1('+value_frequency+',50)\n';
  else if(dropdown_channel === "SQ2")
	var code = 'set_sq2('+value_frequency+',50)\n';

  return code;
};


/*------- GET FREQUENCY -----------*/



Blockly.Blocks['get_frequency'] = {

  init: function() {
    this.appendDummyInput()
        .appendField("Read Frequency")
        .appendField(new Blockly.FieldImage("media/ttl.png", 20, 20,  "*", this.collapse,'SS'))
        .appendField(new Blockly.FieldDropdown([["IN2","IN2"], ["SEN","SEN"]]), "CHANNEL");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Get FREQUENCY from IN2/SEN");
 this.setHelpUrl("");
  },
    surprise: function() {
		alert('suprise!');
	},
	collapse: function(){
		this.getSourceBlock().setCollapsed(true);
	}

};

/*------- multi_r2r -----------*/



Blockly.Blocks['multi_r2r'] = {

  init: function() {
    this.appendDummyInput()
        .appendField("Rising Edge Timer")
        .appendField(new Blockly.FieldImage("media/ttl.png", 20, 20,  "*", this.collapse,'SS'))
        .appendField(new Blockly.FieldDropdown([["IN2","IN2"], ["SEN","SEN"]]), "CHANNEL")
        .appendField("Edges:")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["8","8"], ["12","12"], ["16","16"], ["32","32"], ["48","48"]]), "EDGES")
        .appendField("Timeout:")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["5","5"], ["5","5"]]), "TIMEOUT");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Measure time between multiple rising edges from IN2/SEN");
 this.setHelpUrl("");
  },

};


Blockly.JavaScript['multi_r2r'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_edges = block.getFieldValue('EDGES');
  var dropdown_timeout = block.getFieldValue('TIMEOUT');
  var code = 'multi_r2r(\''+dropdown_channel+'\','+dropdown_edges+','+dropdown_timeout+')';
  return [code,Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['multi_r2r'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_edges = block.getFieldValue('EDGES');
  var dropdown_timeout = block.getFieldValue('TIMEOUT');
  var code = 'multi_r2r(\''+dropdown_channel+'\','+dropdown_edges+','+dropdown_timeout+')';
  return [code,Blockly.Python.ORDER_NONE];
};



/*----------Capture routine. Capture 1---------*/


Blockly.Blocks['capture1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Capture 1 |")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"], ["A3","A3"], ["SEN","SEN"], ["IN1","IN1"], ["MIC","MIC"]]), "CHANNEL");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SAMPLES")
        .appendField(new Blockly.FieldNumber(0, 10, 5000, 1), "SAMPLES");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TIMEGAP(uS)")
        .appendField(new Blockly.FieldNumber(0, 1, 2000, 1), "TIMEGAP");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("Record traces using the  Oscilloscope");
 this.setHelpUrl("");
	}
}

Blockly.JavaScript['capture1'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var number_samples = block.getFieldValue('SAMPLES');
  var number_timegap = block.getFieldValue('TIMEGAP');
  var code = 'capture1(\''+dropdown_channel+'\','+number_samples+','+number_timegap+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['capture1'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var number_samples = block.getFieldValue('SAMPLES');
  var number_timegap = block.getFieldValue('TIMEGAP');
  var code = 'capture1(\''+dropdown_channel+'\','+number_samples+','+number_timegap+')';
  return [code, Blockly.Python.ORDER_NONE];
};


/*----------Capture routine. Capture 2---------*/


Blockly.Blocks['capture2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Capture 2 |")
        .appendField(new Blockly.FieldDropdown([["Chan 1: A1","A1"], ["Chan 1: A2","A2"], ["Chan 1: A3","A3"], ["Chan 1: SEN","SEN"], ["Chan 1: IN1","IN1"], ["Chan 1: MIC","MIC"]]), "CHANNEL");
    this.appendDummyInput()
        .appendField("Chan 2: A2")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SAMPLES")
        .appendField(new Blockly.FieldNumber(0, 10, 5000, 1), "SAMPLES");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TIMEGAP(uS)")
        .appendField(new Blockly.FieldNumber(0, 1, 2000, 1), "TIMEGAP");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("Record traces using the  Oscilloscope");
 this.setHelpUrl("");
	}
}

Blockly.JavaScript['capture2'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var number_samples = block.getFieldValue('SAMPLES');
  var number_timegap = block.getFieldValue('TIMEGAP');
  var code = 'capture2(\''+dropdown_channel+'\','+number_samples+','+number_timegap+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['capture2'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var number_samples = block.getFieldValue('SAMPLES');
  var number_timegap = block.getFieldValue('TIMEGAP');
  var code = 'capture2('+number_samples+','+number_timegap+',\''+dropdown_channel+'\')';
  return [code, Blockly.Python.ORDER_NONE];
};

/*---------------TRIGGER -----------------*/



Blockly.Blocks['scope_trigger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Oscilloscope Trigger")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "STATE");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Channel 1","0"], ["Channel 2","1"], ["Channel 3","2"], ["Channel 4","3"]]), "CHANNEL")
        .appendField(" Level:")
        .appendField(new Blockly.FieldNumber(512, 0, 1023, 1), "LEVEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Set Scope Trigger level");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['scope_trigger'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var level = block.getFieldValue('LEVEL');
  var st = block.getFieldValue('STATE');
  var state = true;
  if(st == "FALSE")state = false;
  var code = 'scope_trigger(' + dropdown_channel+ ',' + (1023-level)+ ','+ state + ');';
  return code;
};


Blockly.Python['scope_trigger'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var level = block.getFieldValue('LEVEL');
  var state = block.getFieldValue('STATE');
  var code = 'scope_trigger('+dropdown_channel+',' + level+ ','+state +')\n';

  return code;
};




/*---------------------- Analyse Captured Data ---------------*/

Blockly.Blocks['capture_analysis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sine Fit Capture1 Data");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Amplitude","0"], ["Frequency","1"], ["Phase (Deg)","2"]]), "PARAMETER");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Analyse Captured Data");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['capture_analysis'] = function(block) {
  var dropdown_parameter = block.getFieldValue('PARAMETER');
  var code = 'capture_analysis('+dropdown_parameter+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['capture_analysis'] = function(block) {
  var dropdown_parameter = block.getFieldValue('PARAMETER');
  var code = 'capture_analysis('+dropdown_parameter+')';
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['capture_analysis_dual'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sine Fit Capture2 Data");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Amplitude Ratio","0"], ["Frequency Ratio","1"], ["Phase Difference (Deg)","2"]]), "PARAMETER");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Analyse Captured Data");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['capture_analysis_dual'] = function(block) {
  var dropdown_parameter = block.getFieldValue('PARAMETER');
  var code = 'capture_analysis_dual('+dropdown_parameter+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['capture_analysis_dual'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_parameter = block.getFieldValue('PARAMETER');
  var code = 'capture_analysis_dual('+dropdown_parameter+')';
  return [code, Blockly.Python.ORDER_NONE];
};



/*---------- Get Sensor --------------*/



//----------------SR04_distance

Blockly.Blocks['read_SR04'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read SR04")
        .appendField(new Blockly.FieldDropdown([["Distance(cm)","0"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_SR04'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'SR04\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_SR04'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'sr04_distance()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//---------BMP280

Blockly.Blocks['read_BMP280'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read BMP280")
        .appendField(new Blockly.FieldDropdown([["TEMPERATURE","0"], ["PRESSURE","1"], ["HUMIDITY","2"]]), "CHANNEL")
        .appendField(new Blockly.FieldImage("media/BMP280.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_BMP280'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'BMP280\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_BMP280'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'BMP280\',\''+dropdown_channel+'\')';
  return [code, Blockly.Python.ORDER_NONE];
};

//----------------MPU6050

Blockly.Blocks['read_MPU6050'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read MPU6050")
        .appendField(new Blockly.FieldDropdown([["Ax","0"], ["Ay","1"], ["Az","2"], ["Gx","4"], ["Gy","5"], ["Gz","6"]]), "CHANNEL")
        .appendField(new Blockly.FieldImage("media/MPU6050.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_MPU6050'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'MPU6050\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_MPU6050'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'MPU6050\',\''+dropdown_channel+'\')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

//----------------VL53L0X

Blockly.Blocks['read_VL53L0X'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read VL53L0X")
        .appendField(new Blockly.FieldDropdown([["Distance(mm)","0"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_VL53L0X'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'VL53L0X\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_VL53L0X'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'VL53L0X\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//----------------ML8511

Blockly.Blocks['read_ML8511'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read ML8511")
        .appendField(new Blockly.FieldDropdown([["UV Light mW/cm^2","0"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_ML8511'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'ML8511\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_ML8511'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'ML8511\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//----------------VOLTS

Blockly.Blocks['read_VOLTS'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read VOLTS")
        .appendField(new Blockly.FieldDropdown([["A1","0"],["A2","1"],["A3","2"],["SEN","3"],["IN1","4"],["CCS","5"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_VOLTS'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'VOLTS\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_VOLTS'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'VOLTS\',\''+dropdown_channel+'\')\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//----------------HMC5883L

Blockly.Blocks['read_HMC5883L'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read HMC5883L")
        .appendField(new Blockly.FieldImage("media/MAGNETOMETER.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldDropdown([["Hx","0"], ["Hy","1"], ["Hz","2"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['read_HMC5883L'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'HMC5883L\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['read_HMC5883L'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble JavaScript into code variable.
  var code = 'get_sensor(\'HMC5883L\',\''+dropdown_channel+'\')\n';
  return [code, Blockly.Python.ORDER_NONE];
};


/*-------------------- SET STATE inline --------------*/


Blockly.Blocks['set_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["OD1","OD1"], ["SQ1","SQ1"], ["SQ2","SQ2"]]), "CHANNEL")
        .appendField(new Blockly.FieldDropdown([["ON","ON"], ["OFF","OFF"]]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['set_state'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_state = block.getFieldValue('STATE');
  block.setColour('#0ec244');//Make block green
  if(dropdown_state === 'OFF' )
	  state = false; 
  var code = 'set_state(\''+dropdown_channel+'\',' + state+  ')';
  return code;
};

Blockly.Python['set_state'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_state = block.getFieldValue('STATE');
  // TODO: Assemble Python into code variable.
  var state = 'true';
  if(dropdown_state === 'OFF' ) state = "false"; 
  var code = 'set_state(\''+dropdown_channel+'\',' + state+  ')';
  return code;
};


/*---------------------- SET PCA9685 for Servo Motors---------------*/


Blockly.Blocks['set_PCA9685'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SERVO(PCA9685) ")
        .appendField(new Blockly.FieldDropdown([["1 Angle","1"], ["2 Angle","2"], ["3 Angle","3"], ["4 Angle","4"], ["5 Angle","5"], ["6 Angle","6"]]), "CHANNEL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set Angle on servo motor via PCA9685 module");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['set_PCA9685'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_NONE);
  var code = 'set_PCA9685(\''+dropdown_channel+'\',' + value_angle+  ');';
  return code;
};


Blockly.Python['set_PCA9685'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE);
  var code = 'set_PCA9685(\''+dropdown_channel+'\',' + value_angle+  ')\n';

  return code;
};


/*---------------------- SET SQ1/SQ2 for Servo Motors---------------*/


Blockly.Blocks['set_servo'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SERVO ")
        .appendField(new Blockly.FieldDropdown([["SQ1 Angle","SQ1"], ["SQ2 Angle","SQ2"]]), "CHANNEL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Set Angle on servo motor via SQ1 or SQ2");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['set_servo'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_NONE);
  var code = 'set_servo(\''+dropdown_channel+'\',' + value_angle+  ');';
  return code;
};


Blockly.Python['set_servo'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE);
  var code = 'set_servo(\''+dropdown_channel+'\',' + value_angle+  ')\n'; // TODO: Change to set_sq1(frequency, duty cycle) or set_sq2

  return code;
};


/*--------------- Phone Sensors ----------------------*/

//----------------ACCELEROMETER (GRAVITY)

Blockly.Blocks['get_phone_accel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gravity")
        .appendField(new Blockly.FieldDropdown([["X","0"],["Y","1"],["Z","2"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['get_phone_accel'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'get_phone_sensor(\'GRAVITY\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['get_phone_accel'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'get_sensor(\'GRAVITY\',\''+dropdown_channel+'\')';
  return [code, Blockly.Python.ORDER_NONE];
};




//----------------ROTATION (ACCELEROMETER+GYRO+COMPASS fusion sensor)

Blockly.Blocks['get_phone_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Phone's Rotation")
        .appendField(new Blockly.FieldDropdown([["X","0"],["Y","1"],["Z","2"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Measure phone's angle of rotation ");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['get_phone_rotation'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'get_phone_sensor(\'ROTATION\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['get_phone_rotation'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'get_phone_sensor(\'ROTATION\',\''+dropdown_channel+'\')';
  return [code, Blockly.Python.ORDER_NONE];
};



//----------------Luminosity (Inbuilt lux meter of phone)

Blockly.Blocks['get_phone_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Phone's sensor")
        .appendField(new Blockly.FieldDropdown([["LUMINOSITY","0"]]), "CHANNEL");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Measure phone's angle of rotation ");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['get_phone_light'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'get_phone_sensor(\'LUMINOSITY\',\''+dropdown_channel+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['get_phone_light'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'get_phone_sensor(\'LUMINOSITY\',\''+dropdown_channel+'\')';
  return [code, Blockly.Python.ORDER_NONE];
};


/*---------------------- Plot against Time ---------------*/


Blockly.Blocks['plot_datapoint'] = {
  init: function() {
    this.appendValueInput("YAXIS")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y-Label:")
    this.appendValueInput("VALUE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PLOT VALUE:")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Plot datapoint against time");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['plot_datapoint'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = 'waitForSeconds(0.001);'+'plot('+value+')\n';
  
  return code;
};


Blockly.Python['plot_datapoint'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = 'plot('+value+')\n';

  return code;
};



/*---------------------- Plot plot_xyarray ---------------*/


Blockly.Blocks['plot_xyarray'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PLOT ARRAY [X[],Y[]]:")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Plot X, Y arrays");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['plot_xyarray'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = 'waitForSeconds(0.001);'+'plot_xyarray('+value+')\n';
  
  return code;
};


Blockly.Python['plot_xyarray'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = 'plot_xyarray('+value+')\n';

  return code;
};



/*---------------------- Plot plot_xyyarray ---------------*/


Blockly.Blocks['plot_xyyarray'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PLOT ARRAY [X[],Y1[], Y2[]]:")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Plot X, Y , Y2 arrays");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['plot_xyyarray'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = 'waitForSeconds(0.001);'+'plot_xyyarray('+value+')\n';
  
  return code;
};


Blockly.Python['plot_xyyarray'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = 'plot_xyyarray('+value+')\n';

  return code;
};


/*---------------------- Plot XY ---------------*/


Blockly.Blocks['plot_xy'] = {
  init: function() {
    this.appendValueInput("X")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X:")
    this.appendValueInput("Y")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Plot X, Y");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['plot_xy'] = function(block) {
  var vx = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
  var vy = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
  var code = 'waitForSeconds(0.001);'+'plot_xy('+vx+','+vy+')\n';
  
  return code;
};


Blockly.Python['plot_xy'] = function(block) {
  var vx = Blockly.JavaScript.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
  var vy = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);
  var code = 'plot_xy('+vx+','+vy+')\n';

  return code;
};




/*---------------------- Polar Plot ---------------*/


Blockly.Blocks['plot_radar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Polar Plot")
    this.appendValueInput("MAXRADIUS")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Maximum Radius:")
    this.appendValueInput("RADIUS")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RADIUS:")
    this.appendValueInput("ANGLE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ANGLE(Deg):")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Plot R, Theta");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['plot_radar'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_NONE);
  var radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_NONE);
  var maxrad = Blockly.JavaScript.valueToCode(block, 'MAXRADIUS', Blockly.JavaScript.ORDER_NONE);
  var code = 'waitForSeconds(0.001);'+'plot_radar('+angle+','+radius+','+maxrad+');\n';
  
  return code;
};


Blockly.Python['plot_radar'] = function(block) {
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE);
  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_NONE);
  var maxrad = Blockly.Python.valueToCode(block, 'MAXRADIUS', Blockly.Python.ORDER_NONE);
  var code = 'plot_radar('+angle+','+radius+','+maxrad+')\n';

  return code;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Example "wait" block that will pause the interpreter for a
 * number of seconds. Because wait is a blocking behavior, such blocks will
 * only work in interpreted environments.
 *
 * See https://neil.fraser.name/software/JS-Interpreter/docs.html
 */
Blockly.defineBlocksWithJsonArray([{
  "type": "wait_seconds",
  "message0": " wait %1 seconds",
  "args0": [{
    "type": "field_number",
    "name": "SECONDS",
    "min": 0,
    "max": 600,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

/**
 * Generator for wait block creates call to new method
 * <code>waitForSeconds()</code>.
 */
Blockly.JavaScript['wait_seconds'] = function(block) {
  var seconds = Number(block.getFieldValue('SECONDS'));
  var code = 'waitForSeconds(' + seconds + ');\n';
  return code;
};

Blockly.Python['wait_seconds'] = function(block) {
  var seconds = Number(block.getFieldValue('SECONDS'));
  var code = 'time.sleep(' + seconds + ')\n';
  return code;
};




//-------------------- API ------------------------



	function initApi(interpreter, scope) {
			/*Patch it
			 * // Desperate attempt at infiltrating the sandbox. Didn't work
		  patchInterpreter(Interpreter);			
		  InterfaceDictionary={'get_voltage':'MyJavascriptInterface.get_voltage'};		  
		  interpreter.setProperty(scope, 'MyJavascriptInterface', interpreter.createConnectedObject(MyJavascriptInterface), interpreter.READONLY_DESCRIPTOR);
		  //interpreter.setProperty(scope,'MyJavascriptInterface', MyJavascriptInterface);
		  */

		  // Add an API function for highlighting blocks.
		  var wrapper = function(id) {
			return workspacePlayground.highlightBlock(id);
		  };
		  interpreter.setProperty(scope, 'highlightBlock',
			  interpreter.createNativeFunction(wrapper));

		  // Add an API function for the (alert) print() block.
		  var wrapper = function(text) {
			return document.getElementById("resulttext").innerHTML+=text+"<br>";
		  };
		  interpreter.setProperty(scope, 'alert',
			  interpreter.createNativeFunction(wrapper));

		  // Add an API function for the alert() block.
		  /*
		  var wrapper = function(text) {
			return alert(arguments.length ? text : '');
		  };
		  interpreter.setProperty(scope, 'alert',
			  interpreter.createNativeFunction(wrapper));
		  */


		  // Add an API function for the prompt() block.
		  var wrapper = function(text) {
			text = text ? text.toString() : '';
			return interpreter.createPrimitive(prompt(text));
		  };

		  interpreter.setProperty(scope, 'prompt',
			  interpreter.createNativeFunction(wrapper));



		  // Add an API for the wait block.  See wait_block.js
		  Blockly.JavaScript.addReservedWords('waitForSeconds');
		  var wrapper = interpreter.createAsyncFunction(
			function(timeInSeconds, callback) {
			  // Delay the call to the callback.
			  setTimeout(callback, timeInSeconds * 1000);
			});
		  interpreter.setProperty(scope, 'waitForSeconds', wrapper);

		  // Add an API function for highlighting blocks.
		  var wrapper = function(id) {
			id = id ? id.toString() : '';
			return interpreter.createPrimitive(highlightBlock(id));
		  };
		  interpreter.setProperty(scope, 'highlightBlock',
			  interpreter.createNativeFunction(wrapper));

			// PLOT CALLS
		  // Add an API for the plot call
		  Blockly.JavaScript.addReservedWords('plot');
		  interpreter.setProperty(scope, 'plot', interpreter.createNativeFunction(
				function( value) {
				  return addDataPoint(value);
				})
			);

		  // Add APIs for the sine fit analysis calls
		  Blockly.JavaScript.addReservedWords('capture_analysis');
		  interpreter.setProperty(scope, 'capture_analysis', interpreter.createNativeFunction(
				function(param) {
				  return MyJavascriptInterface.capture_analysis(param);
				})
			);

		  // Add APIs for the sine fit analysis calls
		  Blockly.JavaScript.addReservedWords('capture_analysis_dual');
		  interpreter.setProperty(scope, 'capture_analysis_dual', interpreter.createNativeFunction(
				function(param) {
				  return MyJavascriptInterface.capture_analysis_dual(param);
				})
			);

		  // Add an API for the XY plot call
		  Blockly.JavaScript.addReservedWords('plot_xy');
		  interpreter.setProperty(scope, 'plot_xy', interpreter.createNativeFunction(
				function( vx,vy) {
				  return addDataPointXY(vx,vy);
				})
			);


		  // Add an API for the XY array plot call
		  Blockly.JavaScript.addReservedWords('plot_xyarray');
		  interpreter.setProperty(scope, 'plot_xyarray', interpreter.createNativeFunction(
				function( mydata) {
				  return plotArraysXY(mydata);
				})
			);
		  // Add an API for the XYY array plot call
		  Blockly.JavaScript.addReservedWords('plot_xyyarray');
		  interpreter.setProperty(scope, 'plot_xyyarray', interpreter.createNativeFunction(
				function( mydata) {
				  return plotArraysXYY(mydata);
				})
			);

		  // Add an API for the Polar plot call
		  Blockly.JavaScript.addReservedWords('plot_radar');
		  interpreter.setProperty(scope, 'plot_radar', interpreter.createNativeFunction(
				function( angle,radius, maxrad) {
				  return addDataPointPolar(angle,radius, maxrad);
				})
			);


          // EXPEYES API CALLS

		  // Add an API for the get_voltage call
		  Blockly.JavaScript.addReservedWords('get_voltage');
		  interpreter.setProperty(scope, 'get_voltage', interpreter.createNativeFunction(
				function(channel) {
				  return MyJavascriptInterface.get_voltage(channel);
				})
			);


		  // Add an API for the set_voltage call
		  Blockly.JavaScript.addReservedWords('set_voltage');
		  interpreter.setProperty(scope, 'set_voltage', interpreter.createNativeFunction(
				function(channel, value) {
				  return MyJavascriptInterface.set_voltage(channel,value);
				})
			);

		  // Add an API for the get_frequency call
		  Blockly.JavaScript.addReservedWords('get_frequency');
		  interpreter.setProperty(scope, 'get_frequency', interpreter.createNativeFunction(
				function(channel) {
				  return MyJavascriptInterface.get_frequency(channel);
				})
			);

		  // Add an API for the multi_r2r call
		  Blockly.JavaScript.addReservedWords('multi_r2r');
		  interpreter.setProperty(scope, 'multi_r2r', interpreter.createNativeFunction(
				function(channel,edges,timeout) {
				  return MyJavascriptInterface.multi_r2r(channel,edges,timeout);
				})
			);



		  // Add an API for the capture block.  copied from wait_block. Async attempt
		  Blockly.JavaScript.addReservedWords('capture1');
		  var wrapper = function capture1(channel, ns, tg, callback) {
			  callback(MyJavascriptInterface.capture1(channel , ns ,tg));
		  };
		  interpreter.setProperty(scope, 'capture1', interpreter.createAsyncFunction(wrapper));

		  // Add an API for the capture block.  copied from wait_block. Async attempt
		  Blockly.JavaScript.addReservedWords('capture2');
		  var wrapper = function capture2(channel, ns, tg, callback) {
			  callback(MyJavascriptInterface.capture2(channel , ns ,tg));
		  };
		  interpreter.setProperty(scope, 'capture2', interpreter.createAsyncFunction(wrapper));

		  // Add an API for the trigger block.  
		  Blockly.JavaScript.addReservedWords('scope_trigger');
		  var wrapper = function scope_trigger(channel, level, state) {
			  return MyJavascriptInterface.scope_trigger(channel ,level, state);
		  };
		  interpreter.setProperty(scope, 'scope_trigger', interpreter.createNativeFunction(wrapper));


		  // Add an API for the set_frequency call
		  Blockly.JavaScript.addReservedWords('set_frequency');
		  interpreter.setProperty(scope, 'set_frequency', interpreter.createNativeFunction(
				function(channel, value) {
				  return MyJavascriptInterface.set_frequency(channel,value);
				})
			);

		  // Add an API for the set_state call
		  Blockly.JavaScript.addReservedWords('set_state');
		  interpreter.setProperty(scope, 'set_state', interpreter.createNativeFunction(
				function(channel, value) {
				  return MyJavascriptInterface.set_state(channel,value);
				})
			);


		  // Add an API for the get_sensor call
		  Blockly.JavaScript.addReservedWords('get_sensor');
		  interpreter.setProperty(scope, 'get_sensor', interpreter.createNativeFunction(
				function(sensor,param) {
				  return MyJavascriptInterface.get_sensor(sensor,param);
				})
			);

		  // Add an API for the set_PCA9685 call
		  Blockly.JavaScript.addReservedWords('set_PCA9685');
		  interpreter.setProperty(scope, 'set_PCA9685', interpreter.createNativeFunction(
				function(channel, value) {
				  return MyJavascriptInterface.set_PCA9685(channel,value);
				})
			);

		  // Add an API for the set_servo call
		  Blockly.JavaScript.addReservedWords('set_servo');
		  interpreter.setProperty(scope, 'set_servo', interpreter.createNativeFunction(
				function(channel, value) {
				  return MyJavascriptInterface.set_servo(channel,value);
				})
			);

		  // Add an API for the get_phone_sensor call
		  Blockly.JavaScript.addReservedWords('get_phone_sensor');
		  interpreter.setProperty(scope, 'get_phone_sensor', interpreter.createNativeFunction(
				function(sensor,param) {
				  return MyJavascriptInterface.get_phone_sensor(sensor,param);
				})
			);



	}



