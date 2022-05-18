enum TabCreationType {
    //% block="tab"
    regular = 0,
    //% block="window"
    seperate = 1,
    //% block="incognito window"
    private = 2,
}

enum Side {
    //% block="left"
    Left,
    //% block="right"
    Right
}

enum BookMarkOptions {
    //% block="all tabs"
    All,
    //% block="current tab"
    Focused
}

enum Switch {
    //% block="on"
    On = 1,
    //% block="off"
    Off = 0
}

enum BfCache {
    //% block="backward"
    Back,
    //% block="forward"
    Forward
}

enum PinnedTaskbarItem {
    //% block="first"
    First = "1",
    //% block="second"
    Second = "2",
    //% block="third"
    Third = "3",
    //% block="fourth"
    Fourth = "4",
    //% block="fifth"
    Fifth = "5",
    //% block="last"
    Last = "9"
}

enum ScreenSize {
    //% block="higher"
    Higher = 0,
    //% block="lower"
    Lower = 1,
    //% block="normal"
    Reset = 2
}



enum DevToolsPanel {
    //% block="JavaScript Console"
    DeveloperConsole,
    //% block="Developer Tools"
    DevTools,
}



keyboard.startKeyboardService()
mouse.startMouseService()
absmouse.startAbsoluteMouseService()
media.startMediaService()

//% block="ChromiumOS" weight=70 icon="\uf268" color=#48a0f0
//% groups=['App Launcher','Windows','Workspaces','Clipboard','Media','Power',Developer Tools','Accessibility','Help','other']
namespace chrome {
    //% block="new %tab"
    export function createTab(type: TabCreationType) {
        //keyboard.releaseKeys()
        if (type == TabCreationType.private) {
            shortcut(
                true,
                false,
                false,
                'n',
                true
            )
            return
        }
        if (type == TabCreationType.seperate) {
            shortcut(
                true,
                false,
                false,
                'n'
            )
            return
        }
        shortcut(
            true,
            false,
            false,
            't'
        )
    }
    //% block="toggle spoken feedback" group='Accessibility'
    export function toggleChromeVox() {
        shortcut(
            true,
            true,
            false,
            'z'
        )
    }
    //% block="make screen resolution %size" group='Accessibility'
    export function makeScreenSize(size: ScreenSize) {
        shortcut(
            true,
            false,
            false,
            CrOS.display.sizez[size],
            true
        )
    }
    let CrOS = {
        display: {
            sizez: [
                "=",
                "-",
                "0"
            ]
        }
    }
    function hold(ctrl: boolean, alt: boolean, search: boolean, shift: boolean = false) {
        let keys = ""
        if (ctrl) {
            keys += keyboard.modifiers(keyboard._Modifier.control)
        }
        if (alt) {
            keys += keyboard.modifiers(keyboard._Modifier.alt)
        }
        if (search) {
            keys += keyboard.modifiers(keyboard._Modifier.windows)
        }
        if (shift) {
            keys += keyboard.modifiers(keyboard._Modifier.shift)
        }
        keyboard.sendSimultaneousKeys(keys, true)
        return keys
    }
    function shortcut(ctrl: boolean, alt: boolean, search: boolean, text: string, shift: boolean = false) {
        let keys = hold(ctrl, alt, search, shift)
        shortcut
        keyboard.sendString(keys + text)
        keyboard.releaseKeys()
    }
    //% block="bookmark current tab"
    export function bookmarkTab() {
        shortcut(
            true,
            false,
            false,
            'd'
        )
    }
    //% block="bookmark all tabs"
    export function bookmarkOpenTabs() {
        shortcut(
            true,
            false,
            false,
            'd',
            true
        )
    }
    //% block="launch help center" group='Help'
    export function startHelpCenter() {
        shortcut(
            true,
            false,
            false,
            '/'
        )
    }
    //% block="navigate back" group='Web Navigation'
    export function navigateBack() {
        shortcut(
            false,
            true,
            false,
            keyboard.keys(
                keyboard._Key.left
            )
        )
    }
    //% block="shut down chromium" group='Power'
    export function shutDown() {
        /*
        To-do: send the ACPI shutdown signal
        */
    }
    let IsDoNotDisturbLightOn:boolean=false
    //% block="do not disturb enabled"
    export function doNotDisturbEnabled() {
        return IsDoNotDisturbLightOn
    }
    //% block="navigate forward" group='Web Navigation'
    export function navigateForward() {
        shortcut(
            false,
            true,
            false,
            keyboard.keys(
                keyboard._Key.right
            )
        )
    }
    //% block="refresh page" group='Web Navigation'
    export function refreshSite() {
        shortcut(
            true,
            false,
            false,
            'r'
        )
    }
    //% block="force-refresh page" group='Web Navigation'
    export function forceReloadSite() {
        shortcut(
            true,
            false,
            false,
            'R',
            true
        )
    }
    //% block="display keyboard shortcuts" group='Help'
    export function showKeyboardShortcuts() {
        shortcut(
            true,
            true,
            false,
            '/'
        )
    }
    //% block="display feedback window" group='Help'
    export function openFeedBackDialog() {
        shortcut(
            false,
            true,
            false,
            'I',
            true
        )
    }
    //% block="dock window to the %dir" group="Windows"
    export function dockWindowTo(dir: Side) {
        if (dir == Side.Left) {
            shortcut(
                false,
                true,
                false,
                "["
            )
        } else {
            shortcut(
                false,
                true,
                false,
                "]"
            )
        }
    }
    //% block="close the focused window" group='Windows'
    export function closeWindow() {
        shortcut(
            true,
            false,
            false,
            "W",
            true
        )
    }
    let batteryLevel:number=100
    //% block="device battery level" group='Power'
    export function getBatteryLevel() {
        return batteryIsLow
    }
    //% block="close the focused tab" group='Windows'
    export function closeTab() {
        shortcut(
            true,
            false,
            false,
            "w"
        )
    }
    //% block="maximize the focused window" group='Windows'
    export function maximizeWindow() {
        shortcut(
            false,
            true,
            false,
            "="
        )
    }
    //% block="minimize the focused window" group='Windows'
    export function hideWindow() {
        shortcut(
            false,
            true,
            false,
            "-"
        )
    }
    //% block="toggle high contrast" group='Accessibility'
    export function toggleHighCst() {
        shortcut(
            true,
            false,
            true,
            'h'
        )
    }
    //% block="set volume to %level percent" group='Media'
    export function setVolume(level: number) {
        // Must be in increments of 4, ChromeOS likes that
        for (let i = 0; i < 26; i++) {
            media.sendCode(MediaKey.vol_down)
        }
        for (let i = 0; i < Math.floor(level / 4); i++) {
            media.sendCode(MediaKey.vol_up)
        }
    }
    //% block="increment volume" group='Media'
    export function incrementVolume() {
        media.sendCode(MediaKey.vol_up)
    }
    //% block="decrease volume" group='Media'
    export function lowerVolume() {
        media.sendCode(MediaKey.vol_down)
    }
    //% block="mute chromium" group='Media'
    export function mute() {
        media.sendCode(MediaKey.mute)
    }
    //% block="start the explorer" group='App Launcher'
    export function startFileExplorer() {
        shortcut(
            false,
            true,
            false,
            "M",
            true
        )
    }
    //% block="toggle media" group='Media'
    export function toggleMedia() {
        media.sendCode(
            MediaKey.playPause
        )
    }
    //% block="Go to the next track" group='Media'
    export function nextTrack() {
        media.sendCode(
            MediaKey.next
        )
    }
    //% block="Go to the previous track" group='Media'
    export function prevTrack() {
        media.sendCode(
            MediaKey.previous
        )
    }
    //% block="sign out" group='Power'
    export function signOut() {
        shortcut(
            true,
            false,
            false,
            'Q',
            true
        )
        basic.pause(3)
        shortcut(
            true,
            false,
            false,
            'Q',
            true
        )
    }
    //% block="visit %url" group='App Launcher'
    //% url.defl="https://www.google.com/"
    export function visit(url: string) {
        createTab(TabCreationType.regular)
        basic.pause(1)
        typeText(url)
        basic.pause(2)
        keyboard.sendString(
            keyboard.keys(keyboard._Key.enter)
        )
    }
    //% block="inspect site with %tool" group='Developer Tools'
    function inspectSiteWith(tool: DevToolsPanel) {
        if (tool == DevToolsPanel.DeveloperConsole) {
            shortcut(
                true,
                false,
                false,
                'J',
                true
            )
            return
        }
        shortcut(
            true,
            false,
            false,
            'J',
            true
        )
    }
    //% block="start Google Assistant" group='App Launcher'
    export function googleAssistant() {
        hold(false, false, true)
        shortcut(
            false,
            false,
            true,
            'a',
        )
    }
    //% block="open JavaScript console" group='Developer Tools'
    export function showConsole() {
        inspectSiteWith(DevToolsPanel.DeveloperConsole)
    }
    //% block="inspect tab" group='Developer Tools'
    export function inspectSite() {
        inspectSiteWith(DevToolsPanel.DevTools)
    }
    //% block="toggle docked magnifier"  group='Accessibility'
    export function toggleDockedLens() {
        shortcut(
            true,
            false,
            true,
            'd'
        )
    }
    //% block="toggle fullscreen magnifier"  group='Accessibility'
    export function toggleFullScreenLens() {
        shortcut(
            true,
            false,
            true,
            'm'
        )
    }
    //% block="create new workspace" group='Workspaces'
    export function createDesk() {
        shortcut(
            false,
            false,
            true,
            "=",
            true
        )
    }
    //% block="switch to next workspace" group='Workspaces'
    export function switchToNextDesk() {
        shortcut(
            false,
            false,
            true,
            "]"
        )
    }
    let eventListeners:{event:string,handler:()=>any}[]=[]
    //% block="when battery becomes low" group='Power'
    export function onLowBattery(func:() => any) {
        eventListeners.push({
            event:'chromium-low-battery',
            handler:func
        })
    }
    let lowBatteryLightOn:boolean=false
    //% block="battery is low" group='Power'
    export function batteryIsLow() {
        return lowBatteryLightOn
    }
    function emitEvent(eventName:string) {
        for(let i=0;i<eventListeners.length;i++){
            if(eventListeners[i].event==eventName){
                eventListeners[i].handler()
            }
        }
    }
    //% block="switch to previous workspace" group='Workspaces'
    export function switchToPrevDesk() {
        shortcut(
            false,
            false,
            true,
            "["
        )
    }
    //% block="show downloads"
    export function displayDownloads() {
        shortcut(
            true,
            false,
            false,
            'j'
        )
    }
    //% block="show history"
    export function displayBrowsingHistory() {
        shortcut(
            true,
            false,
            false,
            'h'
        )
    }
    //% block="find %query on page"
    //% query.defl="my father"
    export function findOnPage(query: string) {
        shortcut(
            true,
            false,
            false,
            'f'
        )
        typeText(query)
    }
    function typeText(text: string) {
        let upper = {
            ':': ";",
            '+': '=',
            '_': '-',
            '~': '`',
            '"': '\'',
            '{': '[',
            '}': ']',
            '|': '\\',
            '<': ',',
            '>': '.',
            '?': '/',
            '!': '1',
            '@': '2',
            '#': '3',
            '$': '4',
            '%': '5',
            '^': '6',
            '&': '7',
            '*': '8',
            '(': '9',
            ')': '0'
        }
        let lower = [
            ";",
            '=',
            '-',
            '`',
            '\'',
            '[',
            ']',
            '\\',
            ',',
            '.',
            '/',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0'
        ]
        let letters = 'abcdefghijklmnopqrstuuvwxyz';
        for (let i = 0; i < text.length; i++) {
            if (text[i] == ":") {
                shortcut(
                    false,
                    false,
                    false,
                    ":",
                    true
                )
            } else if (letters.indexOf(text[i].toLowerCase()) > -1) {
                if (text[i].toLowerCase() != text[i]) {
                    keyboard.sendString(
                        keyboard.modifiers(keyboard._Modifier.shift) + text[i].toLowerCase()
                    )
                } else {
                    keyboard.sendString(text[i])
                }
            } else if (
                Object.keys(upper).indexOf(text[i]) > -1
            ) {
                keyboard.sendString(
                    keyboard.modifiers(
                        keyboard._Modifier.shift
                    ) + lower[Object.keys(upper).indexOf(text[i])]
                )
            } else {
                keyboard.sendString(text[i])
            }
        }
    }
    //% block="lock device" group='Power'
    export function lock() {
        shortcut(
            false,
            false,
            true,
            'l'
        )
    }
    //% block="start/stop dictation" group='Accessibility'
    export function startOrStopDictation() {
        shortcut(
            false,
            false,
            true,
            'd'
        )
    }
    //% block="suspend device" group='Power'
    export function sleep() {
        shortcut(
            false,
            false,
            true,
            'L',
            true
        )
    }
    //% block="display the start menu" group='App Launcher'
    export function startMenu() {
        shortcut(
            false,
            false,
            false,
            keyboard.modifiers(keyboard._Modifier.windows),
            true
        )
    }
    //% block="show clipboard contents" group='Clipboard'
    export function displayClipboard() {
        shortcut(
            false,
            false,
            true,
            'v'
        )
    }
    //% block="start task manager" group='Developer Tools'
    export function startTaskMan() {
        shortcut(
            false,
            false,
            true,
            keyboard.keys(
                keyboard._Key.escape
            )
        )
    }
    //% block="display system diagnostics" group='Developer Tools'
    export function startDiagnostics() {
        shortcut(
            true,
            false,
            true,
            keyboard.keys(
                keyboard._Key.escape
            )
        )
    }
    //% block="copy to clipboard" group='Clipboard'
    export function clipboardCopy() {
        shortcut(
            true,
            false,
            false,
            'c'
        )
    }
    //% block="cut to clipboard" group='Clipboard'
    export function clipboardCut() {
        shortcut(
            true,
            false,
            false,
            'x'
        )
    }
    //% block="paste from clipboard" group='Clipboard'
    export function clipboardPaste() {
        shortcut(
            true,
            false,
            false,
            'v'
        )
    }
    //% block="display emoji picker" group='Clipboard'
    export function displayEmotePicker() {
        shortcut(
            false,
            false,
            true,
            " ",
            true
        )
    }
    //% block="launch %index pinned app" group='App Launcher'
    export function startPinnedApp(index: PinnedTaskbarItem) {
        hold(false, true, false)
        keyboard.sendString(
            index
        )
        keyboard.releaseKeys()
    }
    //% block="reset zoom level"
    export function resetZoom() {
        shortcut(
            true,
            false,
            false,
            '0'
        )
    }
    //% block="increase zoom level"
    export function zoomIn() {
        shortcut(
            true,
            false,
            false,
            '='
        )
    }
    //% block="decrease zoom level"
    export function zoomOut() {
        shortcut(
            true,
            false,
            false,
            '='
        )
    }
    //% block="toggle caps lock"
    export function toggleCapsLock() {
        shortcut(
            false,
            true,
            false,
            keyboard.modifiers(
                keyboard._Modifier.windows
            )
        )
    }
    //% block="induce browser crash for realz" advanced=true
    export function induceBrowserCrashForRealz() {
        createTab(TabCreationType.regular)
        typeText("chrome://inducebrowsercrashforrealz")
        keyboard.sendString(
            keyboard.keys(keyboard._Key.enter)
        )
    }
    //% block="start the Crosh shell" group='Developer Tools'
    export function startCrosh() {
        shortcut(
            true,
            true,
            false,
            't'
        )
    }
    //% block="display the notification tray" group='App Launcher'
    export function displayTray() {
        shortcut(
            false,
            true,
            false,
            'S',
            true
        )
    }
}
