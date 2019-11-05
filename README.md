# Dialog sandbox

## Purpose
The purpose of this repo is to provide a basic Apostrophe boilerplate that will act as a testing ground for development of the `apostrophe-dialog-box` module. This boilerplate is pre configured to pull the shell `apostrophe-dialog-box` module from GitHub and do some light project-level configuration that stub in some of the features that need to exist. To develop locally you will need to pull both repos and symlink `apostrophe-dialog-box` into the `/node_modules` of this sandbox.

## Adding custom Dialog Box layout
- In `apostrophe-dialog-box-templates/views` add new `.html` file name of this file shall serves as a template name;
- Add `{% extends "base.html" %}` in the bigging of the new custom layout file to get dialog box blackout wrapper and content container
- Add customer layout to `{% block main %}` block;

## Getting started locally
- Clone this repo and https://github.com/apostrophecms/apostrophe-dialog-box into separate directories
- Run `npm install` and `npm link` inside the `apostrophe-dialog-box` directory

In the sandbox directory run
- `npm i`
- `npm node app.js apostrophe-users:add USERNAME admin`
- provide a password for new user when prompted
- `npm link apostrophe-dialog-box`

`npm start` will run the app
