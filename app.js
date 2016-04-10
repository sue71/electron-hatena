const electron = require('electron');
const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow = null;

require('crash-reporter').start({
  productName: 'name',
  companyName: 'company',
  //submitUrl: 'your domain'
});

if (process.env.NODE_ENV === "development") {
  require('electron-debug')();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  // Load main window do not show and focus until ready to load contents
  mainWindow = new BrowserWindow({show: false, width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});
