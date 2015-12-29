'use strict';

// set module to controll app
var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

// finish app if all window are closed
app.on('window-all-closed', function() {
  app.quit();
});

// initialize electron
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
