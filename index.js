/**
 * @fileoverview A promise-based, awaitable, browser-independent getUserMedia
 * function to get user's audio or video.
 * @author Anton Ivanov <anton@ivanov.hk>
 */

var getUserMediaSync = require('getusermedia');

/**
* Returns the stream of the user's audio or video, or throws
* a `NavigatorUserMediaError`.
* @param {object} [options] - The optional settings.
* @param {boolean} options.video - Whether to request the video. Default: true.
* @param {boolean} options.video - Whether to request the audio. Default: true.
* @returns {Promise<MediaStream>}
*/
function getUserMediaAsync(options) {
  return new Promise(function (resolve, reject) {
    if (!options) options = { video: true, audio: true };

    getUserMediaSync(options, function (err, stream) {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  });
}

/**
 * Returns the user's audio stream, or throws a `NavigatorUserMediaError`.
 * @returns {Promise<MediaStream>}
 */
function getUserAudioAsync() {
  return getUserMediaAsync({ audio: true, video: false });
}

module.exports = {
  getUserMedia: getUserMediaAsync,
  getUserAudio: getUserAudioAsync,
};