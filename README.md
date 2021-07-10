# Microsoft teams Clone

🚀 `A free WebRTC browser-based video call, chat and screen sharing` 🚀

<br>

[//]: https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

Powered by `WebRTC` using google Stun and [numb](http://numb.viagenie.ca/) Turn.

Open the app in one of following **supported browser**

[//]: #![webrtc](www/images/webrtc.png)

[![Foo](www/images/browsers.png)](https://ms-teams-clone-demo.herokuapp.com/)

## https://ms-teams-clone-demo.herokuapp.com/

<br>

## Features

-   Entirely browser based
-   Unlimited number of conference rooms without call time limitation
-   Desktop and Mobile compatible
-   Optimized Room Url Sharing (share it to your participants, wait them to join)
-   WebCam Streaming (Front - Rear for mobile)
-   Audio Streaming
-   Screen Sharing to present documents, slides, and more...
-   File Sharing, share any files to your participants in the room
-   Select Audio Input - Output && Video source
-   Recording your Screen, Audio and Video
-   Chat with Emoji Picker & Private messages & Save the conversations
-   Simple collaborative whiteboard
-   Right click on the Video elements for more options
-   Direct `peer-to-peer` connection ensures lowest latency thanks to `webrtc`

## Demo

-   `Open` https://ms-teams-clone-demo.herokuapp.com/newcall
-   `Pick` your personal Room name and `Join To Room`
-   `Allow` to use the camera and microphone
-   `Share` the Room URL and `Wait` someone to join for video conference

## Quick start

-   You will need to have [Node.js](https://nodejs.org/en/blog/release/v12.22.1/) installed, this project has been tested with Node version 12.X
-   Clone this repo

## Setup Turn

-   Copy .env.template to .env
-   Follow the instructions provided there.

## Start the server

```js
npm start
```

-   Open http://localhost:3000 in browser

---

## Credits

Many Thanks to:

-   Miroslav Pejic (various features from Mirotalk)
-   ianramzy (html template)
-   vasanthv (webrtc)
-   Sajad (chat)
-   i-aryan (whiteboard)
