const path = require("path")
var ws = require('windows-shortcuts');

module.exports = class IconChangerPlugin {
    constructor(env) {
        // Define plugin enviornment within the class
        this.env = env
    }

    // Called when the backend is ready
    onReady(win) {
    }

    // Called when the renderer is ready (app.init())
    onRendererReady(win) {
        ws.edit(path.join(process.env.APPDATA, "Microsoft\\Windows\\Start Menu\\Programs\\Cider.lnk"), {icon : path.join(this.env.dir, "icon.ico")});
    }
}