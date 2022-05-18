enum ActionKeyColor {
    //% block="red"
    Red,
    //% block="green"
    Green,
    //% block="yellow"
    Yellow,
    //% block="blue"
    Blue
}



enum VolumeAdjust {
    //% block='up'
    Up,
    //% block='down'
    Down,
    //% block='off',
    Mute
}

enum InternetClick {
    //% block="left click"
    Left,
    //% block="wheel click"
    Middle,
    //% block="context menu"
    Right
}

enum Channel {
    //% block="next channel"
    Next,
    //% block="previous channel"
    Prev,
    //% block="guide"
    Guide
}

enum DirectionKey {
    up,down,left,right
}
keyboard.startKeyboardService()
media.startMediaService()
mouse.startMouseService()

//% block="QLED Tizen" icon="\uf26c" color=#ca41d1
//% groups=["Samsung Internet","Samsung TV Plus",'other']
namespace qled {
    //% block="press %color action key"
    export function pressActionKey(key:ActionKeyColor) {
        if (key == ActionKeyColor.Red) {
            keyboard.sendString(
                keyboard.rawScancode(112)
            )
        }
        if (key == ActionKeyColor.Green) {
            keyboard.sendString(
                keyboard.rawScancode(113)
            )
        }
        if (key == ActionKeyColor.Blue) {
            keyboard.sendString(
                keyboard.rawScancode(114)
            )
        }
        if (key == ActionKeyColor.Yellow) {
            keyboard.sendString(
                keyboard.rawScancode(115)
            )
        }
    }
    //% block="show home menu"
    export function home() {
        keyboard.sendString(
            keyboard.rawScancode(116)
        )
    }
    //% block="go back/exit"
    export function sendExitSignal() {
        keyboard.sendString(
            keyboard.keys(keyboard._Key.escape)
        )
    }
    //% block="click selected item"
    export function clickSelectedItem() {
        keyboard.sendString(
            keyboard.keys(keyboard._Key.enter)
        )
    }
    //% block="show source menu"
    export function displaySources() {
        keyboard.sendString(
            keyboard.rawScancode(117)
        )
    }
    //% block="move pointer up %many" group='Samsung Internet'
    export function internetPointerUp(many: number) {
        mouse.movexy(0, many)
    }
    //% block="move pointer down %many" group='Samsung Internet'
    export function internetPointerDown(many: number) {
        mouse.movexy(0, 0-many)
    }
    //% block="move pointer left %many" group='Samsung Internet'
    export function internetPointerLeft(many: number) {
        mouse.movexy(many,0)
    }
    //% block="move pointer right %many" group='Samsung Internet'
    export function internetPointerRight(many: number) {
        mouse.movexy(0- many,0)
    }
    //% block="place number %int"
    //% int.min=0 int.max=9
    export function placeInt(int:number) {
        keyboard.sendString(
            int.toString()
        )
    }
    //% block="go to the %channel" group='Samsung TV Plus'
    export function tvPlusGoTo(channel:Channel) {
        if (channel == Channel.Next) {
            keyboard.sendString(
                keyboard.rawScancode(
                    123
                )
            )
        }
        if (channel == Channel.Next) {
            keyboard.sendString(
                keyboard.rawScancode(
                    122
                )
            )
        }
        if (channel == Channel.Guide) {
            keyboard.sendString(
                keyboard.rawScancode(
                    118
                )
            )
        }
    }
    //% block="move focus %dir"
    export function moveFocus(dir:DirectionKey) {
        //todo
        if (dir == DirectionKey.up) {
            keyboard.sendString(
                keyboard.keys(keyboard._Key.up)
            )
        }
        if (dir == DirectionKey.down) {
            keyboard.sendString(
                keyboard.keys(keyboard._Key.down)
            )
        }
        if (dir == DirectionKey.left) {
            keyboard.sendString(
                keyboard.keys(keyboard._Key.left)
            )
        }
        if (dir == DirectionKey.right) {
            keyboard.sendString(
                keyboard.keys(keyboard._Key.right)
            )
        }
    }
    //% block="turn volume %way"
    export function adjustVolume(way:VolumeAdjust) {
        if (way == VolumeAdjust.Up) {
            keyboard.sendString(
                keyboard.rawScancode(121)
            )
        }
        if (way == VolumeAdjust.Down) {
            keyboard.sendString(
                keyboard.rawScancode(120)
            )
        }
        if (way == VolumeAdjust.Mute) {
            keyboard.sendString(
                keyboard.rawScancode(119)
            )
        }
    }
    //% block="dispatch a %click" group='Samsung Internet'
    export function dispatchInternetClick(click: InternetClick) {
        if (click == InternetClick.Left) {
            mouse.click()
        }
        if (click == InternetClick.Right) {
            mouse.rightClick()
        }
        if (click == InternetClick.Middle) {
            mouse.middleClick()
        }
    }
}
