# Comma Tater

Add punctuation to long numbers for improved readability.

Most of the code is ~~shamelessly ripped off from~~ inspired by [Cloud-to-butt.](https://github.com/panicsteve/cloud-to-butt/)

Idea from a post in [One Sentence Startup Pitches.](https://www.facebook.com/groups/1500321840185061/permalink/1635141953369715/)


# INSTALLING

## USERS

### Firefox
1. Download the latest XPI from the [releases](https://github.com/KevinMGranger/comma-tater/releases) page
2. Go to your [Add-on manager](about:addons)
3. Click the gear and select "Install Add-on from file..."
4. Select the XPI.
5. Confirm you want to install the extension.
6. Happy browsing!

### Chrome
1. Download the latest CRX from the [releases](https://github.com/KevinMGranger/comma-tater/releases) page
2. Go to your [Extensions page](chrome://extensions/)
3. Click the checkbox to enable "Developer mode"
4. Drag the CRX onto the page.
5. Happy browsing!

## DEVELOPERS, DEVELOPERS, DEVELOPERS, DEVELOPERS

### Firefox
1. Clone the repo.
2. `cd comma-tater/commatater`
3. `jpm xpi`
4. Install the resultant XPI.

### Chrome
1. Clone the repo.
2. Go to your extension page.
3. Enable developer mode.
4. Click "Load unpacked extension."
5. Select the inner commatater folder.


# TODO

- Configurable commas versus dots (for other locales)
- Undo


# BUGS

- Does not work on file:// URLs in firefox
- Slow on large pages
- Probably more
