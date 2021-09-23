const { BrowserWindow, app } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile('index.html');
}

try {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')  
  }); 
} catch(e) {
  console.log('Error when attemping to require \'electron-reload\': ', e);
}

app.whenReady().then(createWindow);
