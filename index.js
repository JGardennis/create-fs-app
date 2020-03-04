#!/usr/bin/env node
require("colors");

// Imports
const shell = require("shelljs");
const fs = require("fs");
const templates = require("./templates");

const appName = process.argv[2];
const appDir = `${process.cwd()}/${appName}`;
const clientDir = `${appDir}/client`;
const serverDir = `${appDir}/server`;

if (!appName) {
  console.log("No app name given".red);
  return;
}

if (fs.existsSync(appDir)) {
  console.log(`Directory ${appDir} already exists`.red);
  return;
}

fs.mkdirSync(appDir);

shell.cd(appDir);

// Build client-side folders & files
fs.mkdirSync(`${clientDir}`);
fs.mkdirSync(`${clientDir}/src`);
fs.mkdirSync(`${clientDir}/src/components`);
