Blockly.Blocks['background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fondo");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("crearCanvas");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("ancho");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("alto");
    this.appendValueInput("canvas")
        .setCheck("String")
        .appendField("canvas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dibujar");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("hacer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("elipse");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("a");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('Dibuja una elipse en la pantalla. ');
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};Blockly.Blocks['fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("llenar");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseX");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseY");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("rect");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("b");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("línea");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("x1");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("x2");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setear");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("hacer");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('The setup() function is called once when the program starts.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/setup');
  }
};