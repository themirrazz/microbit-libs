enum TabCreationType {
    //% block="tab"
    regular = 0,
    //% block="window"
    seperate = 1,
    //% block="private window"
    private = 2,
}

enum BookMarkOptions {
    //% block="all tabs"
    All,
    //% block="current tab"
    Focused
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
//% groups=['Developer Tools','Accessibility','other']
namespace chrome {
    //% block="new %tab"
    export function createTab(type: TabCreationType) {
        //keyboard.releaseKeys()
        if (type == TabCreationType.private) {
            keyboard.sendSimultaneousKeys(
                keyboard.modifiers(keyboard._Modifier.control),
                true
            )
            keyboard.sendString('N')
            keyboard.releaseKeys()
            return
        }
        if (type == TabCreationType.seperate) {
            keyboard.sendSimultaneousKeys(
                keyboard.modifiers(keyboard._Modifier.control),
                true
            )
            keyboard.sendString('n')
            keyboard.releaseKeys()
            return
        }
        keyboard.sendSimultaneousKeys(
            keyboard.modifiers(keyboard._Modifier.control),
            true
        )
        keyboard.sendString('t')
        keyboard.releaseKeys()
    }
    //% block="toggle spoken feedback" group='Accessibility'
    export function toggleChromeVox() {
        hold(true,true,false)
        keyboard.sendString('z')
        keyboard.releaseKeys()
    }
    function hold(ctrl:boolean,alt:boolean,search:boolean) {
        let keys=""
        if (ctrl) {
            keyboard.sendSimultaneousKeys(keys+keyboard.modifiers(keyboard._Modifier.control), true)
            pause(1000)
            keys += keyboard.modifiers(keyboard._Modifier.control)
        }
        if (alt) {
            keyboard.sendSimultaneousKeys(keys+keyboard.modifiers(keyboard._Modifier.alt), true)
            pause(1000)
            keys += keyboard.modifiers(keyboard._Modifier.alt)
        }
        if (search) {
            keyboard.sendSimultaneousKeys(keys+keyboard.modifiers(keyboard._Modifier.windows), true)
            pause(1000)
        }
        pause(1000)
    }
    //% block="bookmark current tab"
    export function bookmarkTab() {
        hold(true,false,false)
        keyboard.sendString(
            "d"
        )
        keyboard.releaseKeys()
    }
    //% block="bookmark all tabs"
    export function bookmarkOpenTabs() {
        keyboard.sendString(
            ""
        )
        keyboard.releaseKeys()
    }
    //% block="toggle high contrast" group='Accessibility'
    export function toggleHighCst() {
        keyboard.sendString(
            keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.windows) + "h"
        )
        keyboard.releaseKeys()
    }
    //% block="set volume to %level percent"
    export function setVolume(level: number) {
        // Must be in increments of 4, ChromeOS likes that
        if ((level % 4) < 0) {
            for (let i = 0; i < 26; i++) {
                media.sendCode(MediaKey.vol_down)
            }
            for (let i = 0; i < (level / 4); i++) {
                media.sendCode(MediaKey.vol_up)
            }
        }
    }
    //% block="mute chromium"
    export function mute() {
        media.sendCode(MediaKey.mute)
    }

    //% block="sign out"
    export function signOut() {
        keyboard.sendString(
            keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.shift) + "Q"
        )
        basic.pause(1)
        keyboard.sendString(
            keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.shift) + "Q"
        )
        keyboard.releaseKeys()
    }
    //% block="inspect site with %tool" group='Developer Tools'
    function inspectSiteWith(tool: DevToolsPanel) {
        hold(true,false,false)
        if (tool == DevToolsPanel.DeveloperConsole) {
            keyboard.sendString(
                "J"
            );
            keyboard.releaseKeys()
            return
        }
        keyboard.sendString(
            "I"
        );
        keyboard.releaseKeys()
    }
    //% block="Google Assistant"
    export function googleAssistant() {
        hold(false,false,true)
        keyboard.sendString(
            "a"
        )
        keyboard.releaseKeys()
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
        hold(true,false,true)
        keyboard.sendString("d")
        keyboard.releaseKeys()
    }
    //% block="show downloads"
    export function displayDownloads() {
        hold(true,false,false)
        keyboard.sendString(
            "j"
        )
        keyboard.releaseKeys()
    }
    //% block="show history"
    export function displayBrowsingHistory() {
        hold(true,false,false)
        keyboard.sendString(
            "h"
        )
        keyboard.releaseKeys()
    }
    //% block="find %query on page"
    export function findOnPage(query: string) {
        hold(true,false,false)
        keyboard.sendString(
            "f"
        )
        keyboard.releaseKeys()
        keyboard.sendString(query)
    }
    //% block="lock device"
    export function lock() {
        hold(false,false,true)
        keyboard.sendString(
            "l"
        )
        keyboard.releaseKeys()
    }
    //% block="sleep device"
    export function sleep() {
        hold(false,false,true)
        keyboard.sendString(
            "L"
        )
        keyboard.releaseKeys()
    }
    //% block="show app launcher"
    export function startMenu() {
        keyboard.sendString(
            keyboard.modifiers(keyboard._Modifier.windows)
        )
    }
    //% block="show clipboard contents"
    export function displayClipboard() {
        hold(false,false,true)
        keyboard.sendString(
            'v'
        )
        keyboard.releaseKeys()
    }
    //% block="copy to clipboard"
    export function clipboardCopy() {
        hold(true, false, false)
        keyboard.sendString(
            "c"
        )
        keyboard.releaseKeys()
    }
    //% block="cut to clipboard"
    export function clipboardCut() {
        hold(true, false, false)
        keyboard.sendString(
            "x"
        )
        keyboard.releaseKeys()
    }
    //% block="paste from clipboard"
    export function clipboardPaste() {
        hold(true,false,false)
        keyboard.sendString(
            "v"
        )
        keyboard.releaseKeys()
    }
    //% block="launch %index pinned app"
    export function startPinnedApp(index: PinnedTaskbarItem) {
        hold(false,true,false)
        keyboard.sendString(
            index
        )
        keyboard.releaseKeys()
    }
    //% block="reset zoom level"
    export function resetZoom() {
        hold(true,false,false)
        keyboard.sendString(
            "0"
        )
        keyboard.releaseKeys()
    }
    //% block="increase zoom level"
    export function zoomIn() {
        hold(true,false,false)
        keyboard.sendString('=')
        keyboard.releaseKeys()
    }
    //% block="decrease zoom level"
    export function zoomOut() {
        hold(true,false,false)
        keyboard.sendString('-')
        keyboard.releaseKeys()
    }
    //% block="toggle caps lock"
    export function toggleCapsLock() {
        hold(true,false,false)
        keyboard.sendString(
            keyboard.modifiers(keyboard._Modifier.windows)
        )
        keyboard.releaseKeys()
    }
    //% block="induce browser crash for realz" advanced=true
    export function induceBrowserCrashForRealz() {
        createTab(TabCreationType.regular)
        keyboard.sendString("chrome://inducebrowsercrashforrealz")
        keyboard.sendString(
            keyboard.keys(keyboard._Key.enter)
        )
    }
    //% block="start the Crosh shell" group='Developer Tools'
    export function startCrosh() {
        hold(true,true,false)
        keyboard.sendString("t")
        keyboard.releaseKeys()
    }
    //% block="show the quick settings"
    export function quickSettings() {
        hold(false,true,false)
        keyboard.sendString('S')
        keyboard.releaseKeys()
    }
}
