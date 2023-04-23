const { BrowserWindow } = require("electron");
const path = require("path");

function createAppWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    }
  });

  win.loadFile('../weather-app/dist/weather-app/index.html');

  win.on('closed', () => {
    win = null;
  });
}

module.exports = createAppWindow;
