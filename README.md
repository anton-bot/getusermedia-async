Asynchronous, browser-independent wrapper for the getUserMedia function.
===================

### Short sample ###

```js
var getUserMedia = require('getusermedia-async').getUserMedia;
var audioStreamPromise = getUserMedia({ video: false, audio: true});
// OR:
var audioStream = await getUserMedia({ video: false, audio: true});
```

### What's it for? ###

This is a promise-based, awaitable, browser-independent getUserMedia function to get user's audio or video.

It is based on the `getusermedia` package by Henrik Joreteg which actually does most of the job.

### Methods ###

* `getUserMedia(options)`: returns a stream, or throws a `NavigatorUserMediaError`. `options` include two boolean properties: `audio` (default: `true`) and `video` (default: `true`).
* `getUserAudio()`: shortcut to `getUserMedia({ audio: true, video: false })`.

**Example:**

```js
var getUserAudio = require('getusermedia-async').getUserAudio;
var audioStreamPromise = getUserAudio();
```

### Comments and suggestions ###

If you have any comments, contact me here: https://github.com/catcher-in-the-try/