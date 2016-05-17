# RaspBerry Pi GPIO 

## About GPIO
The Raspberry Pi provides Input/Outport ports 
intended to control or monitor other devices and 
subsystem modules. These `GPIO` (general purpose I/O) 
signals on the 2×13 header pins on the RPi motherboad  
include SPI, I2C, serial UART, 3V3 and 5V power.

## Interaction
You can control these GPIO pins on the raspi if you have installed
the DigitalTrainingStudio on your Raspberry via node.js

## Install

```
sudo npm install -g digitalstudio
````

This takes a whiule on a raspbery B+ 2 but should success.

## Start the server on the raspi
after this you can start the DigitalTrainingStudio server on the raspberry
with

```
digitalstudio 
```

## Connect with the browser

After this the DigitalTrainingStudio echos the url on the console 
how to connect with your browser to the Raspi.

Now you can drive the GPIO pins on raspi with the DigitalTrainingStudio

