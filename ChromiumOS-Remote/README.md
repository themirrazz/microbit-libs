# ChromiumOS Remote
Use your Micro:bit to control a device running ChromeOS


## How it Works
This uses Bluetooth UART and HID libraries to control ChromeOS devices. This can also interact with select Chrome Apps via UART.
Most features use the keyboard HID library.

## Known Bugs

### Select Features Don't Work Correctly
This is a problem with ChromeOS, not the program. We have a list of all features known that do not work:
Sleep Chromium - Only locks the device.
ChromeVox - Does nothing.
High Contrast - Opens history, unless website prevents with 'preventDefault'.
Control Center/Notifications - Doesn't do anything.
