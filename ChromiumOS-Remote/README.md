# ChromiumOS Remote
Use your Micro:bit to control a device running ChromeOS

It works now!

## Basic Blocks
visit %url - opens a new tab and visits a site
close the current window - closes the entire window
toggle spoken feedback - turns ChromeVox(R) on or off
find %query on page - looks for the query in the page. Also uses the Find dialog in Google Docs, Google Drive, CodeMirror, MakeCode, Monaco, VSCode, Replit, etc
open feedback window - launches the 'send feedback' page.

## Launcher Blocks
show start menu - shows the Start Menu (if enabled in flags) or the fullscreen launcher.
start %index pinned app - launches an app from the taskbar
show notification tray - shows control/notif tray

## Advanced Blocks
sign out - signs out of the device (doesn't just lock it)
start task manager - opens task manager
start diagnostics - shows CrOS Diagnostics
create new workspace - creates a new workspace (or desk, as Google calls it)
inspect site - opens the Chrome DevTools
induce browser crash for realz - crashes the device. Equivalent of visiting `chrome://inducebrowsercrashforrealz`.
