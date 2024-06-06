# Eureka!

![Eureka Logo](icon.png)

**Eureka!** - Your instant gateway to freely access scientific articles on Sci-Hub.

## Description
Eureka! is a Chrome extension designed to simplify accessing scientific articles by prepending the Sci-Hub URL to the current tab's URL. This tool helps bypass paywalls, granting you quick access to research papers and articles.

## Features
- One-click access to Sci-Hub
- User-friendly interface

## Installation
1. Clone or download the repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch at the top right.
4. Click the "Load unpacked" button and select the directory where your extension files are located.

## Usage
1. Click the Eureka! icon in the Chrome toolbar.
2. In the popup, click the "Search on Sci-Hub" button.
3. A new tab will open with the current article URL prepended with the Sci-Hub URL.

## Project Structure
```bash
my-chrome-extension/
├── manifest.json
├── popup.html
├── popup.js
├── background.js
└── icon.png
```
- `manifest.json`: The configuration file for the Chrome extension.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: The JavaScript file handling the button click event in the popup.
- `background.js`: The background script for the extension.
- `icon.png`: The icon displayed in the Chrome toolbar and README.
