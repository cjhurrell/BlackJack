const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater'); // ← correct import
const path = require('path');

let mainWindow;

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: __dirname + '/Cards/Logo.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html'); // currently loads Blackjack
}

app.whenReady().then(createWindow);

autoUpdater.checkForUpdatesAndNotify();