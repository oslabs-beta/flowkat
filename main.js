const path = require('path');
const { BrowserWindow, app } = require('electron');

async function createWindow() {
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

  await win.loadFile('index.html');
}

try {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
} catch (e) {
  console.error('Error when attemping to require \'electron-reload\': ', e);
}

app.whenReady().then(async () => {
  await createWindow();

  // Whereas Linux and Windows apps quit when they have no windows open, macOS apps generally 
  // continue running even without any windows open, and activating the app when no windows are 
  // available should open a new one.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
